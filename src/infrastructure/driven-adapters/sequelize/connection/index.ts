import { Options, Dialect, Sequelize } from 'sequelize';
import config from '../../../../application/config';

const database = config.get('database');

const options: Options = {
  host: database.host,
  port: +database.port,
  schema: config.get('database.schema'),
  dialect: database.dialect as Dialect,
}

export const sequelize = new Sequelize(database.name, database.username, database.password, options);