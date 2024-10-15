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
    } else {
      startEditing(entryId);
    }
  };

  const generateEntryId = () => crypto.randomUUID();

  const [entries, setEntries] = useState({
    Experience: [
      {
        sectionTitle: "Experience",
        entryId: generateEntryId(),
      },
    ],
    Education: [
      {
        sectionTitle: "Education",
        entryId: generateEntryId(),
      },
    ],
    Certifications: [
      {
        sectionTitle: "Certifications",
        entryId: generateEntryId(),
      },
    ],
    Skills: [
      {
        sectionTitle: "Skills",
        entryId: generateEntryId(),
      },
    ],
  });

  function addEntry(sectionTitle) {
    setEntries((prevEntries) => {
      return {
        ...prevEntries,
        [sectionTitle]: [
          ...prevEntries[sectionTitle],
          {
            sectionTitle: sectionTitle,
            entryId: generateEntryId(),
          },
        ],
      };
    });
  }

  function deleteEntry(sectionTitle, entryId) {
    setEntries((prevEntries) => {
      return {
        ...prevEntries,
        [sectionTitle]: prevEntries[sectionTitle].filter((e) => {
          return e.entryId !== entryId;
        }),
      };
    });
  }

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
            {entries.Experience.map((entry) => {
              return (
                <Entry
                  key={entry.entryId}
                  sectionTitle={entry.sectionTitle}
                  entryId={entry.entryId}
                  entriesLength={entries.Experience.length}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                  addEntry={addEntry}
                  deleteEntry={deleteEntry}
                />
              );
            })}
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Education"}</h2>
            <hr></hr>
            {entries.Education.map((entry) => {
              return (
                <Entry
                  key={entry.entryId}
                  sectionTitle={entry.sectionTitle}
                  entryId={entry.entryId}
                  entriesLength={entries.Education.length}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                  addEntry={addEntry}
                  deleteEntry={deleteEntry}
                />
              );
            })}
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Certifications"}</h2>
            <hr></hr>
            {entries.Certifications.map((entry) => {
              return (
                <Entry
                  key={entry.entryId}
                  sectionTitle={entry.sectionTitle}
                  entryId={entry.entryId}
                  entriesLength={entries.Certifications.length}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                  addEntry={addEntry}
                  deleteEntry={deleteEntry}
                />
              );
            })}
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Skills"}</h2>
            <hr></hr>
            {entries.Skills.map((entry) => {
              return (
                <Entry
                  key={entry.entryId}
                  sectionTitle={entry.sectionTitle}
                  entryId={entry.entryId}
                  entriesLength={entries.Skills.length}
                  modalState={modalState}
                  openModal={openModal}
                  closeModal={closeModal}
                  isEditing={isEditing}
                  toggleIsEditing={toggleIsEditing}
                  addEntry={addEntry}
                  deleteEntry={deleteEntry}
                />
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
}
