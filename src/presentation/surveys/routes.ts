import { Router } from "express";
import { SurveyController } from "./controller.js";

export class SurveysRoutes {

    static get routes(): Router {

        const router = Router();

        router.get("/", SurveyController.getSurveys);
        router.get("/:id", SurveyController.getSurveyById);
        router.get("/questions/:id", SurveyController.getSurveyQuestions);
        router.post("/create", SurveyController.createSurvey);
        router.post("/submit", SurveyController.submitSurvey);

        return router;

    }

}