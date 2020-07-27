import BetterSqlite3 from "better-sqlite3";
import { Game } from "../../../types";
import server from "../../../server";
import { DBGame } from "../team/retrieve";

const resolver = (_, { teamId }): Array<Game> => {
  const db: BetterSqlite3.Database = server.getDb();
  const stmt = db.prepare("SELECT * FROM games WHERE home = ? OR away = ?");
  const games: Array<DBGame> = stmt.all(teamId, teamId);
  return games.map((game) => ({
    ...game,
    home: {
      id: game.home,
    },
    away: {
      id: game.away,
    },
    homeScore: game.home_score,
    awayScore: game.away_score,
    winner: {
      id: game.winner,
    },
  }));
};

export default resolver;
