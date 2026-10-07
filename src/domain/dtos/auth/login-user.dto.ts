export class LoginUserDto {

    private constructor(
        public readonly email: string,
        public readonly password: string
    ) { }

    public static create(props?: { email: string, password: string }): { error?: string, dto?: LoginUserDto } {

        if (!props) {
            return { error: "Properties are required" };
        }

        const { email, password } = props;

        if(!email) return { error: "Email is required" };
        if(!email.includes("@")) return { error: "Email must be valid" };
        if(!password) return { error: "Password is required" };
        if(password.length < 6) return { error: "Password must be at least 6 characters long" };
        
        if (typeof email !== "string" || typeof password !== "string") {
            return { error: "Email and password must be strings" };
        }

        if (email.trim() === "" || password.trim() === "") {
            return { error: "Email and password cannot be empty" };
        }

        return { dto: new LoginUserDto(email, password) };
    }

}