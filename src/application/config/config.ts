import { assignObject } from '../../infrastructure/utils/objects';
import convict from 'convict';
import configSchema from './schema';

const loadCustom = (environment: string): object => {
	const customEnvironmentFile = `./${environment}/`;

	let customConfig = {};
	try {
		customConfig = require(customEnvironmentFile).config;
	} catch (error) { }

	return customConfig;
}

const loadConfig = () => {
	require('dotenv').config();
	const environment = process.env.NODE_ENV;

	const envConfig = {
		environment,
		port: process.env.NODE_PORT || 8080,
		database: {
			host: process.env.NODE_API_DB_HOST || 'localhost',
			port: process.env.NODE_API_DB_PORT || '5432',
			name: process.env.NODE_API_DB_NAME || 'postgres',
			username: process.env.NODE_API_DB_USERNAME || '',
			password: process.env.NODE_API_DB_PASSWORD || '',
			dialect: process.env.NODE_API_DB_DIALECT || 'postgres',
			schema: process.env.NODE_API_DB_SCHEMA_NAME || '',
		},
		redis: {
			host: process.env.NODE_API_REDIS_HOST,
			port: +(process.env.NODE_API_REDIS_PORT || 6379)
		}
	};

	const environmentConfig = assignObject(loadCustom(environment!), envConfig);
	const convictConfig = convict(configSchema);
	convictConfig.load(environmentConfig).validate();

	return convictConfig;
};

const config = loadConfig();
export default config;