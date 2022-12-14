import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import notesListAtom from "../atoms/notesList";
import "./NoteForm.css";
import { apiDomain } from "../config";
const Note_CREATION_URL = apiDomain + "/api/note";
const NoteForm = ({ group }) => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [imagefile, setImagefile] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [notesList, setNotesList] = useRecoilState(notesListAtom);
  const questionOnChange = (e) => {
    setQuestion(e.target.value);
  };
  const answerOnChange = (e) => {
    setAnswer(e.target.value);
  };

  const toggleShowForm = (e) => {
    setShowForm(!showForm);
    setQuestion("");
    setAnswer("");
    setImagefile(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    requestApiToCreateANote(question, answer, group, imagefile);
  };

  const requestApiToCreateANote = async (q, a, g, f = null) => {
    const noteData = new FormData();
    noteData.append("question", q);
    noteData.append("answer", a);
    noteData.append("group", g);
    if (f) {
      noteData.append("image", f);
    }
    let response = await axios({
      method: "post",
      url: Note_CREATION_URL,
      data: noteData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.data) {
      setNotesList([...notesList, response.data]);
    }
  };

  return (
    <>
      {showForm && (
        <div className="note-form-container">
          <form className="note-form" onSubmit={onSubmit}>
            <input
              className="note-form-input"
              name="question"
              type={"text"}
              onChange={questionOnChange}
              placeholder="Question..."
              value={question}
            />
            <input
              className="note-form-input"
              name="answer"
              type={"text"}
              onChange={answerOnChange}
              placeholder="Answer..."
              value={answer}
            />
            <input
              className="note-form-input"
              name="image"
              type={"file"}
              onChange={(e) => setImagefile(e.target.files[0])}
            />
            <input
              className="note-form-submit-button"
              type={"submit"}
              value="Create Note"
            />
          </form>
        </div>
      )}
      <div className="note-form-toggle-button" onClick={toggleShowForm}>
        +
      </div>
    </>
  );
};

export default NoteForm;
