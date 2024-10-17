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
  toggleBulletPoints,
}) {
  const minEntries = 1;
  const maxEntries =
    sectionTitle === "Experience"
      ? 5
      : sectionTitle === "Education"
      ? 4
      : sectionTitle === "Certifications"
      ? 4
      : 1;

  return (
    <div className="modal">
      <div className="modalContent">
        {!isEditing ? (
          <button onClick={() => toggleIsEditing(entryId)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Edit Entry</title>
              <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
            </svg>
          </button>
        ) : (
          <>
            <button onClick={() => toggleIsEditing(entryId)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Submit</title>
                <path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" />
              </svg>
            </button>
            {sectionTitle !== "Skills" && (
              <button onClick={() => toggleBulletPoints()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>format-list-bulleted</title>
                  <path d="M20,18V19H7V18H20M3.5,17.5C4.05,17.5 4.5,17.95 4.5,18.5C4.5,19.05 4.05,19.5 3.5,19.5C2.95,19.5 2.5,19.05 2.5,18.5C2.5,17.95 2.95,17.5 3.5,17.5M20,12V13H7V12H20M3.5,11.5C4.05,11.5 4.5,11.95 4.5,12.5C4.5,13.05 4.05,13.5 3.5,13.5C2.95,13.5 2.5,13.05 2.5,12.5C2.5,11.95 2.95,11.5 3.5,11.5M20,6V7H7V6H20M3.5,5.5C4.05,5.5 4.5,5.95 4.5,6.5C4.5,7.05 4.05,7.5 3.5,7.5C2.95,7.5 2.5,7.05 2.5,6.5C2.5,5.95 2.95,5.5 3.5,5.5Z" />
                </svg>
              </button>
            )}
          </>
        )}
        {!isHeader && !isEditing && entriesLength < maxEntries && (
          <button onClick={() => addEntry(sectionTitle)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Add New Entry</title>
              <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </button>
        )}
        {!isHeader && !isEditing && entriesLength > minEntries && (
          <button onClick={() => deleteEntry(sectionTitle, entryId)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Delete Entry</title>
              <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
