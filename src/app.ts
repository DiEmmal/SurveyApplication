import { ENVS } from './config/envs.js';
import { AppRoutes } from './domain/routes.js';
import { Server } from './domain/server.js';

const server = new Server(ENVS.PORT);

server.setRoutes(AppRoutes.routes);