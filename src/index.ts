import Server from './Server';
import config from './config/configurations';

const server = new Server(config);
server.init();
