import React from "react";

const Note = ({ question, answer, image_url }) => {
  return (
    <div>
      <p>{question}</p>
      <p>{answer}</p>
      {image_url && <img src={"http://127.0.0.1" + image_url} />}
    </div>
  );
};

export default Note;
