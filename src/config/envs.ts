process.loadEnvFile()

export const ENVS = {
    PORT: process.env.PORT ? +process.env.PORT : 3001,
    MONGO_PASS: process.env.MONGO_PASS,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_URL: process.env.MONGO_URL,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
};