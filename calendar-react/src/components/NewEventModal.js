import React, { useState } from "react";
import "./Modal.css";
import ModalBackdrop from "./ModalBackdrop";

function NewEventModal(props) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  return (
    <div>
      <div id="newEventModal">
        <h2>New Event</h2>
        <input
          className={error ? "error" : ""}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="eventTitleInput"
          placeholder="Event Title"
        ></input>
        <button onClick={props.onClose} id="cancelButton">
          Cancel
        </button>
        <button
          onClick={() => {
            if (title) {
              setError(false);
              props.onSave(title);
            } else {
              setError(true);
            }
          }}
          id="saveButton"
        >
          Save
        </button>
      </div>
      <div>
        <ModalBackdrop />
      </div>
    </div>
  );
}

export default NewEventModal;
