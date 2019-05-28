import fetch from "node-fetch";
import BetterSqlite3 from "better-sqlite3";

import { Team } from "../../../types";
import server from "../../../server";
import { NBA_TEAM_COUNT } from "../../constants";
import { getCurrSeasonYear } from "../../util";

const getTeams = async (): Promise<Array<any>> => {
  const response = await fetch("https://www.balldontlie.io/api/v1/teams");
  const data = await response.json();
  return data.data;
}

const prepopulate = async (db: BetterSqlite3.Database): Promise<void> => {
  const teamData = await getTeams();
  const teams = teamData.map((team: any) => ({
    fullName: team.full_name,
    abbrev: team.abbreviation,
    ...team,
  }))
  const insert = db.prepare(`INSERT OR REPLACE INTO teams 
    (id, name, full_name, abbrev, conference, division)
    VALUES (@id, @name, @fullName, @abbrev, @conference, @division)`);

  const insertMany = db.transaction(teams => {
    for (const team of teams) insert.run(team);
  });
  
  insertMany(teams);
};

const teamsInitialized = (db: BetterSqlite3.Database): boolean => {
  const stmt = db.prepare("SELECT COUNT(*) AS teamCount FROM teams");
  const teamCount = stmt.get().teamCount;
  return teamCount === NBA_TEAM_COUNT;
}

const transform = (resolverOutput: Team[]): any => {
  return {
    items: resolverOutput,
  };
};

const resolver = (): Team[] => {
  const db = server.getDb();
  // Should only be needed for new instances if the application.
  if (!teamsInitialized(db)) {
    prepopulate(db);
  }
  const stmt = db.prepare("SELECT * FROM teams");
  const teams = stmt.all().map((team: any): Team => ({
    fullName: team.full_name,
    ...team,
  }));
  return transform(teams);
};



export default resolver;