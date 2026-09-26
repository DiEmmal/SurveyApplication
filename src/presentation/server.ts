import express, { Router } from "express";

export class Server {

    public readonly app = express();

    constructor(port: number) {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    };

    public setRoutes(routes: Router): void {
        //* Middlewares
        this.app.use(express.json()); // For parsing application/json
        this.app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

        this.app.use(routes);
    }

}