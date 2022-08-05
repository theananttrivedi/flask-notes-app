import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./Note";
import NoteUpdateForm from "./NoteUpdateForm";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
import { apiDomain } from "../config";
import previousPageTitle from "../atoms/previousPageTitle";
import truncate from "../utils/truncate";
const NOTE_URL = apiDomain + "/api/note/";
const NotePage = () => {
  let setTitle, setPrevTitle, _;
  const { id } = useParams();
  const [note, setNote] = useState({});
  [_, setTitle] = useRecoilState(currentPageTitle);
  [_, setPrevTitle] = useRecoilState(previousPageTitle);
  useEffect(() => {
    if (note && note.question) {
      setTitle(note.id + " : " + truncate(note.question, 20));
      setPrevTitle("< " + note.group);
    }
    return () => {
      setPrevTitle(null);
    };
  }, [note]);
  const fetchNoteAndSetStateWithNote = async () => {
    let response = await axios.get(NOTE_URL + id);
    if (response.data) {
      setNote({ ...response.data });
    }
  };
  useEffect(() => {
    fetchNoteAndSetStateWithNote();
  }, []);

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
};

export default NotePage;
