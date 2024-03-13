import express from 'express';
import { sequelize } from './DB/connection';
import { readFile } from 'node:fs/promises';
import 'dotenv/config';
import cors from 'cors';
import { authMiddleware, handleLogin } from './Auth/authMiddleware';
import { loginOrEmailValidators } from './validators/validatorForLoginOrEmailInput';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { resolvers } from './GraphQL/resolvers';
import fetchAndSaveJobs from "./utills/getJobsCron";
import cron from 'node-cron';

export const app = express();
const port = process.env.PORT;

const startApp = async () => {
  try {
    await sequelize.authenticate();
    app.use(cors(), express.json(), authMiddleware);
   // cron.schedule('0 0 * * *', fetchAndSaveJobs);
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

  app.post('/login', loginOrEmailValidators, handleLogin);

  const typeDefs = await readFile('./src/GraphQL/schema.graphql', 'utf8');

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  app.use('/graphql', expressMiddleware(apolloServer));
};

startApp();
