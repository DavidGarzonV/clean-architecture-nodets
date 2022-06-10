import logger from '../../application/logger/winston';
import RestServerApp from './api/server';
import ConsoleApp from './cli/server';

logger.log('info', 'Starting rest server app...');
const restServerApp = new RestServerApp();
restServerApp.start();
logger.log('info', 'Starting cli app...');
const consoleApp = new ConsoleApp();
consoleApp.start();