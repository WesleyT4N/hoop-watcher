import { gql } from "apollo-server-express";
import Team from "../../resolvers/team";

const typeDef = gql`
  type Team {
    id: ID!
    name: String!
    fullName: String!
    abbrev: String!
    conference: String!
    division: String!
    wins: Int!
    losses: Int!
  }

  type TeamList {
    items: [Team]!
  }

  extend type Query {
    team(id: ID = "", name: String = "", abbrev: String = ""): Team
    teams: TeamList
  }

`

const resolvers = {
  Query: {
    team: Team.retrieve,
    teams: Team.search,
  },
};

export default {
  typeDef,
  resolvers,
};
