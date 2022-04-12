import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import multer from 'multer';
import { init as routesInit } from './routers/routes';
import { handle as errorsHandle } from './middlewares/errors';
import { sequelize } from '../../driven-adapters/sequelize/connection';
import config from '../../../application/config';
import logger from '../../../application/logger/winston';

export const startup = {
  start: async () => {
    const app: express.Express = express();
    const upload = multer();

    try {
      await sequelize.authenticate({ logging: false });

      app.use(cors({ origin: '*' }));
      app.use(bodyParser.json());
      app.use(upload.any());

      app.get('/', (_, res) => {
        res.send('Using global strict transport security policy!');
      });

      const swaggerDocument = YAML.load('src/application/documentation/swagger.yaml');
      app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

      app.listen(config.get('port'), () => {
        logger.info(`Application listening on port: ${config.get('port')}`);
      })

      routesInit(app);
      app.use(errorsHandle);
    } catch (err) {
      logger.error('Fail to start application');
      throw err;
    }
  }
};
