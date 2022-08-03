import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import NoteForm from "./NoteForm";
import NoteListItem from "./NoteListItem";
import GroupUpdateForm from "./GroupUpdateForm";
const GROUP_URL = "http://127.0.0.1/api/group/";
const GROUP_NAME_BY_ID_URL = "http://127.0.0.1/api/groupnamebyid/";
const GroupPage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [groupname, setGroupname] = useState("");
  const fetchGroupAndSetStateWithGroup = async () => {
    console.log(query.get("page"));
    let url = GROUP_URL + id;
    if (query.get("page")) {
      url += "?page=" + query.get("page");
    }
    let response = await axios.get(url);
    if (response.data) {
      console.log(response.data);
      setNotes(response.data.notes);
    }
  };
  const getGroupnameById = async (id) => {
    let url = GROUP_NAME_BY_ID_URL + id;
    let response = await axios.get(url);
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
      <GroupUpdateForm id={id} name={groupname} />
      {groupname && <NoteForm group={groupname} />}

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
    position: "fixed",
    overflowY: "scroll",
    transform: "translateY(5vh)",
    height: "90vh",
    textAlign: "center",
    background: `linear-gradient(
      to bottom right,
      rgba(21, 21, 21, 1),
      rgba(21, 21, 21, 0.8)
    )`,
  },
};

export default GroupPage;
