import { gql } from "apollo-server-express";
import Game from "../../resolvers/game";
import Team from "../../resolvers/team";

const typeDef = gql`
  type Game {
    id: ID!
    date: String!
    home: Team!
    away: Team!
    season: Int!
    homeScore: Int!
    awayScore: Int!
    winner: Team!
    highlights: String!
  }

  extend type Query {
    game(id: ID = ""): Game
  }
`

const resolvers = {
  Query: {
    game: Game.retrieve,
  },
  Game: {
    home: game => Team.retrieve(game, { id: game.home, name: "", abbrev: "" }),
    away: game => Team.retrieve(game, { id: game.away, name: "", abbrev: "" }),
    winner: game => Team.retrieve(game, { id: game.winner, name: "", abbrev: "" }),
    highlights: game => Game.highlights.retrieve(game),
  },
};

export default {
  typeDef,
  resolvers,
};
