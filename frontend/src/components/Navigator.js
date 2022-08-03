import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
// import previousPageTitle from "../atoms/previousPageTitle";
const Navigator = () => {
  const navigate = useNavigate();
  //   const location = useLocation();
  const [title, setTitle] = useRecoilState(currentPageTitle);
  //   const [prevTitle, setPrevTitle] = useRecoilState(previousPageTitle);
  return (
    <div style={styles.container}>
      {/* <div style={styles.previous}>
        <span> {"<"}</span>Home
        <button style={styles.button} onClick={() => navigate(-1)}>
          {"<"}
        </button>
      </div> */}
      <div style={styles.title}>{title}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "100vw",
    height: "5vh",
    position: "fixed",
    top: "0",
    backgroundColor: "rgba(39,47,62,0.2)",
    backdropFilter: "blur(2rem)",
    textAlign: "center",
    zIndex: 1000,
  },
  title: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "rgb(6,123,192)",
    fontWeight: "700",
    fontSize: "1.2rem",
    width: "100vw",
  },
  //   previous: {
  //     color: "rgb(6,123,192)",
  //     fontWeight: "700",
  //     fontSize: "1.2rem",
  //   },
  //   button: {
  //     border: "none",
  //     backgroundColor: "transparent",
  //     color: "rgb(6,123,192)",
  //     fontWeight: "400",
  //     fontSize: "1rem",
  //   },
};

export default Navigator;
