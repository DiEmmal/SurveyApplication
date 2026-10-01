import type { Request, Response } from "express";
import { usersMock, type User } from "../../data/users.mock.js";
import { AuthService } from "../../services/auth.service.js";

export class AuthController {

    constructor(
        private readonly authService = new AuthService()
    ) { }

    public login = (req: Request, res: Response) => {
        if (!req.body) return res.status(400).json({ message: "Request body is missing" });

        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

        const user = usersMock.find(u => u.email === email && this.authService.comparePassword(password, u.password));
        if (!user) return res.status(401).json({ message: "Invalid email or password" });

        res.json({ message: `User logged in successfully, hello again ${user.name}` });
    }

    public register = (req: Request, res: Response) => {
        if (!req.body) return res.status(400).json({ message: "Request body is missing" });

        let { email, password, name } = req.body;

        if (!email || !password || !name) return res.status(400).json({ message: "Email, password, and name are required" });
        password = this.authService.hashPassword(password);
        const newUser: User = { email, password, name };
        usersMock.push(newUser);

        res.json({ message: `User registered successfully, welcome ${newUser.name}`, user: newUser });
    }

}