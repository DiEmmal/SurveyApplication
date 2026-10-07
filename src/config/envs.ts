import "dotenv/config";
import env from "env-var";

export const ENVS = {
    PORT: env.get("PORT").default("3001").asPortNumber(),
    MONGO_PASS: env.get("MONGO_PASS").required().asString(),
    MONGO_USER: env.get("MONGO_USER").required().asString(),
    MONGO_URL: env.get("MONGO_URL").required().asString(),
    MONGO_DB_NAME: env.get("MONGO_DB_NAME").required().asString(),
};