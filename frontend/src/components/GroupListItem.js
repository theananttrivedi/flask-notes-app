import deleteGroupById from "../utils/deleteGroupById";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
const GroupListItem = ({ id, name }) => {
  const [title, setTitle] = useRecoilState(currentPageTitle);
  return (
    <>
      <div style={styles.componentMainblockStyle}>
        <Link
          style={styles.link}
          onClick={(e) => setTitle("Group: " + name)}
          to={"/group/" + id}
        >
          {" "}
          <p>{name}</p>
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

const styles = {
  componentMainblockStyle: {
    width: "100vw",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "0.1rem solid rgba(39,47,62,0.2)",
    textAlign: "center",
  },
  deleteButtonStyle: {
    border: "none",
    padding: ".75rem",
    background: "transparent",
    textDecoration: "none",
    color: "red",
  },
  link: {
    width: "100vw",
    color: "rgb(6,123,192)",
    fontWeight: "400",
    fontSize: "1.2rem",
    textDecoration: "none",
  },
};

export default GroupListItem;
