/* eslint-disable react/prop-types */
import "../styles/Modal.css";

//To-do: The purpose of this modal will be to:
// edit and submit entries/sections
// add or delete an entry.
export default function Modal({ entryId, isEditing, toggleIsEditing }) {
  return (
    <div className="modal">
      <div className="modalContent">
        {!isEditing ? (
          <button onClick={() => toggleIsEditing(entryId)}>Edit</button>
        ) : (
          <button onClick={() => toggleIsEditing(entryId)}>Submit</button>
        )}
      </div>
    </div>
  );
}
