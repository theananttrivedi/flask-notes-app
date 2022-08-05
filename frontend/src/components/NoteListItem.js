import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageTitle from "../atoms/currentPageTitle";
import "./NoteListItem.css";
import { apiDomain } from "../config";
const truncate = (s, n = 15) => {
  let x = s;
  let noOfCharactersToDisplay = n;
  if (x.length > noOfCharactersToDisplay) {
    return x.slice(0, noOfCharactersToDisplay) + "...";
  } else {
    return x + "...";
  }
};
const NoteListItem = ({ id, question, answer, image_url }) => {
  const [title, setTitle] = useRecoilState(currentPageTitle);
  return (
    <div className="note-item-container">
      <Link className="note-item-link" to={"/note/" + id}>
        <p className="text-block">{truncate(question, 25)}</p>

        {image_url && (
          <div className="note-item-image-container">
            <img className="note-item-image" src={apiDomain + image_url} />
          </div>
        )}
      </Link>
    </div>
  );
};

const styles = {};

export default NoteListItem;
