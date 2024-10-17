/* eslint-disable react/prop-types */
import Entry from "./Entry";
import { useState } from "react";

export default function Section({
  sectionName,
  modalState,
  openModal,
  closeModal,
  isEditing,
  toggleIsEditing,
  handleFieldClick,
}) {
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

  const isMaxHeightReached = () => {
    const resumePage = document.querySelector(".resumePage");
    const maxHeight = 1164.71;
    const currentHeight = resumePage.scrollHeight + 20;

    let isMaxHeightReached = false;
    if (currentHeight >= maxHeight) {
      return (isMaxHeightReached = true);
    }

    return isMaxHeightReached;
  };

  function addEntry(sectionTitle) {
    if (isMaxHeightReached())
      // to-do: change to a temporary modal.
      return alert("You've reached the maximum height of your resume!");

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

  const section = entries[sectionName];
  const getSectionClass = () => {
    if (sectionName !== "Education" && sectionName !== "Certifications") {
      return "regularSection";
    } else {
      if (section.length === 1) {
        return "oneColumnSection";
      } else {
        return "twoColumnSection";
      }
    }
  };

  return (
    <section className="resumeSection">
      <h2 className="sectionTitle">{sectionName}</h2>
      <hr></hr>
      <div className={getSectionClass()}>
        {section.map((entry) => {
          return (
            <Entry
              key={entry.entryId}
              sectionTitle={entry.sectionTitle}
              entryId={entry.entryId}
              entriesLength={section.length}
              modalState={modalState}
              openModal={openModal}
              closeModal={closeModal}
              isEditing={isEditing}
              toggleIsEditing={toggleIsEditing}
              handleFieldClick={handleFieldClick}
              isMaxHeightReached={isMaxHeightReached}
              addEntry={addEntry}
              deleteEntry={deleteEntry}
            />
          );
        })}
      </div>
    </section>
  );
}
