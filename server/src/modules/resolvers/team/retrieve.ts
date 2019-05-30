import { ApolloError } from "apollo-server-express";
import fetch from "node-fetch";
import BetterSqlite3 from "better-sqlite3";

import { Team } from '../../../types';
import server from "../../../server";
import { convDateString, getCurrSeasonYear, isToday } from "../../util";


const getGames = async (id: string): Promise<any> => {
  const currYear = getCurrSeasonYear();
  const url = `https://www.balldontlie.io/api/v1/games?seasons[]=${currYear}&team_ids[]=${id}&per_page=110`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data.filter((game: any) => game.status === "Final");
};

const getWinLoss = (teamId: number, games: Array<any>): {
  wins: number,
  losses: number,
} => {
  return games.reduce((record, game) => {
    if (game.winner === teamId) {
      record.wins++;
    } else {
      record.losses++;
    }
    return record;
  }, {
    wins: 0,
    losses: 0,
  });
};

const storeGames = (games: Array<any>, db: BetterSqlite3.Database): void => {
  const query = `INSERT OR IGNORE INTO games
    (id, date, home, away, season, home_score, away_score, winner)
    VALUES (@id, @date, @home, @away, @season, @homeScore, @awayScore, @winner)`;
  const insert = db.prepare(query);
  const insertMany = db.transaction((games: Array<any>) => {
    for (const game of games) insert.run(game);
  });
  insertMany(games);
};

const storeRecord = (
  teamId: number,
  teamRecord: { wins: number, losses: number },
  db: BetterSqlite3.Database,
): void => {
  const query = `UPDATE teams
    SET wins = @wins, losses = @losses, updated_at = @updatedAt WHERE id = @id`;
  const update = db.prepare(query);
  update.run({
    id: teamId,
    updatedAt: convDateString((new Date()).toISOString()),
    ...teamRecord,
  });
};

const resolver = async (obj, { id, name, abbrev }): Promise<Team> => {
  const db = server.getDb();
  const query = "SELECT * FROM teams WHERE id = ? OR name = ? OR abbrev = ?";
  const stmt = db.prepare(query);
  let team = stmt.get(id, name, abbrev);
  if (!team) {
    throw new ApolloError(`Requested entity not found for given args id: '${id}', name: '${name}', abbrev: '${name}' `);
  }
  const lastUpdated = team.updated_at;
  if (!isToday(lastUpdated)) {
    // Retrieve any games we missed since last update
    let games = await getGames(team.id);
    games = games.map((game: any) => ({
      id: game.id,
      date:  convDateString(game.date),
      home: game.home_team.id,
      away: game.visitor_team.id,
      season: game.season,
      homeScore: game.home_team_score,
      awayScore: game.visitor_team_score,
      winner: (game.home_team_score > game.visitor_team_score
        ? game.home_team.id
        : game.visitor_team.id),
    }));
    storeGames(games, db);
    const teamRecord = getWinLoss(team.id, games);
    storeRecord(team.id, teamRecord, db);
    team.wins = teamRecord.wins;
    team.losses = teamRecord.losses;
  };
  return {
    fullName: team.full_name,
    ...team,
  };
};

export default resolver;