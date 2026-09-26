import { Router } from "express";
import { SurveysRoutes } from "./surveys/routes.js";
import { AuthRoutes } from "./auth/routes.js";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.use("/api/surveys", SurveysRoutes.routes);
        router.use("/api/auth", AuthRoutes.routes);

        return router;

    }

}