import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./Note";
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
    <div>
      <h1>NotePage - id:{id}</h1>
      {note && (
        <Note
          question={note.question}
          answer={note.answer}
          image_url={note.image_url}
        />
      )}
    </div>
  );
};

export default NotePage;