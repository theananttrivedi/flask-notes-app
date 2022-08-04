import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import GroupForm from "./GroupForm";
import GroupListItem from "./GroupListItem";
import { useRecoilState } from "recoil";
import groupsListAtom from "../atoms/groupsList";
import "./GroupsPage.css";
const GROUPS_URL = "http://127.0.0.1/api/groups";
const GroupsPage = () => {
  const location = useLocation();
  const propsPassedViaLinkTag = location.state;
  const [groupsList, setGroupsList] = useRecoilState(groupsListAtom);
  const fetchGroupsAndSetStateWithGroups = async () => {
    let response = await axios.get(GROUPS_URL);
    if (response.data) {
      setGroupsList(response.data.groups);
    }
  };
  useEffect(() => {
    console.log(propsPassedViaLinkTag);
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

const styles = {};

export default GroupsPage;
