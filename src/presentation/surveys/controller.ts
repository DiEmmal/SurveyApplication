import type { Request, Response } from "express";
import { CreateSurveyDto } from "../../domain/dtos/survey/create.dto.js";
import { SurveyEntity } from "../../domain/entities/survey.entity.js";
import { SubmitSurveyDto } from "../../domain/dtos/survey/submit.dto.js";
import { SurveyModel } from "../../infrastructure/data/mongo/models/survey.model.js";
import { SurveyResponseModel } from "../../infrastructure/data/mongo/models/survey-response.model.js";

export class SurveyController {

    public getSurveys = async (req: Request, res: Response) => {

        const surveys = await SurveyModel.find();

        res.status(200).json(surveys);

    }

    public getSurveyById = async (req: Request, res: Response) => {

        const surveyId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        if(!surveyId) return res.status(400).json({ message: "Survey ID is required" });

        const survey = await SurveyModel.findOne({ id: surveyId });

        if (survey) {
            res.status(200).json(survey);
        } else {
            res.status(404).json({ message: "Survey not found" });
        }

    }

    public createSurvey = async (req: Request, res: Response) => {
        if (!req.body) return res.status(400).json({ message: "Request body is missing" });
        const authorId = Array.isArray(req.params.authorId) ? req.params.authorId[0] : req.params.authorId;

        const { dto, error } = CreateSurveyDto.create({ ...req.body, authorId });

        if (error) {
            return res.status(400).json({ message: error });
        }

        if (!dto) return res.status(500).json({ message: "Error processing the request" });

        const newSurvey = new SurveyEntity(dto);
        await SurveyModel.create(newSurvey);

        res.status(201).json({ message: "Survey created successfully", survey: newSurvey, link: `/surveys/${newSurvey.id}` });

    }

    public submitSurvey = async (req: Request, res: Response) => {
        if (!req.body) return res.status(400).json({ message: "Request body is missing" });
        const surveyId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        if (!surveyId) return res.status(400).json({ message: "Survey ID is required" });
        const { dto, error } = SubmitSurveyDto.create({ ...req.body, surveyId });

        if (error) {
            return res.status(400).json({ message: error });
        }

        if (!dto) return res.status(500).json({ message: "Error processing the request" });

        const survey = await SurveyModel.findOne({ id: surveyId });

        if (!survey) {
            return res.status(404).json({ message: "Survey not found" });
        }

        await SurveyResponseModel.create({ surveyId: dto.surveyId, answers: dto.answers });

        res.status(200).json({ message: "Survey submitted successfully", data: dto });

    }

}