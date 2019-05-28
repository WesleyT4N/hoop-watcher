import { User } from "../../../types";

const resolver = (obj, args, context, info) : User => {
  return {
    id: "",
    name: "",
    email: "",
    teams: [],
  }
}

export default resolver;
