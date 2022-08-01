import axios from "axios";
import { useState, useEffect } from "react";

const GROUP_CREATION_URL = "http://127.0.0.1/api/group/";
const GroupUpdateForm = ({ id, name }) => {
  const [newname, setNewname] = useState();
  const newnameOnChange = (e) => {
    setNewname(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    requestApiToUpdateTheGroup(newname);
  };

  useEffect(() => {
    setNewname(name);
  }, [name]);

  const requestApiToUpdateTheGroup = async (n) => {
    const groupData = new FormData();
    groupData.append("name", n);
    let response = await axios({
      url: GROUP_CREATION_URL + id,
      method: "put",
      data: groupData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.data) {
      console.log(response.data);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type={"text"}
          onChange={newnameOnChange}
          placeholder="Name..."
          value={newname}
        />
        <input type={"submit"} value="Update Group" />
      </form>
    </div>
  );
};

export default GroupUpdateForm;
