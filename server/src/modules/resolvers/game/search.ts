import { Game } from "../../../types";
import server from "../../../server";
import { DBGame } from "../team/retrieve";

const resolver = (obj, { teamId }): Array<Game> => {
  const db = server.getDb();
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
