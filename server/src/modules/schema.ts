import { gql } from "apollo-server-express";
import { merge } from "lodash";
import { Game, Team, User } from "./types";

const queries: any = gql`
  type Query {
    _empty: String
  }
`;

const resolvers: any = {};

export default {
  typeDefs: [queries, Game.typeDef, Team.typeDef, User.typeDef],
  resolvers: merge(resolvers, Game.resolvers, Team.resolvers, User.resolvers),
};
