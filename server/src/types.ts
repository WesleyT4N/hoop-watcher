export interface Team {
  id: string;
  name: string;
  fullName: string;
  abbrev: string;
  conference: string;
  division: string;
  wins: number;
  losses: number;
  games: Array<Game>;
}

export interface Game {
  id: string;
  date: string;
  home: string;
  away: string;
  season: number;
  homeScore: number;
  awayScore: number;
  winner: string;
  highlights: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  teams: Array<Team>;
}
