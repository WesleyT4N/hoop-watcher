import { DBTeam } from "../../../team/search";
import { Game } from "../../../../../types";

export const mockTeam1: DBTeam = {
  id: "1",
  name: "mock name 1",
  city: "mock",
  conference: "mock",
  division: "mock",
  abbrev: "MCK 1",
  full_name: "mock full name 1",
  wins: 0,
  losses: 0,
  logo: "logo_link",
};

export const mockTeam2: DBTeam = {
  id: "2",
  name: "mock name 2",
  city: "mock",
  conference: "mock",
  division: "mock",
  abbrev: "MCK 2",
  full_name: "mock full name 2",
  wins: 0,
  losses: 0,
  logo: "logo_link",
};

export const mockGame: Game = {
  id: "1",
  date: "some-date",
  home: {
    ...mockTeam1,
    fullName: mockTeam1.full_name,
  },
  away: {
    ...mockTeam2,
    fullName: mockTeam2.full_name,
  },
  season: 2020,
  homeScore: 80,
  awayScore: 70,
  winner: {
    ...mockTeam1,
    fullName: mockTeam1.full_name,
  },
};
