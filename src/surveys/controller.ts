import type { Request, Response } from "express";

interface Survey {
    id: string;
    title: string;
    description: string;
};

const surveys: Survey[] = [
    {
        id: "1",
        title: "Customer Satisfaction Survey",
        description: "A survey to measure customer satisfaction."
    },
    {
        id: "2",
        title: "Employee Engagement Survey",
        description: "A survey to assess employee engagement."
    },
    {
        id: "3",
        title: "Product Feedback Survey",
        description: "A survey to gather feedback on our products."
    },
];

export class SurveyController {

    public static getSurveys(req: Request, res: Response): void {

        res.status(200).json(surveys);

    }

    public static createSurvey(req: Request, res: Response): void {

        res.status(201).json({ message: "Create survey" });

    }

    public static submitSurvey(req: Request, res: Response): void {

        res.status(200).json({ message: "Submit survey" });

    }

}