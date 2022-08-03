import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./Note";
import NoteUpdateForm from "./NoteUpdateForm";
const NOTE_URL = "http://127.0.0.1/api/note/";
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
    <div style={styles.noteContainer}>
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
  );
};

const styles = {
  deleteButtonStyle: {
    postion: "absolute",
    bottom: "1rem",
    right: "1rem",
    border: "none",
    padding: ".75rem",
    background: "transparent",
    textDecoration: "none",
    color: "red",
  },
  noteContainer: {
    display: "flex",
    postion: "absolute",
    top: "5vh",
  },
};

export default NotePage;
