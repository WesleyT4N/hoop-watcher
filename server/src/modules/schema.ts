import { gql } from "apollo-server-express";
import { merge } from "lodash";
import { Team, User } from "./types";

const queries: any = gql`
  type Query {
    _empty: String
  }
`;

const resolvers: any = {};

export default {
  typeDefs: [queries, Team.typeDef, User.typeDef],
  resolvers: merge(resolvers, Team.resolvers, User.resolvers),
};
