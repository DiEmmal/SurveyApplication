import express, { Router } from "express";

export class Server {
    public readonly app = express();

    constructor(port: number) {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    };

};