import { UUIDAdapter } from "../../config/uuid.adapter.js";
import type { RegisterUserDto } from "../dtos/auth/register-user.dto.js";

export interface CreateUser {
    email: string;
    password: string;
    name: string;
    id: string;
}

export class UserEntity {

    email: string;
    passwordHash: string;
    name: string;
    id: string;

    constructor(user: RegisterUserDto) {
        this.email = user.email;
        this.passwordHash = user.password;
        this.name = user.name;
        this.id = UUIDAdapter.generateUUID();
    }

}