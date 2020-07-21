import fetch from "node-fetch";
import BetterSqlite3 from "better-sqlite3";

import { Team } from "../../../types";
import server from "../../../server";
import { NBA_TEAM_COUNT } from "../../constants";
import { ApolloError } from "apollo-server-express";

export type APITeam = {
  id: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};

export type DBTeam = {
  id: string;
  abbrev: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
  logo: string;
  wins: number;
  losses: number;
};

const getTeams = async (): Promise<Array<APITeam>> => {
  let response;
  try {
    response = await fetch("https://www.balldontlie.io/api/v1/teams");
  } catch (e) {
    throw new Error("Network error, cannot reach external API");
  }
  if (!response.ok) {
    throw new Error(`API Error when trying to fetch teams`);
  }
  const data = await response.json();
  return data.data;
};

export const PREPOPULATE_TEAMS_QUERY = `INSERT OR REPLACE INTO teams
    (id, name, full_name, abbrev, conference, division, logo)
    VALUES (@id, @name, @full_name, @abbrev, @conference, @division, @logo)`;

const prepopulate = async (db: BetterSqlite3.Database): Promise<void> => {
  try {
    const teamData = await getTeams();
    const teams: Array<DBTeam> = teamData.map((team: APITeam) => ({
      abbrev: team.abbreviation,
      logo: `/assets/logos/${team.abbreviation}.svg`,
      wins: 0,
      losses: 0,
      ...team,
    }));
    const insert = db.prepare(PREPOPULATE_TEAMS_QUERY);

    const insertMany = db.transaction((teams) => {
      for (const team of teams) insert.run(team);
    });

    insertMany(teams);
  } catch (e) {
    throw e;
  }
};

export const TEAM_COUNT_QUERY = "SELECT COUNT(*) AS teamCount FROM teams";

const teamsInitialized = (db: BetterSqlite3.Database): boolean => {
  const stmt = db.prepare(TEAM_COUNT_QUERY);
  const teamCount: number = stmt.get().teamCount;
  return teamCount === NBA_TEAM_COUNT;
};

const resolver = async (): Promise<Team[]> => {
  const db = server.getDb();
  // Should only be needed for new instances if the application.
  if (!teamsInitialized(db)) {
    try {
      await prepopulate(db);
    } catch (e) {
      throw new ApolloError("Error occurred during prepopulation");
    }
  }
  const stmt = db.prepare("SELECT * FROM teams");
  return stmt.all().map(
    (team: DBTeam): Team => ({
      fullName: team.full_name,
      games: [],
      ...team,
    })
  );
};

export default resolver;
