import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import { mocked } from "ts-jest/utils";

import server from "../../../../server";
import search from "../search";
import { Game } from "../../../../types";
import { mockGames, allGames } from "../mocks/mocks";

jest.mock("../../../../server");
const mockedServer = mocked(server);
const mockDb = {
  prepare: () => ({
    all: (homeTeamId, awayTeamId) =>
      mockGames.filter(
        (game) => game.home === homeTeamId || game.away === awayTeamId
      ),
  }),
};
mockedServer.getDb.mockReturnValue(mockDb);

const expectSearchMatchesExpected = async (
  teamId: string,
  expectedGames: Array<Game>
) => {
  const result = await search({}, { teamId });
  expect(result.sort()).toMatchObject(expectedGames.sort());
};

const getExpected = (teamId: string, allGames: Array<Game>): Array<Game> =>
  allGames.filter((game) => game.away.id === teamId || game.home.id === teamId);

describe("team search resolver", () => {
  describe("given games exist for a team", () => {
    it("returns the entire list of games involving the team", () => {
      expect.assertions(3);
      expectSearchMatchesExpected("1", getExpected("1", allGames));
      expectSearchMatchesExpected("2", getExpected("2", allGames));
      expectSearchMatchesExpected("3", getExpected("3", allGames));
    });
  });
});
