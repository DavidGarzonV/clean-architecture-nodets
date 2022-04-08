import { startup } from './infrastructure/entry-points/api/server';

console.info('Starting app...');
startup.start();