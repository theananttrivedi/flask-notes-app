import { useState } from "react";
import deleteNoteById from "../utils/deleteNoteById";
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
    if (showingImage) {
      setShowingImage(false);
    } else {
      setShowingImage(true);
    }
  };
  return (
    <div style={styles.noteDivStyle}>
      {/* <button
        style={styles.deleteButtonStyle}
        onClick={(e) => deleteNoteById(id)}
      >
        Delete 
      </button> */}
      <div style={styles.contentArea}>
        {!showingAnswer && <p style={styles.question}>{question}</p>}

        {image_url && !showingAnswer && (
          <div
            style={
              showingImage ? styles.modalContainerShow : styles.modalContainer
            }
          >
            <div style={showingImage ? styles.modalShow : styles.modal}>
              {/* {showingImage && <span style={styles.modalClose}>X</span>} */}
              <img
                onClick={toggleImage}
                style={
                  showingImage
                    ? styles.noteImageStyleShow
                    : styles.noteImageStyle
                }
                src={"http://127.0.0.1" + image_url}
              />
            </div>
          </div>
        )}
        {showingAnswer && <p style={styles.answer}>{answer}</p>}
      </div>{" "}
      <div style={styles.controlsArea}>
        <button style={styles.toggleButton} onClick={toggleAnswer}>
          {" "}
          {showingAnswer ? "Hide" : "Show"} Answer
        </button>
      </div>
    </div>
  );
};

const styles = {
  noteDivStyle: {
    postion: "relative",
    transform: "translateY(5vh)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "90vh",
    width: "100vw",
    overflow: "hidden",
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
    width: "100vw",
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  noteImageStyle: {
    width: "50vw",
  },
  noteImageStyleShow: {
    height: "90vh",
  },
  modalContainer: {},
  modalContainerShow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "fixed",
    top: "0vh",
    height: "90vh",
    width: "100vw",
    zIndex: 1000,
  },
  modal: {},
  modalShow: {},
  modalClose: {
    color: "white",
  },
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
  toggleButton: {
    padding: ".5rem",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "0.25rem",
    fontWeight: "700",
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
  question: {
    width: "100vw",
    paddingInline: "1rem",
    color: "rgb(39,47,62)",
    fontWeight: "600",
    fontSize: "2rem",
  },
  answer: {
    width: "100vw",
    paddingInline: "1rem",
    color: "rgb(39,47,62)",
    fontWeight: "600",
    fontSize: "2rem",
  },
};

export default Note;
