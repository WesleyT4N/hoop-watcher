import { gql } from "apollo-server-express";
import { merge } from "lodash";
import { User } from "./types";

const queries: any = gql`
  type Query {
    _empty: String
  }
`;

const resolvers: any = {};

export default {
  typeDefs: [queries, User.typeDef],
  resolvers: merge(resolvers, User.resolvers),
};
