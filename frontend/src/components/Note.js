import { useState } from "react";

const Note = ({ question, answer, image_url }) => {
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
      <div style={styles.noteContentBlockStyle}>
        {" "}
        <div style={styles.questionAndThumbnailSubblock}>
          {" "}
          <h1>{question}</h1>
          {image_url && !showingImage && (
            <img
              onClick={toggleImage}
              style={styles.noteImageSmallStyle}
              src={"http://127.0.0.1" + image_url}
            />
          )}
        </div>
        {image_url && showingImage && (
          <img
            onClick={toggleImage}
            style={styles.noteImageStyle}
            src={"http://127.0.0.1" + image_url}
          />
        )}
        {showingAnswer && <h4>{answer}</h4>}
      </div>
      <button style={styles.toggleButton} onClick={toggleAnswer}>
        {showingAnswer ? "Hide" : "Show"} Answer
      </button>
    </div>
  );
};

const styles = {
  noteDivStyle: {},
  noteContentBlockStyle: {
    // textAlign: "center",
    marginLeft: "0.5rem",
  },
  toggleButton: {
    padding: ".5rem",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "0.25rem",
    position: "absolute",
    bottom: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: "700",
    zIndex: "-1",
  },
  noteImageStyle: {
    width: "60vw",
    zIndex: "1000",
    transition: "all 1s ease-in",
  },
  // toggleImageButton: {
  //   position: "absolute",
  //   right: "1rem",
  //   top: "10%",
  // },
  noteImageSmallStyle: {
    // position: "absolute",
    // right: "1rem",
    // top: "10%",
    width: "12vw",
    height: "12vw",
    objectFit: "cover",
    transition: "all 2s ease-in",
  },
  questionAndThumbnailSubblock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default Note;
