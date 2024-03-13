import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';
import { Users } from './models/Users';
import * as process from 'process';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  models: [Users],
});
