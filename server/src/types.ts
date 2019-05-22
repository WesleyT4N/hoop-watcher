export interface Team: {
  id: string;
  name: string;
  abbrev: string;
  wins: number;
  losses: number;
}

export interface Game {
  id: string;
  date: string;
  home: Team;
  away: Team;
  winner: Team;
  highlightUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  teams: [Team];
}
