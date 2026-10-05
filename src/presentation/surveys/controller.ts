import type { Request, Response } from "express";
import { surveyResponses, surveys } from "../../infrastructure/data/survey.mock.js";
import { CreateSurveyDto } from "../../domain/dtos/survey/create.dto.js";
import { SurveyEntity } from "../../domain/entities/survey.entity.js";
import { SubmitSurveyDto } from "../../domain/dtos/survey/submit.dto.js";

export class SurveyController {

    public getSurveys = (req: Request, res: Response) => {

        res.status(200).json(surveys);

    }

    public  getSurveyById = (req: Request, res: Response) => {

        const surveyId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        const survey = surveys.find(s => s.id === surveyId);

        if (survey) {
            res.status(200).json(survey);
        } else {
            res.status(404).json({ message: "Survey not found" });
        }

    }

    public createSurvey = (req: Request, res: Response) => {
        if(!req.body) return res.status(400).json({ message: "Request body is missing" });
        const authorId = Array.isArray(req.params.authorId) ? req.params.authorId[0] : req.params.authorId;

        const { dto, error } = CreateSurveyDto.create({ ...req.body, authorId });
        
        if (error) {
            return res.status(400).json({ message: error });
        }

        if(!dto) return res.status(500).json({ message: "Error processing the request" });

        const newSurvey = new SurveyEntity(dto);
        surveys.push(newSurvey);

        res.status(201).json({ message: "Survey created successfully", survey: newSurvey, link: `/surveys/${newSurvey.id}` });

    }

    public submitSurvey = (req: Request, res: Response) => {
        if(!req.body) return res.status(400).json({ message: "Request body is missing" });
        const surveyId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        if(!surveyId) return res.status(400).json({ message: "Survey ID is required" });
        const { dto, error } = SubmitSurveyDto.create({...req.body, surveyId});

        if (error) {
            return res.status(400).json({ message: error });
        }

        if(!dto) return res.status(500).json({ message: "Error processing the request" });

        const survey = surveys.find(s => s.id === surveyId);

        if (!survey) {
            return res.status(404).json({ message: "Survey not found" });
        }

        surveyResponses.push({
            answers: dto.answers,
            surveyId
        });

        res.status(200).json({ message: "Survey submitted successfully", data: dto });

    }

}