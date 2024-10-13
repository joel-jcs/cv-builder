import "../styles/Modal.css";

export default function Modal() {
  //To-do: The purpose of this modal will be to add or delete an entry.
  // Though the project states to edit and submit entries, no need to do this
  // given that my version works with direct input for editing
  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Modal</h2>
        <button>Submit</button>
      </div>
    </div>
  );
}
