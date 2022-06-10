import logger from '../../../application/logger/winston';
import ConsoleApp from './server';

logger.log('info', 'Starting cli app...');
const consoleApp = new ConsoleApp();
consoleApp.start();