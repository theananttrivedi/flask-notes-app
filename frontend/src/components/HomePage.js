import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
const HomePage = () => {
  const [title, setTitle] = useRecoilState(currentPageTitle);
  useEffect(() => {
    setTitle("Home");
  }, []);
  return (
    <>
      <div style={styles.container}>
        <img style={styles.coverimg} src={"/book.webp"} />
        <div style={styles.ad}>
          {" "}
          <h2>
            Create a <span style={styles.blue}>Group</span>
          </h2>
          <h2>
            Add <span style={styles.blue}>Notes</span>
          </h2>
          <h2>
            Start <span style={styles.blue}>Learning</span>
          </h2>
        </div>
        <img style={styles.coverimg2} src={"/house.png"} />
      </div>
    </>
  );
};

const styles = {
  container: {
    height: "90vh",
    position: "fixed",
    background: `linear-gradient(
      to bottom right,
      rgba(21, 21, 21, 1),
      rgba(21, 21, 21, 0.8)
    )`,
    top: "5vh",
    width: "100vw",
    overflow: "hidden",
  },
  ad: {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2000,
    backdropFilter: "blur(1rem)",
  },
  blue: {
    color: "rgb(6, 123, 192)",
  },
  coverimg: {
    width: "80vw",
  },
  coverimg2: {
    width: "80vw",
    position: "fixed",
    bottom: 0,
    left: "0",
  },
};

export default HomePage;
