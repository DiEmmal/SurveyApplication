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
        if (!email || !password || !name) {
            return { error: "Missing required fields" };
        }

        return { dto: new RegisterUserDto(email, password, name) };
    }

}