import { ApolloError } from "apollo-server-express";
import fetch from "node-fetch";
import BetterSqlite3 from "better-sqlite3";

import { Game } from "../../../types";
import server from "../../../server";

const resolver = (obj, { id }): Game => {
  const db = server.getDb();
  const query = "SELECT * FROM games WHERE id = ?";
  const stmt = db.prepare(query);
  let game = stmt.get(id);
  if (!game) {
    throw new ApolloError(`Requested entity not found for given args id: '${id}'`);
  }
  return {
    homeScore: game.home_score,
    awayScore: game.away_score,
    winner: game.winner,
    ...game,
  }
};

export default resolver;
