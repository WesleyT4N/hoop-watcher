import { DBGame } from "../../team/retrieve";
import { Game } from "../../../../types";

export const mockGame: DBGame = {
  id: "1",
  date: "some-date",
  home: "1",
  away: "2",
  season: 2020,
  home_score: 80,
  away_score: 70,
  winner: "1",
};

export const mockGames: Array<DBGame> = [
  {
    id: "1",
    date: "some-date",
    home: "1",
    away: "2",
    season: 2020,
    home_score: 80,
    away_score: 70,
    winner: "1",
  },
  {
    id: "2",
    date: "some-date-2",
    home: "2",
    away: "1",
    season: 2020,
    home_score: 40,
    away_score: 30,
    winner: "2",
  },
  {
    id: "3",
    date: "some-date-3",
    home: "3",
    away: "1",
    season: 2020,
    home_score: 20,
    away_score: 30,
    winner: "1",
  },
];

export const allGames: Array<Game> = [
  {
    id: "1",
    date: "some-date",
    home: {
      id: "1",
    },
    away: {
      id: "2",
    },
    season: 2020,
    homeScore: 80,
    awayScore: 70,
    winner: {
      id: "1",
    },
  },
  {
    id: "2",
    date: "some-date-2",
    home: {
      id: "2",
    },
    away: {
      id: "1",
    },
    season: 2020,
    homeScore: 40,
    awayScore: 30,
    winner: {
      id: "2",
    },
  },
  {
    id: "3",
    date: "some-date-3",
    home: {
      id: "3",
    },
    away: {
      id: "1",
    },
    season: 2020,
    homeScore: 20,
    awayScore: 30,
    winner: {
      id: "1",
    },
  },
];
