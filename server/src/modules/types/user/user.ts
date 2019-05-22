import { gql } from "apollo-server-express";

const typeDef = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    teams: [Team]
  }

  extend type Query{
    user(id: ID!): User
  }
`

const resolvers = gql`
  
`

export default {
  typeDef,
  resolvers,
};
