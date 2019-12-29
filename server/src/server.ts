import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import { ApolloServer, gql } from "apollo-server-express";
import path from "path";
import schema from "./modules";

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

const dbPath = path.join(__dirname, "../db", "hoop-watcher.db");
const db: any = new Database(dbPath);
const app = express();

function setPort(port = 4000) {
  app.set('port', port);
}
server.applyMiddleware({ app });

function listen() {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

app.use(cors({
  origin: '*', // Be sure to switch to your production domain
  optionsSuccessStatus: 200
}));

app.get('/api/status', (req, res) => {
  res.send({ status: 'ok' });
});

export default {
  getApp: () => app,
  getServer: () => server,
  getDb: () => db,
  setPort,
  listen,
};
