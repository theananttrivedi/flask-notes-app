import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.container}>
      <Link to={"/"}>Home</Link>
      <Link
        to={{
          pathname: "/groups",
          state: {
            previousPath: "",
            previousPageName: "",
          },
        }}
      >
        Groups
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "5vh",
    backgroundColor: "rgb(121,125,130)",
  },
};

export default Navbar;
