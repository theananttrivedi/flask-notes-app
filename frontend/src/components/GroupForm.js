import axios from "axios";
import { useState, useEffect } from "react";
import "./GroupForm.css";
const GROUP_CREATION_URL = "http://127.0.0.1/api/group";
const GroupForm = () => {
  const [name, setName] = useState();
  const [showForm, setShowForm] = useState(false);
  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const toggleShowForm = (e) => setShowForm(!showForm);

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
    <>
      <div className="group-form-container">
        {showForm && (
          <form className="group-form" onSubmit={onSubmit}>
            <input
              className="group-form-input"
              name="name"
              type={"text"}
              onChange={nameOnChange}
              placeholder="Name..."
              value={name}
            />
            <input
              className="group-form-submit-button"
              type={"submit"}
              value="Create Group"
            />
          </form>
        )}
      </div>
      <div className="group-form-toggle-button" onClick={toggleShowForm}>
        +
      </div>
    </>
  );
};

export default GroupForm;
