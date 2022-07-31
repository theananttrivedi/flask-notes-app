import axios from "axios";

const deleteGroupById = async (id) => {
  let request = await axios.delete("http://127.0.0.1/api/group/" + id);
  if (request.data) {
    return request.data;
  }
};

export default deleteGroupById;
