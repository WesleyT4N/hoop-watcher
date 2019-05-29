export interface Team {
  id: string;
  name: string;
  fullName: string;
  abbrev: string;
  conference: string;
  division: string;
  wins: number;
  losses: number;
}

export interface Game {
  id: string;
  date: string;
  home: Team;
  away: Team;
  season: number;
  homeScore: number;
  awayScore: number;
  winner: Team;
  highlights: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  teams: Array<Team>;
}
