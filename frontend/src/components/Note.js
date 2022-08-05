import { useEffect, useState } from "react";
import deleteNoteById from "../utils/deleteNoteById";
import "./Note.css";
import { useRecoilState } from "recoil";
import notesListAtom from "../atoms/notesList";
import functionButtonAtom from "../atoms/functionButton";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useNavigate } from "react-router-dom";
import { apiDomain } from "../config";
// {!showingImage && (
//   <button className="note-delete-button" onClick={(e) => removeNote(id)}>
//     Delete
//   </button>
// )}

const Note = ({ id, question, answer, image_url }) => {
  const [showingAnswer, setShowingAnswer] = useState(false);
  const [showingImage, setShowingImage] = useState(false);
  const [notesList, setNotesList] = useRecoilState(notesListAtom);
  const [functionButton, setFunctionButton] =
    useRecoilState(functionButtonAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (id !== undefined || id !== null) {
      setFunctionButton({ func: () => removeNote(id), title: "Delete" });
    }

    return () => {
      setFunctionButton({ func: null, title: "" });
    };
  }, []);
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

  const removeNote = (id) => {
    deleteNoteById(id);
    setNotesList(
      notesList.filter((note) => {
        return note.id !== id;
      })
    );
    navigate(-1);
  };

  return (
    <>
      {/* {!showingImage && (
        <button className="note-delete-button" onClick={(e) => removeNote(id)}>
          Delete
        </button>
      )} */}

      <div className="note-component-container">
        <div className="note-container">
          {!showingAnswer ? (
            <>
              <div className="note-question-container">
                <p className="note-question">{question}</p>
              </div>
              {image_url && (
                <div className="note-image-container">
                  <img
                    onClick={toggleImage}
                    className="note-image"
                    src={apiDomain + image_url}
                  />
                </div>
              )}
            </>
          ) : (
            <p className="note-answer">{answer}</p>
          )}{" "}
          <div onClick={toggleAnswer} className="answer-toggle-button">
            {!showingAnswer ? "Show Answer" : "Hide Answer"}
          </div>
        </div>
        <div className={showingImage ? "modal active" : "modal"}>
          {image_url && showingImage && (
            <>
              <span onClick={toggleImage} className="modal-close">
                &times;
              </span>
              <TransformWrapper>
                <TransformComponent>
                  <img className="modal-image" src={apiDomain + image_url} />
                </TransformComponent>
              </TransformWrapper>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {};

export default Note;
