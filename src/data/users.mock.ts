export interface User {
    email: string;
    password: string;
    name: string;
}

export const usersMock = [
    {
        email: "email@example.com",
        password: "password123",
        name: "John Doe"
    },
    {
        email: "jane@example.com",
        password: "password456",
        name: "Jane Smith"
    }
]