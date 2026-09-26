import { ENVS } from './config/envs.js';
import { AppRoutes } from './routes.js';
import { Server } from './server.js';

const server = new Server(ENVS.PORT);

server.setRoutes(AppRoutes.routes);