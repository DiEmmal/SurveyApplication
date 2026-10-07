export class RegisterUserDto {

    private constructor(
        public readonly email: string,
        public readonly password: string,
        public readonly name: string
    ) { }

    public static create(props: { email: string, password: string, name: string }): { error?: string, dto?: RegisterUserDto } {
        if (!props) {
            return { error: "Properties are required" };
        }

        const { email, password, name } = props;
        
        if(!email) return { error: "Email is required" };
        if(!email.includes("@")) return { error: "Email must be valid" };
        if(!password) return { error: "Password is required" };
        if(password.length < 6) return { error: "Password must be at least 6 characters long" };
        if(!name) return { error: "Name is required" };
        if(name.length > 30) return { error: "Name must be less than 30 characters long" };
        
        if (typeof email !== "string" || typeof password !== "string" || typeof name !== "string") {
            return { error: "Email, password, and name must be strings" };
        }

        if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
            return { error: "Email, password, and name cannot be empty" };
        }

        return { dto: new RegisterUserDto(email, password, name) };
    }

}