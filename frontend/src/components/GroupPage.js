import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteForm from "./NoteForm";
import NoteListItem from "./NoteListItem";
const GROUP_URL = "http://127.0.0.1/api/group/";
const GROUP_NAME_BY_ID_URL = "http://127.0.0.1/api/groupnamebyid/";
const GroupPage = () => {
  const { id } = useParams();
  const [groupname, setGroupname] = useState("");
  const fetchGroupAndSetStateWithGroup = async () => {
    let response = await axios.get(GROUP_URL + id);
    if (response.data) {
      console.log(response.data);
      setNotes(response.data.notes);
    }
  };
  const getGroupnameById = async (id) => {
    let response = await axios.get(GROUP_NAME_BY_ID_URL + id);
    if (response.data) {
      console.log(response.data);
      setGroupname(response.data.name);
    }
  };
  useEffect(() => {
    fetchGroupAndSetStateWithGroup();
    getGroupnameById(id);
  }, []);

  const [notes, setNotes] = useState([]);
  return (
    <div style={styles.groupDivStyle}>
      <h1>GroupPage</h1>
      {groupname && <NoteForm group={groupname} />}
      <h1>Notes</h1>
      {notes &&
        notes.map((note) => {
          return (
            <NoteListItem
              id={note.id}
              question={note.question}
              answer={note.answer}
              image_url={note.image_url ? note.image_url : null}
            />
          );
        })}
    </div>
  );
};

const styles = {
  groupDivStyle: {
    textAlign: "center",
  },
};

export default GroupPage;
