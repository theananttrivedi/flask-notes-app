import { useState } from "react";
import deleteNoteById from "../utils/deleteNoteById";
import "./Note.css";
/* <button
        style={styles.deleteButtonStyle}
        onClick={(e) => deleteNoteById(id)}
      >
        Delete 
      </button> */
const Note = ({ id, question, answer, image_url }) => {
  const [showingAnswer, setShowingAnswer] = useState(false);
  const [showingImage, setShowingImage] = useState(false);
  const toggleAnswer = () => {
    if (showingAnswer) {
      setShowingAnswer(false);
    } else {
      setShowingAnswer(true);
    }
  };
  const toggleImage = () => {
    console.log(showingImage);
    if (showingImage) {
      setShowingImage(false);
    } else {
      setShowingImage(true);
    }
  };
  return (
    <div className="note-component-container">
      <div className="note-container">
        {!showingAnswer ? (
          <>
            <p className="note-question">{question}</p>
            {image_url && (
              <div className="note-image-container">
                <img
                  onClick={toggleImage}
                  className="note-image"
                  src={"http://127.0.0.1" + image_url}
                />
              </div>
            )}
          </>
        ) : (
          <p className="note-answer">{answer}</p>
        )}
      </div>
      <div onClick={toggleAnswer} className="answer-toggle-button">
        {!showingAnswer ? "Show Answer" : "Hide Answer"}
      </div>
      <div className={showingImage ? "modal active" : "modal"}>
        {image_url && showingImage && (
          <>
            <span onClick={toggleImage} className="modal-close">
              &times;
            </span>
            <img className="modal-image" src={"http://127.0.0.1" + image_url} />
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  controlsArea: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "10vh",
    width: "100vw",
    bottom: "0vh",
    overflow: "hidden",
    backgroundColor: "lightcoral",
    // justifyContent: "center",
  },

  deleteButtonStyle: {
    postion: "absolute",
    // bottom: "1rem",
    right: "1rem",
    border: "none",
    padding: ".75rem",
    background: "transparent",
    textDecoration: "none",
    color: "red",
  },
};

export default Note;
