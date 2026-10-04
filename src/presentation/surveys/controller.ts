import type { Request, Response } from "express";
import { surveys } from "../../infrastructure/data/survey.mock.js";
import { randomUUID } from "crypto";

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
        const { title, description, questions } = req.body;
        const authorId = Array.isArray(req.params.authorId) ? req.params.authorId[0] : req.params.authorId;

        if (!title || !description || !questions || !authorId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        if(!Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: "Questions must be a non-empty array" });
        }

        for (const question of questions) {
            if (!question.text || !question.type || !question.options) {
                if(question.type === "multiple-choice" && (!question.options || question.options.length === 0)) {
                    return res.status(400).json({ message: "Multiple-choice questions must have options" });
                }

                return res.status(400).json({ message: "Each question must have text, type, and options" });
            }
        }

        const newSurvey = {
            id: `${surveys.length + 1}`,
            title,
            description,
            questions,
            authorId
        };

        surveys.push(newSurvey);

        res.status(201).json({ message: "Survey created successfully", survey: { title, description, questions, authorId }, link: `/surveys/${newSurvey.id}` });

    }

    public submitSurvey = (req: Request, res: Response) => {
        if(!req.body) return res.status(400).json({ message: "Request body is missing" });
        const surveyId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        const survey = surveys.find(s => s.id === surveyId);

        if (!survey) {
            return res.status(404).json({ message: "Survey not found" });
        }

        res.status(200).json({ message: "Survey submitted successfully" });

    }

}