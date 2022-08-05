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
import loadingAtom from "../atoms/loading";
import FadeLoader from "react-spinners/FadeLoader";
const GROUP_URL = apiDomain + "/api/group/";
const GROUP_NAME_BY_ID_URL = apiDomain + "/api/groupnamebyid/";
const GroupPage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [groupname, setGroupname] = useState("");
  const [notesList, setNotesList] = useRecoilState(notesListAtom);
  const [_, setTitle] = useRecoilState(currentPageTitle);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  useEffect(() => {
    setTitle("Group: " + groupname);
  }, [groupname]);
  const fetchGroupAndSetStateWithGroup = async () => {
    let url = GROUP_URL + id;
    if (query.get("page")) {
      url += "?page=" + query.get("page");
    }
    let response = await axios.get(url);
    if (response.data) {
      setNotesList(response.data.notes);
      setLoading(false);
    }
  };
  const getGroupnameById = async (id) => {
    let response = await axios.get(GROUP_NAME_BY_ID_URL + id);
    if (response.data) {
      setGroupname(response.data.name);
    }
  };
  useEffect(() => {
    fetchGroupAndSetStateWithGroup();
    getGroupnameById(id);
  }, []);
  useEffect(() => {
    return () => {
      setLoading(true);
    };
  }, []);
  return (
    <div className="groupDivContainerStyle">
      {loading ? (
        <FadeLoader
          color="rgb(6, 123, 192)"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
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
      )}
      {/* <GroupUpdateForm id={id} name={groupname} /> */}
      {groupname && <NoteForm group={groupname} />}
    </div>
  );
};

export default GroupPage;
