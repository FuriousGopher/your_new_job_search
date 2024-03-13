/*
import { Dogs } from '../DB/models/Dogs';

export const usersList = [
  { id: '1', name: 'Rick', email: 'some@email' },
  { id: '2', name: 'Dia', email: 'some@email' },
  { id: '3', name: 'Dog', email: 'some@email' },
  { id: '4', name: 'Steve', email: 'some@email' },
];

// Resolver functions
export const resolvers = {
  Query: {
    users: async () => {
      const a = await Dogs.findAll({
        attributes: ['id', 'name'], //TODO why like this ?
      });
      console.log('All users:', JSON.stringify(a, null, 2));
      console.log(a);
      return a;
    },
    user: (parent: never, args: { id: string }) => {
      return usersList.find((user) => user.id === args.id);
    },
  },
  Mutation: {
    addUser: (
      parent: never,
      { name, email }: { name: string; email: string },
    ) => {
      const newUser = {
        name,
        email,
        id: new Date().toString(),
      };
      usersList.push(newUser);
      return newUser;
    },
    updateUser: (
      parent: never,
      { id, name, email }: { id: string; name: string; email: string },
    ) => {
      const updatedUser = usersList.find((u) => u.id === id);
      updatedUser!.email = email;
      updatedUser!.name = name;
      return updatedUser;
    },
  },
  User: {
    // You can define any additional fields or resolvers for the User type here
  },
};
*/

export const resolvers = {
  Query: {
    greeting: () => 'Hello',
  },
};
