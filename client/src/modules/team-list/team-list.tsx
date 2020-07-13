import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { TEAM_LIST_QUERY } from "./queries";
import TeamListCard from "./team-list-card";
import { LoadingSpinner } from "../utils/loading";
import { ErrorBanner } from "../utils/error";
import { Team } from "../utils/types";


interface TeamListData {
  teams: Team[];
};

const TeamListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
`;

const TeamSubListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

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
      <TeamListContainer>
        <TeamSubListContainer>
          <h2>Western Conference</h2>
          {data && data.teams
            .filter(team => team.conference === 'West')
            .map(team => <TeamListCard team={team} />)}
        </TeamSubListContainer>
        <TeamSubListContainer>
          <h2>Eastern Conference</h2>
          {data && data.teams
            .filter(team => team.conference === 'East')
            .map(team => <TeamListCard team={team} />)}
        </TeamSubListContainer>
     </TeamListContainer>
    </div>
  );
};

export default TeamList;
