import { ENVS } from './config/envs.js';
import { AppRoutes } from './presentation/routes.js';
import { Server } from './presentation/server.js';

const server = new Server(ENVS.PORT);

server.setRoutes(AppRoutes.routes);