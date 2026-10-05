import { UserEntity } from "../../domain/entities/user.entity.js";

export const usersMock: UserEntity[] = [
    new UserEntity({
        email: "email@example.com",
        password: "password123",
        name: "John Doe"
    }),
]