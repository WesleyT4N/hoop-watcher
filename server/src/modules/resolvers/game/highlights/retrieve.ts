import BetterSqlite3 from "better-sqlite3";
import { get } from "lodash";

import { Game } from "../../../../types";
import server from "../../../../server";

const YOUTUBE_EMBED_BASE_URL = "https://www.youtube.com/embed/";

const highlightSearchQuery = (game: Game, db: BetterSqlite3.Database): string => {
  const { home, away, date } = game;
  const teamNameQuery = db.prepare("SELECT name FROM teams WHERE id = ?").pluck();
  const homeName = teamNameQuery.get(home);
  const awayName = teamNameQuery.get(away);
  const gameDate = new Date(date).toDateString().slice(4);
  return `${awayName} vs ${homeName} Full Highlights ${gameDate}`;
};

const getHighlightsId = async (query: string): Promise<string|null> => {
  const params = {
    part: 'id',
    q: query,
    fields: "items",
    maxResults: 1,
    type: "video",
    videoEmbeddable: "true",
  };
  try {
    const res = await (server.youtubeAPI.search.list(params));
    const results = get(res, "data.items",  []);
    if (results.length != 1) {
    // TODO: Implement logging to a log file
      throw new Error("Failed to find highlight URL");
    }
    return results[0].id.videoId;
  } catch (error) {
    // TODO: Implement logging to a log file
    console.log(error);
    return null;
  }
}

const storeHighlights = (gameId: String, videoId: String): void => {
  const db = server.getDb();
  const query = `UPDATE games SET highlights = @videoId WHERE id = @gameId`;
  const update = db.prepare(query);
  update.run({
    gameId,
    videoId,
  });
}

const resolver = async (game: Game): Promise<string|null> => {
  // TODO: Implemeent smarter caching for videoIds
  // Will fail if videos get taken down, so should update at least every 2 weeks.
  // Requires an updated_at field in the games table
  if (game.highlights) {
    return YOUTUBE_EMBED_BASE_URL + game.highlights;
  }
  const db = server.getDb();
  const query = highlightSearchQuery(game, db);
  const videoId = await getHighlightsId(query);
  if (videoId) {
    storeHighlights(game.id, videoId);
    return YOUTUBE_EMBED_BASE_URL + videoId;
  }
  return null;
};

export default resolver;
