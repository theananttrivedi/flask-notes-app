import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.navlinksContainer}>
        {" "}
        <Link style={styles.link} to={"/"}>
          Home
        </Link>
        <Link style={styles.link} to={"/groups"}>
          Groups
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    height: "5vh",
    position: "fixed",
    bottom: "0",
    backgroundColor: "rgba(39,47,62,0.2)",
    backdropFilter: "blur(2rem)",
    zIndex: 1000,
  },

  link: {
    color: "rgb(6,123,192)",
    fontWeight: "400",
    fontSize: "1rem",
    textDecoration: "none",
  },
  navlinksContainer: {
    width: "100vw",
    display: "flex",
    justifyContent: "space-evenly",
    paddingRight: "1rem",
  },
};

export default Navbar;
