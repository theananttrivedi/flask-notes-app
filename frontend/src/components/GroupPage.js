import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteListItem from "./NoteListItem";
const GROUP_URL = "http://127.0.0.1/api/group/";
const GroupPage = () => {
  const { id } = useParams();
  const fetchGroupAndSetStateWithGroup = async () => {
    let response = await axios.get(GROUP_URL + id);
    if (response.data) {
      console.log(response.data);
      setNotes(response.data.notes);
    }
  };
  useEffect(() => {
    fetchGroupAndSetStateWithGroup();
  }, []);
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <h1>GroupPage</h1>
      <h1>Notes</h1>
      {notes &&
        notes.map((note) => {
          return (
            <NoteListItem
              id={id}
              question={note.question}
              answer={note.answer}
              image_url={note.image_url ? note.image_url : null}
            />
          );
        })}
    </div>
  );
};

export default GroupPage;
