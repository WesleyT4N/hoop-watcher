import { Game } from "../../../types";
import server from "../../../server";

const resolver = (obj, { teamId }): Array<Game> => {
  const db = server.getDb();
  const stmt = db.prepare("SELECT * FROM games WHERE home = ? OR away = ?");
  const games = stmt.all(teamId, teamId);
  return games.map(game => ({
    homeScore: game.home_score,
    awayScore: game.away_score,
    winner: game.winner,
    ...game,
  }));
};


export default resolver;
