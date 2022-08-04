import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./Note";
import NoteUpdateForm from "./NoteUpdateForm";
import { apiDomain } from "../config";
const NOTE_URL = apiDomain + "/api/note/";
const NotePage = () => {
  const { id } = useParams();
  const fetchNoteAndSetStateWithNote = async () => {
    let response = await axios.get(NOTE_URL + id);
    if (response.data) {
      console.log(response.data);
      setNote({ ...response.data });
    }
  };
  useEffect(() => {
    fetchNoteAndSetStateWithNote();
  }, []);
  const [note, setNote] = useState({});
  return (
    <>
      <div style={styles.noteContainer}>
        {" "}
        {/* <NoteUpdateForm
        id={note.id}
        question={note.question}
        answer={note.answer}
        image={note.image_url}
        group={note.group}
      /> */}
        {note && (
          <Note
            id={note.id}
            question={note.question}
            answer={note.answer}
            image_url={note.image_url}
          />
        )}
      </div>
    </>
  );
};

const styles = {
  noteContainer: {
    display: "flex",
    postion: "fixed",
    top: "5vh",
  },
  noteDeleteButton: {
    position: "absolute",
    top: "0",
    right: "0.2rem",
    border: "none",
    padding: "0.75rem",
    background: "transparent",
    textDecoration: "none",
    color: "red",
    zIndex: "5000",
  },
};

export default NotePage;
