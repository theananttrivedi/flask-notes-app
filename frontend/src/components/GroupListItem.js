import deleteGroupById from "../utils/deleteGroupById";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
import "./GroupListItem.css";
const GroupListItem = ({ id, name }) => {
  const [title, setTitle] = useRecoilState(currentPageTitle);
  return (
    <>
      <div className="container">
        <Link
          className="link"
          onClick={(e) => setTitle("Group: " + name)}
          to={"/group/" + id}
        >
          {name}
        </Link>
        {/* <button
          style={styles.deleteButtonStyle}
          onClick={(e) => deleteGroupById(id)}
        >
          Delete
        </button> */}
      </div>
    </>
  );
};

const styles = {};

export default GroupListItem;
