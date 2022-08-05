import axios from "axios";
import { useState, useEffect } from "react";
import { apiDomain } from "../config";
const Note_CREATION_URL = apiDomain + "/api/note/";
const NoteUpdateForm = ({ id, question, answer, image, group }) => {
  const [newquestion, setNewquestion] = useState(question);
  const [newanswer, setNewanswer] = useState(answer);
  const [newgroup, setNewgroup] = useState(group);
  const [imagefile, setImagefile] = useState(null);
  const [wantToChangeImage, setwantToChangeImage] = useState(false);
  const newquestionOnChange = (e) => {
    setNewquestion(e.target.value);
  };
  const newanswerOnChange = (e) => {
    setNewanswer(e.target.value);
  };
  const newgroupOnChange = (e) => {
    setNewgroup(e.target.value);
  };

  useEffect(() => {
    setNewanswer(answer);
    setNewgroup(group);
    setNewquestion(question);
  }, [group, answer, question]);

  const onSubmit = (e) => {
    e.preventDefault();
    requestApiToCreateANote(newquestion, newanswer, newgroup, imagefile);
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
      method: "put",
      url: Note_CREATION_URL + id,
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
          onChange={newquestionOnChange}
          placeholder="Question..."
          value={newquestion}
        />
        <input
          name="answer"
          type={"text"}
          onChange={newanswerOnChange}
          placeholder="Answer..."
          value={newanswer}
        />
        <input
          name="group"
          type={"text"}
          onChange={newgroupOnChange}
          placeholder="Group..."
          value={newgroup}
        />
        {wantToChangeImage && (
          <input
            name="image"
            type={"file"}
            onChange={(e) => setImagefile(e.target.files[0])}
          />
        )}

        <input type={"submit"} value="Create Note" />
      </form>
      <button onClick={(e) => setwantToChangeImage(!wantToChangeImage)}>
        {wantToChangeImage
          ? "I don't want to change Image"
          : "I want to change image"}
      </button>
    </div>
  );
};

export default NoteUpdateForm;
