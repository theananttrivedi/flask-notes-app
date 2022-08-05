import { useEffect } from "react";
import axios from "axios";
import GroupForm from "./GroupForm";
import GroupListItem from "./GroupListItem";
import { useRecoilState } from "recoil";
import groupsListAtom from "../atoms/groupsList";
import currentPageTitle from "../atoms/currentPageTitle";
import "./GroupsPage.css";
import { apiDomain } from "../config";
const GROUPS_URL = apiDomain + "/api/groups";
const GroupsPage = () => {
  const [groupsList, setGroupsList] = useRecoilState(groupsListAtom);
  const [_, setTitle] = useRecoilState(currentPageTitle);
  useEffect(() => {
    setTitle("Groups");
  }, []);
  const fetchGroupsAndSetStateWithGroups = async () => {
    let response = await axios.get(GROUPS_URL);
    if (response.data) {
      setGroupsList(response.data.groups);
    }
  };
  useEffect(() => {
    fetchGroupsAndSetStateWithGroups();
  }, []);
  return (
    <div className="group-container">
      <GroupForm />
      <div>
        {groupsList &&
          groupsList.map((group) => {
            return <GroupListItem name={group.name} id={group.id} />;
          })}
      </div>
    </div>
  );
};

export default GroupsPage;
