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
      <div style={styles.container}>HomePage</div>
      <p style={styles.homeButton}>Hello</p>
    </>
  );
};

const styles = {
  homeButton: {
    position: "fixed",
    top: "5vh",
    right: "0rem",
    // marginRight: "1rem",
    zIndex: "8000",
    backgroundColor: "blue",
  },
  container: {
    height: "90vh",
    position: "fixed",
    backgroundColor: "lightcoral",
    top: "5vh",
    width: "100vw",
  },
};

export default HomePage;
