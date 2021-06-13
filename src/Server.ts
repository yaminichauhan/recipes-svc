import * as express from 'express';
import config from './config/configurations';
import IConfig from './config/IConfig';
import Database from './libs/Database';
import router from './router';
import notFoundHandler from './middlewares/notFoundHandler';
import Swagger from './libs/Swagger';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import errorHandler from './middlewares/errorHandler';
console.log("....................config", config);

class Server {

    private app: express.Express;
    private configurations: IConfig;

    constructor(private config: any) {
        this.app = express();
        this.configurations = config;
      }

    public async init() {
        await Database.open(this.configurations.mongoUri );
        this.initCors();
        this.initJsonParser();
        this.initSwagger();
        this.setupRoutes();
        this.setupErrorHandler();
        this.app.listen(config.port, () => {
            console.log(`Server started listening at port ${config.port}`);
        });
    }

    private initJsonParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
      }

    private initCors() {
      this.app.use(cors({
        optionsSuccessStatus: 200,
        origin: '*'
      }))
    }

    private setupRoutes() {
        const { apiPrefix } = this.configurations;
    
        // mount all routes on /api path
        this.app.use(apiPrefix, router);
    
        // catch 404 and forward to error handler
        this.app.use(notFoundHandler);
      }

    private initSwagger() {
        const { swagger : { swaggerUrl, swaggerDefinition}}= this.configurations;
    
        const swaggerSetup = new Swagger();
    
        // JSON route
        this.app.use(
          `${swaggerUrl}.json`,
          swaggerSetup.getRouter({
            swaggerDefinition
          })
        );
    
        // UI route
        const { serve, setup } = swaggerSetup.getUI(swaggerUrl);
    
        this.app.use(swaggerUrl, serve, setup);
      }

    private setupErrorHandler() {
        const { nodeEnv } = this.configurations;
    
        // error handler, send stacktrace only during development
        this.app.use(errorHandler(nodeEnv));
      }
    
}

export default Server;
