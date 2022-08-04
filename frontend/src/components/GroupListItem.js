import deleteGroupById from "../utils/deleteGroupById";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
import groupsListAtom from "../atoms/groupsList";
import "./GroupListItem.css";
const GroupListItem = ({ id, name }) => {
  const [groupsList, setGroupsList] = useRecoilState(groupsListAtom);
  const [title, setTitle] = useRecoilState(currentPageTitle);
  const removeGroup = (id) => {
    deleteGroupById(id);
    setGroupsList(
      groupsList.filter((group) => {
        return group.id !== id;
      })
    );
  };
  return (
    <div className="list-item-container">
      <div className="container">
        <Link
          className="link"
          onClick={(e) => setTitle("Group: " + name)}
          to={"/group/" + id}
        >
          {name}
        </Link>
      </div>
      <button className="group-delete-button" onClick={(e) => removeGroup(id)}>
        Delete
      </button>
    </div>
  );
};

const styles = {};

export default GroupListItem;
