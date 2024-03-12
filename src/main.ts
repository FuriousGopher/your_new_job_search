import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Types/types';
import { resolvers } from './GraphQL/resolvers';
import { sequelize } from './DB/connection';

export const app = express();
const port = 3000;

const startApp = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

  app.use(
    '/graphql',
    graphqlHTTP({ schema, rootValue: resolvers, graphiql: true }),
  );
};

startApp();
