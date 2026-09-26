import type { Request, Response } from "express";
import { surveys } from "../../data/survey.mock.js";

export class SurveyController {

    public static getSurveys(req: Request, res: Response): void {

        res.status(200).json(surveys);

    }

    public static getSurveyById(req: Request, res: Response): void {

        const surveyId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        const survey = surveys.find(s => s.id === surveyId);

        if (survey) {
            res.status(200).json(survey);
        } else {
            res.status(404).json({ message: "Survey not found" });
        }

    }

    public static getSurveyQuestions(req: Request, res: Response): void {

        const surveyId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        const survey = surveys.find(s => s.id === surveyId);

        if (survey) {
            res.status(200).json(survey.questions);
        } else {
            res.status(404).json({ message: "Survey not found" });
        }

    }

    public static createSurvey(req: Request, res: Response): void {

        res.status(201).json({ message: "Create survey" });

    }

    public static submitSurvey(req: Request, res: Response): void {

        res.status(200).json({ message: "Submit survey" });

    }

}