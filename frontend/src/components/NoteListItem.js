import React from "react";
import { Link } from "react-router-dom";

const NoteListItem = ({ id, question, answer, image_url }) => {
  return (
    <div style={styles.nodeListItemDivStyle}>
      <div style={styles.textBlockDivStyle}>
        <p>{question}</p>
        {/* <p>{answer}</p> */}
        <Link to={"/note/" + id}>View</Link>
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
  );
};

const styles = {
  nodeListItemDivStyle: {
    width: "100vw",
    border: "solid black 1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
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
};

export default NoteListItem;
