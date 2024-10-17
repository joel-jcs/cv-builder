/* eslint-disable react/prop-types */
import "../styles/Modal.css";

export default function Modal({
  isHeader = false,
  entryId,
  isEditing,
  toggleIsEditing,
  sectionTitle,
  entriesLength,
  addEntry,
  deleteEntry,
}) {
  const minEntries = 1;
  const maxEntries =
    sectionTitle === "Experience"
      ? 5
      : sectionTitle === "Education"
      ? 3
      : sectionTitle === "Certifications"
      ? 6
      : 10;

  return (
    <div className="modal">
      <div className="modalContent">
        {!isEditing ? (
          <button onClick={() => toggleIsEditing(entryId)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>square-edit-outline</title>
              <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
            </svg>
          </button>
        ) : (
          <button onClick={() => toggleIsEditing(entryId)}>Submit</button>
        )}
        {!isHeader && !isEditing && entriesLength < maxEntries && (
          <button onClick={() => addEntry(sectionTitle)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>plus-circle</title>
              <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </button>
        )}
        {!isHeader && !isEditing && entriesLength > minEntries && (
          <button onClick={() => deleteEntry(sectionTitle, entryId)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>trash-can</title>
              <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
