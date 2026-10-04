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
        
        if (!email || !password) {
            return { error: "Missing required fields" };
        }

        return { dto: new LoginUserDto(email, password) };
    }

}