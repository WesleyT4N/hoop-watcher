import React from "react";

import { Team } from "../utils/types";

type ErrorBannerProps = {team: Team};

const TeamListCard = ({team}: ErrorBannerProps) => (
  <div>
    [Logo Here]
    <h1>{team.abbrev}</h1>
  </div>
);

export default TeamListCard;
