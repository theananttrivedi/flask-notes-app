import React from "react";
import { Link } from "react-router-dom";
import "./NoteListItem.css";
import { apiDomain } from "../config";
import truncate from "../utils/truncate";

const NOTE_REACT_URL = "/note/";
const NoteListItem = ({ id, question, image_url }) => {
  return (
    <div className="note-item-container">
      <Link className="note-item-link" to={NOTE_REACT_URL + id}>
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

export default NoteListItem;
