import { createLogger, format, transports } from 'winston';

const logger = createLogger({
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.errors({ stack: true }),
		format.splat(),
		format.json()
	),
	transports: [
		//
		// - Write all logs on console
		// - Write all logs error (and below) to `error.log`.
		//
		new transports.Console(),
		new transports.File({ filename: 'logs/error.log', level: 'error' }),
	]
});

export default logger;