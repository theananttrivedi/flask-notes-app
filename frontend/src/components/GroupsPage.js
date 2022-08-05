import { useEffect } from "react";
import axios from "axios";
import GroupForm from "./GroupForm";
import GroupListItem from "./GroupListItem";
import { useRecoilState } from "recoil";
import groupsListAtom from "../atoms/groupsList";
import currentPageTitle from "../atoms/currentPageTitle";
import loadingAtom from "../atoms/loading";
import FadeLoader from "react-spinners/FadeLoader";
import "./GroupsPage.css";
import { apiDomain } from "../config";
const GROUPS_URL = apiDomain + "/api/groups";
const GroupsPage = () => {
  const [groupsList, setGroupsList] = useRecoilState(groupsListAtom);
  const [_, setTitle] = useRecoilState(currentPageTitle);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  useEffect(() => {
    setTitle("Groups");
  }, []);
  const fetchGroupsAndSetStateWithGroups = async () => {
    let response = await axios.get(GROUPS_URL);
    if (response.data) {
      setGroupsList(response.data.groups);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchGroupsAndSetStateWithGroups();
  }, []);

  useEffect(() => {
    return () => {
      setLoading(true);
    };
  }, []);
  return (
    <div className="group-container">
      <GroupForm />
      {loading ? (
        <FadeLoader
          color="rgb(6, 123, 192)"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <div>
          {groupsList &&
            groupsList.map((group) => {
              return <GroupListItem name={group.name} id={group.id} />;
            })}
        </div>
      )}
    </div>
  );
};

export default GroupsPage;
