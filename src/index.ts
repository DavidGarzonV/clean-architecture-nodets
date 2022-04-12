import { startup } from './infrastructure/entry-points/api/server';
import logger from './application/logger/winston';

logger.log('info', 'Starting app...');
startup.start();