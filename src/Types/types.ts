import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import { resolvers } from '../GraphQL/resolvers';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

export const DogsType = new GraphQLObjectType({
  name: 'DogsType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLString },
    fav_food: { type: GraphQLString },
    createdAt: { type: GraphQLString }, // Include createdAt if needed
  }),
});

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    // to get all users
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return resolvers.Query.users();
      },
    },
    dogs: {
      type: new GraphQLList(DogsType),
      resolve() {
        return resolvers.Query.users();
      },
    },
    // to get user by id
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent: never, args) {
        return resolvers.Query.user(parent, args.id);
      },
    },
  },
});

export const mutations = new GraphQLObjectType({
  name: 'mutations',
  fields: {
    // adding user
    addUser: {
      type: UserType,
      args: { name: { type: GraphQLString }, email: { type: GraphQLString } },
      resolve(parent: never, { name, email }) {
        return resolvers.Mutation.addUser(parent, { name, email });
      },
    },
    // update user
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        name: { type: GraphQLString },
      },
      resolve(parent: never, { id, name, email }) {
        return resolvers.Mutation.updateUser(parent, { id, name, email });
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});
