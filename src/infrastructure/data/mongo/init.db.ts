import mongoose from "mongoose";

export class MongoDb {

    static async init({ url, dbName }: { url: string, dbName: string }) {

        try {

            await mongoose.connect(url, {
                dbName: dbName
            });

        } catch (error) {
            throw error;
        }

    }

}