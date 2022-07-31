import axios from "axios";

const deleteNoteById = async (id) => {
  let request = await axios.delete("http://127.0.0.1/api/note/" + id);
  if (request.data) {
    return request.data;
  }
};

export default deleteNoteById;
