import BetterSqlite3 from "better-sqlite3";
import { ApolloError } from "apollo-server-express";

import { Game } from "../../../types";
import server from "../../../server";
import { DBGame } from "../team/retrieve";

const resolver = async (_: any, { id }: { id: string }): Promise<Game> => {
  const db: BetterSqlite3.Database = server.getDb();
  const query = "SELECT * FROM games WHERE id = ?";
  const stmt = db.prepare(query);
  let game: DBGame = stmt.get(id);
  if (!game) {
    throw new ApolloError(
      `Requested entity not found for given args id: '${id}'`
    );
  }
  return {
    ...game,
    homeScore: game.home_score,
    awayScore: game.away_score,
    home: {
      id: game.home,
    },
    away: {
      id: game.away,
    },
    winner: {
      id: game.winner,
    },
  };
};

export default resolver;
