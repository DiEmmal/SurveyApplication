import bcrypt from "bcryptjs";

export class BcryptAdapter {

    hashPassword(password: string): string {

        const saltRounds = 10;

        const salt = bcrypt.genSaltSync(saltRounds);

        return bcrypt.hashSync(password, salt);

    }

    comparePassword(password: string, hashedPassword: string): boolean {

        return bcrypt.compareSync(password, hashedPassword);

    }

}