import "../styles/Resume.css";
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

  return (
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
          <Section
            sectionName={"Experience"}
            modalState={modalState}
            openModal={openModal}
            closeModal={closeModal}
            isEditing={isEditing}
            toggleIsEditing={toggleIsEditing}
            handleFieldClick={handleFieldClick}
          />

          <Section
            sectionName={"Education"}
            modalState={modalState}
            openModal={openModal}
            closeModal={closeModal}
            isEditing={isEditing}
            toggleIsEditing={toggleIsEditing}
            handleFieldClick={handleFieldClick}
          />

          <Section
            sectionName={"Certifications"}
            modalState={modalState}
            openModal={openModal}
            closeModal={closeModal}
            isEditing={isEditing}
            toggleIsEditing={toggleIsEditing}
            handleFieldClick={handleFieldClick}
          />

          <Section
            sectionName={"Skills"}
            modalState={modalState}
            openModal={openModal}
            closeModal={closeModal}
            isEditing={isEditing}
            toggleIsEditing={toggleIsEditing}
            handleFieldClick={handleFieldClick}
          />
        </main>
      </div>
    </div>
  );
}
