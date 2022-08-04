import axios from "axios";
import { apiDomain } from "../config";
const deleteNoteById = async (id) => {
  let request = await axios.delete(apiDomain + "/api/note/" + id);
  if (request.data) {
    return request.data;
  }
};

export default deleteNoteById;
