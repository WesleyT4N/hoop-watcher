import { gql } from "apollo-server-express";
import Game from "../../resolvers/game";
import Team from "../../resolvers/team";
import { Game as GameType } from "../../../types";

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
    highlights: String
  }

  type GameList {
    items: [Game]!
  }

  extend type Query {
    game(id: ID = ""): Game
  }
`;

const resolvers = {
  Query: {
    game: Game.retrieve,
  },
  Game: {
    home: (game: GameType) =>
      Team.retrieve(game, { id: game.home.id, name: "", abbrev: "" }),
    away: (game: GameType) =>
      Team.retrieve(game, { id: game.away.id, name: "", abbrev: "" }),
    winner: (game: GameType) =>
      Team.retrieve(game, { id: game.winner.id, name: "", abbrev: "" }),
    highlights: (game: GameType) => Game.highlights.retrieve(game),
  },
};

export default {
  typeDef,
  resolvers,
};
