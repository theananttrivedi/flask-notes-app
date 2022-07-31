import deleteGroupById from "../utils/deleteGroupById";
import { Link } from "react-router-dom";
const GroupListItem = ({ id, name }) => {
  return (
    <div style={styles.componentMainblockStyle}>
      <Link to={"/group/" + id}>
        {" "}
        <p>{name}</p>
      </Link>
      <button
        style={styles.deleteButtonStyle}
        onClick={(e) => deleteGroupById(id)}
      >
        Delete
      </button>
    </div>
  );
};

const styles = {
  componentMainblockStyle: {
    border: "solid black 1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButtonStyle: {
    border: "none",
    padding: ".75rem",
    background: "transparent",
    textDecoration: "none",
    color: "red",
  },
};

export default GroupListItem;
