import axios from "axios";
import { useState, useEffect } from "react";
import "./GroupUpdateForm.css";
import { apiDomain } from "../config";
const GROUP_CREATION_URL = apiDomain + "/api/group/";
const GroupUpdateForm = ({ id, name }) => {
  const [newname, setNewname] = useState();
  const [showForm, setShowForm] = useState(false);
  const newnameOnChange = (e) => {
    setNewname(e.target.value);
  };

  const toggleShowForm = (e) => setShowForm(!showForm);

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
    <>
      <div className="group-update-form-container">
        {showForm && (
          <form className="group-update-form" onSubmit={onSubmit}>
            <input
              className="group-update-form-input"
              name="name"
              type={"text"}
              onChange={newnameOnChange}
              placeholder="Name..."
              value={newname}
            />
            <input
              className="group-update-form-submit-button"
              type={"submit"}
              value="Update Group"
            />
          </form>
        )}{" "}
      </div>
      <div className="group-update-form-toggle-button" onClick={toggleShowForm}>
        +
      </div>
    </>
  );
};

export default GroupUpdateForm;
