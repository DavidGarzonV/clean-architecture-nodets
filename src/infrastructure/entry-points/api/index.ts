import logger from '../../../application/logger/winston';
import RestServerApp from './server';

logger.log('info', 'Starting rest server app...');
const restServerApp = new RestServerApp();
restServerApp.start();