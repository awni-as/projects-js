import React, { useState } from "react";
import "./Modal.css";
import ModalBackdrop from "./ModalBackdrop";

function DeleteEventModal(props) {
  return (
    <div>
      <div id="deleteEventModal">
        <h2>Event</h2>

        <p id="eventText">{props.eventText}</p>

        <button onClick={props.onDelete} id="deleteButton">
          Delete
        </button>
        <button onClick={props.onClose} id="closeButton">
          Close
        </button>
      </div>

      <div>
        <ModalBackdrop />
      </div>
    </div>
  );
}

export default DeleteEventModal;
