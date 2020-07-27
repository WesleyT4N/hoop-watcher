import express from "express";
import cors from "cors";
import BettereSqlite3 from "better-sqlite3";
import dotenv from "dotenv-flow";
import { ApolloServer } from "apollo-server-express";
import path from "path";
import { google } from "googleapis";

import schema from "./modules";

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

dotenv.config({
  node_env: process.env.NODE_ENV,
  path: path.resolve(__dirname, "../"),
});

const dbPath = path.join(__dirname, "../db", "hoop-watcher.db");

const db: any = new BettereSqlite3(dbPath);
const app = express();
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const youtubeAPI = google.youtube({
  version: "v3",
  auth: YOUTUBE_API_KEY,
});

function setPort(port = 4000) {
  app.set("port", port);
}
server.applyMiddleware({ app });

function listen() {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

app.use(
  cors({
    origin: "*", // Be sure to switch to your production domain
    optionsSuccessStatus: 200,
  })
);

app.get("/api/status", (_, res) => {
  res.send({ status: "ok" });
});

export default {
  getApp: () => app,
  getServer: () => server,
  getDb: () => db,
  getYoutubeAPI: () => youtubeAPI,
  setPort,
  listen,
};
