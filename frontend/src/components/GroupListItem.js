import deleteGroupById from "../utils/deleteGroupById";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import groupsListAtom from "../atoms/groupsList";
import { MdOutlineDelete } from "react-icons/md";
import "./GroupListItem.css";
const GROUP_URL_REACT_PAGE = "/group/";
const GroupListItem = ({ id, name }) => {
  const [groupsList, setGroupsList] = useRecoilState(groupsListAtom);
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
        <Link className="link" to={GROUP_URL_REACT_PAGE + id}>
          {name}
        </Link>
      </div>
      <button className="group-delete-button" onClick={(e) => removeGroup(id)}>
        <MdOutlineDelete />
      </button>
    </div>
  );
};

export default GroupListItem;
