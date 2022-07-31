import axios from "axios";
import { useState, useEffect } from "react";

const Note_CREATION_URL = "http://127.0.0.1/api/note";
const NoteForm = ({ group }) => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const questionOnChange = (e) => {
    setQuestion(e.target.value);
  };
  const answerOnChange = (e) => {
    setAnswer(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    requestApiToCreateANote(question, answer, group);
  };

  const requestApiToCreateANote = async (q, a, g) => {
    const noteData = new FormData();
    noteData.append("question", q);
    noteData.append("answer", a);
    noteData.append("group", g);
    console.log({
      question: q,
      answer: a,
      group: g,
    });
    let response = await axios({
      method: "post",
      url: Note_CREATION_URL,
      data: noteData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.data) {
      console.log(response.data);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="question"
          type={"text"}
          onChange={questionOnChange}
          placeholder="Question..."
          value={question}
        />
        <input
          name="answer"
          type={"text"}
          onChange={answerOnChange}
          placeholder="Answer..."
          value={answer}
        />
        <input type={"submit"} value="Create Note" />
      </form>
    </div>
  );
};

export default NoteForm;
