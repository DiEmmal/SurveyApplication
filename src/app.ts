import { ENVS } from './config/envs.js';
import { MongoDb } from './infrastructure/data/mongo/init.db.js';
import { AppRoutes } from './presentation/routes.js';
import { Server } from './presentation/server.js';

const server = new Server(ENVS.PORT);

server.setRoutes(AppRoutes.routes);

await MongoDb.init({
    dbName: ENVS.MONGO_DB_NAME!,
    url: ENVS.MONGO_URL!
});

server.start();