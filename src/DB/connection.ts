import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  port: Number(process.env.DB_PORT),
  database: process.env.DATABASE,
  host: process.env.HOST,
  logging: true,
  password: process.env.DB_PASSWORD,
  username: process.env.BD_USERNAME,
  models: [__dirname + '/models'],
});
