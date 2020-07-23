import { mocked } from "ts-jest/utils";

import server from "../../../../server";
import retrieve from "../retrieve";
import {
  expectRetrievedMatchesExpected,
  expectApolloErrorThrown,
} from "../../test_utils";
import { Game } from "../../../../types";
import { mockGame } from "../mocks/mocks";

jest.mock("../../../../server");
const mockedServer = mocked(server);
const mockDb = {
  prepare: () => ({
    get: (id: string) => (id === mockGame.id ? mockGame : null),
  }),
};
mockedServer.getDb.mockReturnValue(mockDb);

describe("game retrieve resolver", () => {
  describe("given the game exists", () => {
    const expectedGame: Game = {
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
    };

    it("can retrieve game by id", () =>
      expectRetrievedMatchesExpected({ id: "1" }, retrieve, expectedGame));
  });

  describe("given the game does not exist", () => {
    it("throws ApolloError", () =>
      expectApolloErrorThrown({ id: "some-other-id" }, retrieve));
  });
});
