import { ApolloError } from "apollo-server-express";
import fetch from "node-fetch";
import BetterSqlite3 from "better-sqlite3";

import { Team } from '../../../types';
import server from "../../../server";
import { getCurrSeasonYear } from "../../util";

const isToday = (date: string): boolean => {
  const lastUpdateDate = new Date(date);
  const today = new Date();
  return lastUpdateDate.getDate() === today.getDate()
    && lastUpdateDate.getMonth() === today.getMonth()
    && lastUpdateDate.getFullYear() === today.getFullYear();
};

const getTeamGames = async (team: any): Promise<any> => {
  const { id } = team;
  const currYear = getCurrSeasonYear();
  const url = `https://www.balldontlie.io/api/v1/games?seasons[]=${currYear}&team_ids[]=${id}&per_page=110`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

const storeGames = (games: Array<any>, db: BetterSqlite3.Database): void => {
  const query = ``
  const stmt = db.prepare()
};

const resolver = async (obj, { id, name, abbrev }, context, info): Promise<Team> => {
  const db = server.getDb();
  const query = "SELECT * FROM teams WHERE id = ? OR name = ? OR abbrev = ?";
  const stmt = db.prepare(query);
  let team = stmt.get(id, name, abbrev);
  if (!team) {
    throw new ApolloError(`Requested entity not found for given args id: '${id}', name: '${name}', abbrev: '${name}' `);
  }
  const lastUpdated = team.updated_at;
  console.log(await getTeamGames(team));

  return {
    fullName: team.full_name,
    ...team,
  };
};

export default resolver;