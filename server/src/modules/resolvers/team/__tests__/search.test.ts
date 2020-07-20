import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import { mocked } from "ts-jest/utils";

import server from "../../../../server";
import search, { DBTeam, TEAM_COUNT_QUERY } from "../search";
import { Team } from "../../../../types";
import { NBA_TEAM_COUNT } from "../../../constants";

jest.mock("../../../../server");

const mockedServer = mocked(server);

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

const mockDb = (teamsInitialized: boolean) => ({
  prepare: (query: string) => {
    switch (query) {
      case TEAM_COUNT_QUERY:
        return {
          get: () => ({
            teamCount: teamsInitialized ? NBA_TEAM_COUNT : 0,
          }),
        };
      default:
        return {
          run: (_) => jest.fn(),
          all: () => mockTeams,
        };
    }
  },
  transaction: (_) => jest.fn(),
});

const mockAPIResponse = {
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

const expectSearchMatchesExpected = async () => {
  expect.assertions(1);
  const result = await search();
  const expectedTeams: Array<Team> = mockTeams.map((team) => ({
    fullName: team.full_name,
    games: [],
    ...team,
  }));
  expect(result).toEqual(expectedTeams);
};

describe("team search resolver", () => {
  describe("given teams not initialized", () => {
    beforeAll(() => {
      mockedServer.getDb.mockReturnValue(mockDb(false));
      fetchMock.resetMocks();
      fetchMock.doMock();
      fetchMock.mockResponse(JSON.stringify(mockAPIResponse));
    });
    it("prepopulate teams", () => expectSearchMatchesExpected());
  });

  describe("given teams are initialized", () => {
    beforeAll(() => {
      mockedServer.getDb.mockReturnValue(mockDb(true));
      fetchMock.resetMocks();
    });
    it("fetches teams", () => expectSearchMatchesExpected());
  });
});
