import "../styles/Resume.css";
import Sidebar from "./Sidebar";
import Header from "./ResumeHeader";
import Section from "./Section";
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

  const handleFieldClick = (e, entryId) => {
    let elParent;
    let index;
    if (
      e.target.parentNode.parentNode.className === "entryHeader" ||
      e.target.parentNode.parentNode.className === "resumePage" ||
      e.target.parentNode.className === "contactDetails"
    ) {
      elParent = e.target.parentNode;
      index = Array.prototype.indexOf.call(elParent.children, e.target);
    } else {
      elParent = e.target.parentNode.parentNode;
      index = Array.prototype.indexOf.call(
        elParent.children,
        e.target.parentNode
      );
    }

    !isEditing && toggleIsEditing(entryId);
    setTimeout(() => {
      const focusItem =
        elParent.parentNode.className === "entryHeader" ||
        elParent.parentNode.className === "resumePage" ||
        elParent.className === "contactDetails"
          ? elParent.children[index]
          : elParent.children[index].querySelector(".input");
      focusItem.focus();
    }, 1);
  };

  const generateSectionId = () => crypto.randomUUID();

  const [sections, setSections] = useState([
    {
      name: "Experience",
      id: generateSectionId(),
    },
    {
      name: "Education",
      id: generateSectionId(),
    },
    {
      name: "Certifications",
      id: generateSectionId(),
    },
    {
      name: "Skills",
      id: generateSectionId(),
    },
  ]);

  function addSection(sectionName) {
    setSections((prevSections) => {
      return [
        ...prevSections,
        {
          name: sectionName,
          id: generateSectionId(),
        },
      ];
    });
  }

  function deleteSection(sectionName) {
    setSections((prevSections) => {
      return prevSections.filter((section) => section.name !== sectionName);
    });
  }

  return (
    <div className="contentWrapper">
      <Sidebar
        sections={sections}
        addSection={addSection}
        deleteSection={deleteSection}
      />
      <div className="resumeContainer">
        <div className="resumePage">
          <Header
            modalState={modalState}
            openModal={openModal}
            closeModal={closeModal}
            isEditing={isEditing}
            toggleIsEditing={toggleIsEditing}
            handleFieldClick={handleFieldClick}
          />
          <main>
            {sections.map((section) => (
              <Section
                key={section.id}
                sectionName={section.name}
                modalState={modalState}
                openModal={openModal}
                closeModal={closeModal}
                isEditing={isEditing}
                toggleIsEditing={toggleIsEditing}
                handleFieldClick={handleFieldClick}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
