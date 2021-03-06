import { gql } from "apollo-server-express";
import Team from "../../resolvers/team";
import Game from "../../resolvers/game";
import { Team as TeamType } from "../../../types";

const typeDef = gql`
  type Team {
    id: ID!
    name: String
    fullName: String
    abbrev: String
    conference: String
    division: String
    logo: String
    wins: Int
    losses: Int
    games: [Game]
  }

  extend type Query {
    team(id: ID = "", name: String = "", abbrev: String = ""): Team
    teams: [Team]
  }
`;

const resolvers = {
  Query: {
    team: Team.retrieve,
    teams: Team.search,
  },
  Team: {
    games: (team: TeamType) => Game.search(null, { teamId: team.id }),
  },
};

export default {
  typeDef,
  resolvers,
};
