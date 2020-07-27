import { mocked } from "ts-jest/utils";

import server from "../../../../../server";

import retrieve, { YOUTUBE_EMBED_BASE_URL } from "../retrieve";
import {
  expectRetrievedMatchesExpected,
  expectApolloErrorThrown,
} from "../../../test_utils";
import { mockTeam1, mockTeam2, mockGame } from "../mocks/mocks";

jest.mock("../../../../../server");
const mockedServer = mocked(server);
const mockDb = {
  prepare: () => ({
    pluck: () => ({
      get: (teamId) =>
        teamId === mockTeam1.id
          ? mockTeam1.name
          : teamId === mockTeam2.id
          ? mockTeam2.name
          : null,
    }),
    run: jest.fn(),
  }),
};

const mockVideoId = "some-video-id";

const mockedYoutube = (canFindHighlights: boolean) => ({
  search: {
    list: (params) =>
      //@ts-ignore
      Promise.resolve({
        data: {
          items: canFindHighlights
            ? [
                {
                  id: {
                    videoId: mockVideoId,
                  },
                },
              ]
            : [],
        },
      }),
  },
});

mockedServer.getDb.mockReturnValue(mockDb);

describe("highlight retrieve resolver", () => {
  describe("given highlights are already cached", () => {
    beforeAll(() => {
      // @ts-ignore
      mockedServer.getYoutubeAPI.mockReturnValue(mockedYoutube(false));
    });

    it("returns the cached youtube URL for the highlights", () => {
      const gameWithCachedHighlights = {
        ...mockGame,
        highlights: mockVideoId,
      };
      const expectedURL = YOUTUBE_EMBED_BASE_URL + mockVideoId;
      expectRetrievedMatchesExpected(
        {},
        retrieve,
        expectedURL,
        gameWithCachedHighlights
      );
    });
  });

  describe("given highlights can be found from the youtube API for a game", () => {
    beforeAll(() => {
      // @ts-ignore
      mockedServer.getYoutubeAPI.mockReturnValue(mockedYoutube(true));
    });

    it("returns the youtube URL for the highlights", () => {
      const expectedURL = YOUTUBE_EMBED_BASE_URL + mockVideoId;
      expectRetrievedMatchesExpected({}, retrieve, expectedURL, mockGame);
    });
  });

  describe("given highlights can't be found from the youtube API for a game", () => {
    beforeAll(() => {
      // @ts-ignore
      mockedServer.getYoutubeAPI.mockReturnValue(mockedYoutube(false));
    });

    it("throws ApolloErorr", () => {
      expectApolloErrorThrown({}, retrieve, mockGame);
    });
  });
});
