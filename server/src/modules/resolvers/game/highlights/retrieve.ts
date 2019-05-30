import { ApolloError } from "apollo-server-express";
import fetch from "node-fetch";
import BetterSqlite3 from "better-sqlite3";

import { Game } from "../../../../types";
import server from "../../../../server";

const highlightSearchQuery = (game: Game, db: BetterSqlite3.Database): string => {
  const { home, away, date } = game;
  const teamNameQuery = db.prepare("SELECT name FROM teams WHERE id = ?").pluck();
  const homeName = teamNameQuery.get(home);
  const awayName = teamNameQuery.get(away);
  const gameDate = new Date(date).toDateString().slice(4);
  return `${awayName} vs ${homeName} Full Highlights ${gameDate}`;
};

const resolver = (game: Game): string => {
  const db = server.getDb();
  return highlightSearchQuery(game, db);
};

export default resolver;
