export interface User {
    email: string;
    password: string;
    name: string;
    id: string;
}

export const usersMock: User[] = [
    {
        email: "email@example.com",
        password: "password123",
        name: "John Doe",
        id: "1"
    }
]