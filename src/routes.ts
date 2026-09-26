import { Router } from "express";
import { SurveysRoutes } from "./surveys/routes.js";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        
        router.use("/api/surveys", SurveysRoutes.routes);

        return router;

    }
    
}