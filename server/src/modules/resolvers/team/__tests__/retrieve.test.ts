import { mocked } from "ts-jest/utils";
import { ApolloError } from "apollo-server-express";

import server from "../../../../server";
import retrieve from "../retrieve";
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
  }),
};
mockedServer.getDb.mockReturnValue(mockDb);

describe("team retrieve resolver", () => {
  describe("given no need to update team", () => {
    mockedUtil.shouldUpdate.mockReturnValue(false);

    describe("given the team exists", () => {
      const expectedTeam: Team = {
        ...mockTeam,
        fullName: mockTeam.full_name,
      };

      it("can retrieve by team id", async () => {
        expect.assertions(1);
        const result = await retrieve(
          {},
          { id: mockTeam.id, name: "", abbrev: "" }
        );
        expect(result).toEqual(expectedTeam);
      });

      it("can retrieve by team name", async () => {
        expect.assertions(1);
        const result = await retrieve(
          {},
          { id: "", name: mockTeam.name, abbrev: "" }
        );
        expect(result).toEqual(expectedTeam);
      });

      it("can retrieve by team abbreviation", async () => {
        expect.assertions(1);
        const result = await retrieve(
          {},
          { id: "", name: "", abbrev: mockTeam.abbrev }
        );
        expect(result).toEqual(expectedTeam);
      });
    });

    describe("given the team does not exist", () => {
      it("throws ApolloError", async () => {
        expect.assertions(1);
        try {
          await retrieve({}, { id: "some-other-id", name: "", abbrev: "" });
        } catch (e) {
          expect(e).toBeInstanceOf(ApolloError);
        }
      });
    });
  });
});
