import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  });
  const [groups, setGroups] = useState([]);
  return (
    <div>
      <h1>GroupsPage</h1>
      <ul>
        {groups &&
          groups.map((group) => {
            return (
              <li id={group.id} key={group.key}>
                <Link to={"/group/" + group.id}>{group.name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default GroupsPage;
