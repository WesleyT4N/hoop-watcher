import { User } from "../../../types";

const resolver = (id: string) : User => {
  return {
    id: "",
    name: "",
    email: "",
    teams: [],
  }
}

export default resolver;
