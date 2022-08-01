import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
const truncate = (s, n = 15) => {
  let x = s;
  let noOfCharactersToDisplay = n;
  if (x.length > noOfCharactersToDisplay) {
    return x.slice(0, noOfCharactersToDisplay) + "...";
  } else {
    return x + "...";
  }
};
const NoteListItem = ({ id, question, answer, image_url }) => {
  const [title, setTitle] = useRecoilState(currentPageTitle);
  return (
    <Link
      style={styles.link}
      onClick={(e) => setTitle("Note: " + "(" + id + ") " + truncate(question))}
      to={"/note/" + id}
    >
      <div style={styles.nodeListItemDivStyle}>
        <div style={styles.textBlockDivStyle}>
          <p>{truncate(question, 25)}</p>
          {/* <p>{answer}</p> */}
        </div>

        <div style={styles.imageBlockDivStyle}>
          {image_url && (
            <img
              style={styles.thumbnailImageStyle}
              src={"http://127.0.0.1" + image_url}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

const styles = {
  nodeListItemDivStyle: {
    width: "100vw",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    backgroundColor: "white",
    borderBottom: "0.1rem solid rgba(39,47,62,0.2)",
    // backdropFilter: "blur(2rem)",
  },
  thumbnailImageStyle: {
    width: "12vw",
    height: "12vw",
    objectFit: "cover",
  },
  textBlockDivStyle: {
    marginLeft: "1rem",
  },
  imageBlockDivStyle: {
    marginRight: "1rem",
  },
  link: {
    color: "rgb(6,123,192)",
    fontWeight: "400",
    fontSize: "1.2rem",
    textDecoration: "none",
  },
};

export default NoteListItem;
