import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import { mocked } from "ts-jest/utils";

import server from "../../../../server";
import retrieve from "../retrieve";
import {
  expectApolloErrorThrown,
  expectRetrievedMatchesExpected,
} from "../../test_utils";
import * as util from "../../../util";
import { Team } from "../../../../types";
import { mockTeam, mockGameRetriveAPIResponse } from "../mocks/mocks";

jest.mock("../../../util");

jest.mock("../../../../server");

const mockedServer = mocked(server);
const mockDb = {
  prepare: () => ({
    get: (id, name, abbrev) =>
      id === mockTeam.id || name === mockTeam.name || abbrev === mockTeam.abbrev
        ? mockTeam
        : null,
    run: (_) => jest.fn(),
  }),
  transaction: (_) => jest.fn(),
};
mockedServer.getDb.mockReturnValue(mockDb);
const mockedUtil = mocked(util);

describe("team retrieve resolver", () => {
  describe("given no need to update team", () => {
    beforeAll(() => {
      mockedUtil.shouldUpdate.mockReturnValue(false);
      fetchMock.resetMocks();
    });

    describe("given the team exists", () => {
      const expectedTeam: Team = {
        ...mockTeam,
        fullName: mockTeam.full_name,
      };

      it("can retrieve by team id", () =>
        expectRetrievedMatchesExpected(
          { id: mockTeam.id, name: "", abbrev: "" },
          retrieve,
          expectedTeam
        ));

      it("can retrieve by team name", () =>
        expectRetrievedMatchesExpected(
          { id: "", name: mockTeam.name, abbrev: "" },
          retrieve,
          expectedTeam
        ));

      it("can retrieve by team abbreviation", () =>
        expectRetrievedMatchesExpected(
          { id: "", name: "", abbrev: mockTeam.abbrev },
          retrieve,
          expectedTeam
        ));
    });

    describe("given the team does not exist", () => {
      it("throws ApolloError", () =>
        expectApolloErrorThrown(
          { id: "some-other-id", name: "", abbrev: "" },
          retrieve
        ));
    });
  });

  describe("given need to update team", () => {
    beforeAll(() => {
      mockedUtil.shouldUpdate.mockReturnValue(true);
      mockedUtil.getCurrSeasonYear.mockReturnValue(2020);
      fetchMock.resetMocks();
      fetchMock.doMock();
      fetchMock.mockResponse(JSON.stringify(mockGameRetriveAPIResponse));
    });

    describe("given the team exists", () => {
      const expectedTeam: Team = {
        ...mockTeam,
        fullName: mockTeam.full_name,
        wins: 1,
        losses: 0,
      };

      it("can retrieve by team id", () =>
        expectRetrievedMatchesExpected(
          { id: mockTeam.id, name: "", abbrev: "" },
          retrieve,
          expectedTeam
        ));

      it("can retrieve by team name", () =>
        expectRetrievedMatchesExpected(
          { id: "", name: mockTeam.name, abbrev: "" },
          retrieve,
          expectedTeam
        ));

      it("can retrieve by team abbreviation", () =>
        expectRetrievedMatchesExpected(
          { id: "", name: "", abbrev: mockTeam.abbrev },
          retrieve,
          expectedTeam
        ));

      it("throws ApolloError when API returns bad response", async () => {
        expect.assertions(1);
        fetchMock.resetMocks();
        fetchMock.mockResponseOnce(() => Promise.resolve({ status: 500 }));
        expectApolloErrorThrown({ id: "1", name: "", abbrev: "" }, retrieve);
      });

      it("throws ApolloError when fetch fails", async () => {
        expect.assertions(1);
        fetchMock.resetMocks();
        fetchMock.mockRejectOnce();
        expectApolloErrorThrown({ id: "1", name: "", abbrev: "" }, retrieve);
      });
    });

    describe("given the team does not exist", () => {
      it("throws ApolloError", () =>
        expectApolloErrorThrown(
          { id: "some-other-id", name: "", abbrev: "" },
          retrieve
        ));
    });
  });
});
