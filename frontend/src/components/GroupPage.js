import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import NoteForm from "./NoteForm";
import "./GroupPage.css";
import NoteListItem from "./NoteListItem";
import GroupUpdateForm from "./GroupUpdateForm";
import { useRecoilState } from "recoil";
import notesListAtom from "../atoms/notesList";
import currentPageTitle from "../atoms/currentPageTitle";
import { apiDomain } from "../config";
const GROUP_URL = apiDomain + "/api/group/";

const GROUP_NAME_BY_ID_URL = apiDomain + "/api/groupnamebyid/";
const GroupPage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [groupname, setGroupname] = useState("");
  const [notesList, setNotesList] = useRecoilState(notesListAtom);
  const [title, setTitle] = useRecoilState(currentPageTitle);
  useEffect(() => {
    setTitle("Group: " + groupname);
  }, [groupname]);
  const fetchGroupAndSetStateWithGroup = async () => {
    console.log(query.get("page"));
    let url = GROUP_URL + id;
    if (query.get("page")) {
      url += "?page=" + query.get("page");
    }
    let response = await axios.get(url);
    if (response.data) {
      console.log(response.data);
      setNotesList(response.data.notes);
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

  return (
    <div className="groupDivContainerStyle">
      <div className="groupDivStyle">
        {notesList &&
          notesList.map((note) => {
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
      {/* <GroupUpdateForm id={id} name={groupname} /> */}
      {groupname && <NoteForm group={groupname} />}
    </div>
  );
};

const styles = {};

export default GroupPage;
