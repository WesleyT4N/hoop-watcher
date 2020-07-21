import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import { mocked } from "ts-jest/utils";
import { ApolloError } from "apollo-server-express";

import server from "../../../../server";
import retrieve, { ArgsType } from "../retrieve";
import { DBTeam } from "../search";
import * as util from "../../../util";
import { Team } from "../../../../types";

jest.mock("../../../../server");
jest.mock("../../../util");

const mockedServer = mocked(server);
const mockedUtil = mocked(util);

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

export const mockDb = {
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

const mockAPIResponse = {
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

const expectRetrievedTeamMatchesExpected = async (retrieveByArgs, expected) => {
  expect.assertions(1);
  const result = await retrieve({}, retrieveByArgs);
  expect(result).toEqual(expected);
};

const expectApolloErrorThrown = async (retrieveArgs: ArgsType) => {
  await expect(retrieve({}, retrieveArgs)).rejects.toBeInstanceOf(ApolloError);
};

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
        expectRetrievedTeamMatchesExpected(
          { id: mockTeam.id, name: "", abbrev: "" },
          expectedTeam
        ));

      it("can retrieve by team name", () =>
        expectRetrievedTeamMatchesExpected(
          { id: "", name: mockTeam.name, abbrev: "" },
          expectedTeam
        ));

      it("can retrieve by team abbreviation", () =>
        expectRetrievedTeamMatchesExpected(
          { id: "", name: "", abbrev: mockTeam.abbrev },
          expectedTeam
        ));
    });

    describe("given the team does not exist", () => {
      it("throws ApolloError", () =>
        expectApolloErrorThrown({ id: "some-other-id", name: "", abbrev: "" }));
    });
  });

  describe("given need to update team", () => {
    beforeAll(() => {
      mockedUtil.shouldUpdate.mockReturnValue(true);
      mockedUtil.getCurrSeasonYear.mockReturnValue(2020);
      fetchMock.resetMocks();
      fetchMock.doMock();
      fetchMock.mockResponse(JSON.stringify(mockAPIResponse));
    });

    describe("given the team exists", () => {
      const expectedTeam: Team = {
        ...mockTeam,
        fullName: mockTeam.full_name,
        wins: 1,
        losses: 0,
      };

      it("can retrieve by team id", () =>
        expectRetrievedTeamMatchesExpected(
          { id: mockTeam.id, name: "", abbrev: "" },
          expectedTeam
        ));

      it("can retrieve by team name", () =>
        expectRetrievedTeamMatchesExpected(
          { id: "", name: mockTeam.name, abbrev: "" },
          expectedTeam
        ));

      it("can retrieve by team abbreviation", () =>
        expectRetrievedTeamMatchesExpected(
          { id: "", name: "", abbrev: mockTeam.abbrev },
          expectedTeam
        ));

      it("throws ApolloError when API returns bad response", async () => {
        expect.assertions(1);
        fetchMock.resetMocks();
        fetchMock.mockResponseOnce(() => Promise.resolve({ status: 500 }));
        expectApolloErrorThrown({ id: "1", name: "", abbrev: "" });
      });

      it("throws ApolloError when fetch fails", async () => {
        expect.assertions(1);
        fetchMock.resetMocks();
        fetchMock.mockRejectOnce();
        expectApolloErrorThrown({ id: "1", name: "", abbrev: "" });
      });
    });

    describe("given the team does not exist", () => {
      it("throws ApolloError", () =>
        expectApolloErrorThrown({ id: "some-other-id", name: "", abbrev: "" }));
    });
  });
});
