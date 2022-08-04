import axios from "axios";
import { apiDomain } from "../config";
const deleteGroupById = async (id) => {
  let request = await axios.delete(apiDomain + "/api/group/" + id);
  if (request.data) {
    return request.data;
  }
};

export default deleteGroupById;
