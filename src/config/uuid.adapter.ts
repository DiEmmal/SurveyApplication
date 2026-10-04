export class UUIDAdapter {

    public static generateUUID(): string {
        return crypto.randomUUID();
    }

}