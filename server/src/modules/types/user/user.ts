import { gql } from "apollo-server-express";
import User from "../../resolvers/user";

const typeDef = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    teams: [Team]
  }

  extend type Query {
    user(id: ID!): User
  }
`

const resolvers = {
  Query: {
    user: User.retrieve,
  },
};

export default {
  typeDef,
  resolvers,
};
