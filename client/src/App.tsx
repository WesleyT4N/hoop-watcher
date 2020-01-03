import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import logo from "./logo.svg";
import "./App.css";

import { TeamList } from "./modules/team-list";

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <TeamList />
      </div>
    </ApolloProvider>
  );
}

export default App;
