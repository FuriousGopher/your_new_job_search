import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  port: 3306,
  database: 'home_db',
  host: 'localhost',
  logging: true,
  password: '9966',
  username: 'root',
  models: [__dirname + '/models'],
});
