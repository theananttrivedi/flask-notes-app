import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./Note";
import NoteUpdateForm from "./NoteUpdateForm";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
import { apiDomain } from "../config";
import previousPageTitle from "../atoms/previousPageTitle";
import loadingAtom from "../atoms/loading";
import FadeLoader from "react-spinners/FadeLoader";
import truncate from "../utils/truncate";
const NOTE_URL = apiDomain + "/api/note/";
const NotePage = () => {
  let setTitle, setPrevTitle, _;
  const { id } = useParams();
  const [note, setNote] = useState({});
  [_, setTitle] = useRecoilState(currentPageTitle);
  [_, setPrevTitle] = useRecoilState(previousPageTitle);
  const [loading, setLoading] = useRecoilState(loadingAtom);
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
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNoteAndSetStateWithNote();
  }, []);
  useEffect(() => {
    return () => {
      setLoading(true);
    };
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
          note && (
            <Note
              id={note.id}
              question={note.question}
              answer={note.answer}
              image_url={note.image_url}
            />
          )
        )}
      </div>
    </>
  );
};

const styles = {
  noteContainer: {
    display: "flex",
    width: "100vw",
    position: "fixed",
    height: "90vh",
    top: "5vh",
    background: `linear-gradient(
      to bottom right,
      rgba(21, 21, 21, 1),
      rgba(21, 21, 21, 0.8)
    )`,
  },
};

export default NotePage;
