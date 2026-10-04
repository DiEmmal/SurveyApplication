import { Router } from "express";
import { SurveyController } from "./controller.js";

export class SurveysRoutes {

    static get routes(): Router {

        const router = Router();

        const controller = new SurveyController();

        router.get("/", controller.getSurveys);
        router.get("/:id", controller.getSurveyById);
        router.post("/create/:authorId", controller.createSurvey);
        router.post("/submit/:id", controller.submitSurvey);

        return router;

    }

}