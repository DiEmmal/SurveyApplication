import { ENVS } from './config/envs.js';
import { Server } from './server.js';

const server = new Server(ENVS.PORT);

server.app.get('/', (req, res) => {
    res.send('Hello to my Survey Application!');
});