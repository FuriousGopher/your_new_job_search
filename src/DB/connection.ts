import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';
import { Users } from './models/Users';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'database-1.c360cuk06wdr.eu-north-1.rds.amazonaws.com',
  port: 3306,
  database: 'root',
  username: 'root',
  password: 'fgdfg456fgdfs',
  models: [Users],
});
