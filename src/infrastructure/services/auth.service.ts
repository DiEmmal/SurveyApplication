import { BcryptAdapter } from "../../config/bcrypt.adapter.js";

export class AuthService {

    constructor(
        //DI
        private hashAdapter = new BcryptAdapter()
    ) { }

    public hashPassword(password: string): string {
        return this.hashAdapter.hashPassword(password);
    }

    public comparePassword(password: string, hashedPassword: string): boolean {
        return this.hashAdapter.comparePassword(password, hashedPassword);
    }

}