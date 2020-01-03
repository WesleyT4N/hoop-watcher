import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { TEAM_LIST_QUERY } from "./queries";
import TeamListCard from "./team-list-card";
import { LoadingSpinner } from "../utils/loading";
import { ErrorBanner } from "../utils/error";
import { Team } from "../utils/types";


interface TeamListData {
  teams: Team[];
};

const TeamList = () => {
  const { loading, error, data } = useQuery<TeamListData>(TEAM_LIST_QUERY);
  if (loading) {
    return <LoadingSpinner/>;
  }
  if (error) {
    return <ErrorBanner errorMessage={error.message}/>;
  }

  return (
    <div>
      <h1>Teams</h1>
      {data && data.teams.map(team => <TeamListCard team={team} />)}
   </div>
  );
};

export default TeamList;
