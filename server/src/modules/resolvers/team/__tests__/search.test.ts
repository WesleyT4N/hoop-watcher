import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import { mocked } from "ts-jest/utils";

import server from "../../../../server";
import search, { TEAM_COUNT_QUERY } from "../search";
import { Team } from "../../../../types";
import { NBA_TEAM_COUNT } from "../../../constants";
import { ApolloError } from "apollo-server-express";
import { mockTeams, mockTeamSearchAPIResponse } from "../mocks/mocks";

jest.mock("../../../../server");

const mockedServer = mocked(server);

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
      fetchMock.mockResponse(JSON.stringify(mockTeamSearchAPIResponse));
    });
    it("prepopulate teams", () => expectSearchMatchesExpected());

    it("handles preopulate errors", async () => {
      expect.assertions(2);
      fetchMock.resetMocks();
      fetchMock.mockRejectOnce();
      await expect(search()).rejects.toBeInstanceOf(ApolloError);
      fetchMock.mockResponseOnce(() => Promise.resolve({ status: 500 }));
      await expect(search()).rejects.toBeInstanceOf(ApolloError);
    });
  });

  describe("given teams are initialized", () => {
    beforeAll(() => {
      mockedServer.getDb.mockReturnValue(mockDb(true));
      fetchMock.resetMocks();
    });
    it("fetches teams", () => expectSearchMatchesExpected());
  });
});
