/* eslint-disable react/prop-types */
import "../styles/Sidebar.css";

export default function Sidebar({ sections, addSection, deleteSection }) {
  const hasExperienceSection = sections.some(
    (section) => section.name === "Experience"
  );
  const hasEducationSection = sections.some(
    (section) => section.name === "Education"
  );
  const hasCertificationsSection = sections.some(
    (section) => section.name === "Certifications"
  );
  const hasSkillsSection = sections.some(
    (section) => section.name === "Skills"
  );

  const addIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>plus-circle</title>
      <path d="M7,12H11V8H12V12H16V13H12V17H11V13H7V12M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" />
    </svg>
  );
  const deleteIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>minus-circle</title>
      <path d="M7,12H16V13H7V12M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" />
    </svg>
  );
  return (
    <aside className="sidebar">
      <h2>Add or Remove Sections</h2>
      {!hasExperienceSection ? (
        <button onClick={() => addSection("Experience")}>
          {addIcon} Experience
        </button>
      ) : (
        <button onClick={() => deleteSection("Experience")}>
          {deleteIcon} Experience
        </button>
      )}
      {!hasEducationSection ? (
        <button onClick={() => addSection("Education")}>
          {addIcon} Education
        </button>
      ) : (
        <button onClick={() => deleteSection("Education")}>
          {deleteIcon} Education
        </button>
      )}
      {!hasCertificationsSection ? (
        <button onClick={() => addSection("Certifications")}>
          {addIcon} Certifications
        </button>
      ) : (
        <button onClick={() => deleteSection("Certifications")}>
          {deleteIcon} Certifications
        </button>
      )}
      {!hasSkillsSection ? (
        <button onClick={() => addSection("Skills")}>{addIcon} Skills</button>
      ) : (
        <button onClick={() => deleteSection("Skills")}>
          {deleteIcon} Skills
        </button>
      )}
    </aside>
  );
}
