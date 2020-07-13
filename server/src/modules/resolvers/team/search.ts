import fetch from "node-fetch";
import BetterSqlite3 from "better-sqlite3";

import { Team } from "../../../types";
import server from "../../../server";
import { NBA_TEAM_COUNT } from "../../constants";


export type APITeam = {
  id: string,
  abbreviation: string,
  city: string,
  conference: string,
  division: string,
  full_name: string,
  name: string,
}

export type DBTeam = {
  id: string,
  abbrev: string,
  city: string,
  conference: string,
  division: string,
  full_name: string,
  name: string,
  logo: string,
  wins: number,
  losses: number,
}

const getTeams = async (): Promise<Array<APITeam>> => {
  const response = await fetch("https://www.balldontlie.io/api/v1/teams");
  const data = await response.json();
  return data.data;
}

const prepopulate = async (db: BetterSqlite3.Database): Promise<void> => {
  const teamData = await getTeams();
  const teams: Array<DBTeam> = teamData.map((team: APITeam) => ({
    abbrev: team.abbreviation,
    logo: `/assets/logos/${team.abbreviation}.svg`,
    wins: 0,
    losses: 0,
    ...team,
  }));
  const insert = db.prepare(`INSERT OR REPLACE INTO teams
    (id, name, full_name, abbrev, conference, division, logo)
    VALUES (@id, @name, @full_name, @abbrev, @conference, @division, @logo)`);

  const insertMany = db.transaction(teams => {
    for (const team of teams) insert.run(team);
  });

  insertMany(teams);
};

const teamsInitialized = (db: BetterSqlite3.Database): boolean => {
  const stmt = db.prepare("SELECT COUNT(*) AS teamCount FROM teams");
  const teamCount: number = stmt.get().teamCount;
  return teamCount === NBA_TEAM_COUNT;
}

const resolver = (): Team[] => {
  const db = server.getDb();
  // Should only be needed for new instances if the application.
  if (!teamsInitialized(db)) {
    prepopulate(db);
  }
  const stmt = db.prepare("SELECT * FROM teams");
  return stmt.all().map((team: DBTeam): Team => ({
    fullName: team.full_name,
    games: [],
    ...team,
  }));
};

export default resolver;
