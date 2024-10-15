import "../styles/Resume.css";
import Header from "./ResumeHeader";
import Entry from "./Entry";
import { useState } from "react";

export function Resume() {
  const [modalState, setModalState] = useState(null);
  function openModal(entryID) {
    setModalState(entryID);
  }

  function closeModal() {
    setModalState(null);
  }

  const [isEditing, setIsEditing] = useState(null);
  function startEditing(entryID) {
    setIsEditing(entryID);
  }

  function stopEditing() {
    setIsEditing(null);
  }
  const toggleIsEditing = (entryId) => {
    if (isEditing === entryId) {
      stopEditing();
      closeModal();
    } else {
      startEditing(entryId);
    }
  };

  const [entries, setEntries] = useState({
    Experience: [
      {
        sectionTitle: "Experience",
        hasBulletsSection: true,
      },
    ],
    Education: [
      {
        sectionTitle: "Education",
      },
    ],
    Certifications: [
      {
        sectionTitle: "Certifications",
      },
    ],
    Skills: [
      {
        hasEntry: false,
        hasBulletsSection: true,
      },
    ],
  });

  return (
    <>
      <div className="resumePage">
        <Header
          modalState={modalState}
          openModal={openModal}
          closeModal={closeModal}
          isEditing={isEditing}
          toggleIsEditing={toggleIsEditing}
        />
        <main>
          <section className="resumeSection">
            <h2 className="sectionTitle">{"Experience"}</h2>
            <hr></hr>
            {entries.Experience.map((entry, index) => {
              return (
                <Entry
                  key={index}
                  {...entry}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                />
              );
            })}
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Education"}</h2>
            <hr></hr>
            {entries.Education.map((entry, index) => {
              return (
                <Entry
                  key={index}
                  {...entry}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                />
              );
            })}
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Certifications"}</h2>
            <hr></hr>
            {entries.Certifications.map((entry, index) => {
              return (
                <Entry
                  key={index}
                  {...entry}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                />
              );
            })}
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Skills"}</h2>
            <hr></hr>
            {entries.Skills.map((entry, index) => {
              return (
                <Entry
                  key={index}
                  {...entry}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                />
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
}
