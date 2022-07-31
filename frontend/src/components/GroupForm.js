import axios from "axios";
import { useState, useEffect } from "react";

const GROUP_CREATION_URL = "http://127.0.0.1/api/group";
const GroupForm = () => {
  const [name, setName] = useState();
  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    requestApiToCreateAGroup(name);
  };

  const requestApiToCreateAGroup = async (n) => {
    const groupData = new FormData();
    groupData.append("name", n);
    let response = await axios({
      url: GROUP_CREATION_URL,
      method: "post",
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
          onChange={nameOnChange}
          placeholder="Name..."
          value={name}
        />
        <input type={"submit"} value="Create Group" />
      </form>
    </div>
  );
};

export default GroupForm;
