import type { Request, Response } from "express";

import { AuthService } from "../../infrastructure/services/auth.service.js";
import { usersMock } from "../../infrastructure/data/users.mock.js";
import { UserEntity } from "../../domain/entities/user.entity.js";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto.js";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto.js";

export class AuthController {

    constructor(
        private readonly authService = new AuthService()
    ) { }

    public login = (req: Request, res: Response) => {
        if (!req.body) return res.status(400).json({ message: "Request body is missing" });
        
        const { dto, error } = LoginUserDto.create(req.body);
  
        if (error) return res.status(400).json({ message: error });

        const { email, password } = dto!;

        if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

        const user = usersMock.find(u => u.email === email && this.authService.comparePassword(password, u.passwordHash));

        if (!user) return res.status(401).json({ message: "Invalid email or password" });

        res.json({ message: `User logged in successfully, hello again ${user.name}` });
    }

    public register = (req: Request, res: Response) => {
        if (!req.body) return res.status(400).json({ message: "Request body is missing" });

        let { dto, error } = RegisterUserDto.create(req.body);

        if (error) return res.status(400).json({ message: error });

        const { email, password, name } = dto!;

        if (!email || !password || !name) return res.status(400).json({ message: "Email, password, and name are required" });

        const newUser = new UserEntity({ email, password: this.authService.hashPassword(password), name });
        usersMock.push(newUser);

        res.json({ message: `User registered successfully, welcome ${newUser.name}` });
    }

}