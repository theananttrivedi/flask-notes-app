import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/groups"}>Groups</Link>
    </div>
  );
};

export default Navbar;
