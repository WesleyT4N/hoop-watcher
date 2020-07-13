import { gql } from "apollo-boost";

export const TEAM_LIST_QUERY = gql`
  {
    teams {
      id
      fullName
      abbrev
      conference
      wins
      losses
      logo
    }
  }
`;
