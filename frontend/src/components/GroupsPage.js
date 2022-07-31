import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GroupForm from "./GroupForm";
import GroupListItem from "./GroupListItem";
const GROUPS_URL = "http://127.0.0.1/api/groups";
const GroupsPage = () => {
  const fetchGroupsAndSetStateWithGroups = async () => {
    let response = await axios.get(GROUPS_URL);
    if (response.data) {
      setGroups(response.data.groups);
    }
  };
  useEffect(() => {
    fetchGroupsAndSetStateWithGroups();
  }, []);
  const [groups, setGroups] = useState([]);
  return (
    <div>
      <h1>GroupsPage</h1>
      <GroupForm />
      <div>
        {groups &&
          groups.map((group) => {
            return <GroupListItem name={group.name} id={group.id} />;
          })}
      </div>
    </div>
  );
};

export default GroupsPage;
