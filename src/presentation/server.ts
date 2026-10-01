import express, { Router } from "express";

export class Server {
    port: number;

    public readonly app = express();

    constructor(port: number) {
        this.port = port;
    };

    public setRoutes(routes: Router): void {
        //* Middlewares
        this.app.use(express.json()); // For parsing application/json
        this.app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

        this.app.use(routes);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}