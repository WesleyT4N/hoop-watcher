import React from "react";
import styled from "styled-components";

import { Team } from "../utils/types";

type ErrorBannerProps = {team: Team};

const TeamListCardContainer = styled.div`
  padding: 8px;
  border: 1px solid black;
  max-width: 250px;
  margin: 8px;
`;

const TeamListCard = ({team}: ErrorBannerProps) => (
  <TeamListCardContainer>
    <img src={process.env.PUBLIC_URL + team.logo} alt={`${team.abbrev} logo`}/>
    <h1>{team.abbrev}</h1>
    <button>View Games</button>
  </TeamListCardContainer>
);

export default TeamListCard;
