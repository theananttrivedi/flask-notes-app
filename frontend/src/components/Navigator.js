import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
import previousPageTitle from "../atoms/previousPageTitle";
import functionButtonAtom from "../atoms/functionButton";
const Navigator = () => {
  let title, functionButton, _;
  const navigate = useNavigate();
  [title, _] = useRecoilState(currentPageTitle);
  const [prevTitle, setPrevTitle] = useRecoilState(previousPageTitle);
  [functionButton, _] = useRecoilState(functionButtonAtom);
  return (
    <div style={styles.container}>
      {prevTitle && (
        <div
          style={styles.previous}
          onClick={(e) => {
            setPrevTitle(null);
            navigate(-1);
          }}
        >
          {prevTitle}
        </div>
      )}
      <div style={styles.title}>{title}</div>
      {functionButton.func && functionButton.title && (
        <div style={styles.functionButton} onClick={functionButton.func}>
          {functionButton.component ? (
            <functionButton.component style={{ fontSize: "1rem" }} />
          ) : (
            functionButton.title
          )}
        </div>
      )}
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
    // backgroundColor: "rgba(39,47,62,0.2)",
    backgroundColor: "rgb(224,224,224)",
    backdropFilter: "blur(2rem)",
    textAlign: "center",
    zIndex: 1000,
    justifyContent: "space-between",
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
  previous: {
    color: "rgb(6,123,192)",
    fontWeight: "300",
    fontSize: "1rem",
    marginLeft: ".4rem",
    cursor: "pointer",
    zIndex: 4000,
  },
  functionButton: {
    position: "absolute",
    right: "0rem",
    color: "red",
    fontWeight: "300",
    marginRight: "1rem",
    fontSize: ".7rem",
    marginLeft: "0rem",
    cursor: "pointer",
    zIndex: 4000,
  },
};

export default Navigator;
