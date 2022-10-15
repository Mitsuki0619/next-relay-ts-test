import express from "express";
import { graphqlHTTP } from "express-graphql";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";

const prisma = new PrismaClient();

const typeDefs = `
  type User {
    email: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }
`;
const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
