import { DBTeam } from "../search";

export const mockTeam: DBTeam = {
  id: "1",
  name: "mock name",
  city: "mock",
  conference: "mock",
  division: "mock",
  abbrev: "MCK",
  full_name: "mock full name",
  wins: 0,
  losses: 0,
  logo: "logo_link",
};

export const mockGameRetriveAPIResponse = {
  data: [
    {
      id: "47179",
      date: "2019-01-30T00:00:00.000Z",
      home_team: {
        id: "1",
        name: "mock name",
        abbreviation: "MCK",
        city: "mock",
        conference: "mock",
        division: "mock",
        full_name: "mock full name",
      },
      home_team_score: 126,
      period: 4,
      postseason: false,
      season: 2018,
      status: "Final",
      time: " ",
      visitor_team: {
        id: "4",
        abbreviation: "CHA",
        city: "Charlotte",
        conference: "East",
        division: "Southeast",
        full_name: "Charlotte Hornets",
        name: "Hornets",
      },
      visitor_team_score: 94,
    },
  ],
};

export const mockTeams: Array<DBTeam> = [
  {
    id: "1",
    abbrev: "ATL",
    city: "Atlanta",
    conference: "East",
    division: "Southeast",
    full_name: "Atlanta Hawks",
    name: "Hawks",
    wins: 0,
    losses: 0,
    logo: "hawks_logo",
  },
  {
    id: "2",
    abbrev: "BOS",
    city: "Boston",
    conference: "East",
    division: "Atlantic",
    full_name: "Boston Celtics",
    name: "Celtics",
    wins: 0,
    losses: 0,
    logo: "celtics_log",
  },
];

export const mockTeamSearchAPIResponse = {
  data: [
    {
      id: 1,
      abbreviation: "ATL",
      city: "Atlanta",
      conference: "East",
      division: "Southeast",
      full_name: "Atlanta Hawks",
      name: "Hawks",
    },
    {
      id: 2,
      abbreviation: "BOS",
      city: "Boston",
      conference: "East",
      division: "Atlantic",
      full_name: "Boston Celtics",
      name: "Celtics",
    },
  ],
};
