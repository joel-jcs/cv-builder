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

  return (
    <>
      <div className="resumePage">
        <Header
        // showModal={showModal}
        // openModal={openModal}
        // closeModal={closeModal}
        />
        <main>
          <section className="resumeSection">
            {/* // onClick={openModal}
            // onFocus={openModal}
            // onBlur={closeModal} */}
            <h2 className="sectionTitle">{"Experience"}</h2>
            <hr></hr>
            {/* <Entry
              sectionTitle="Experience"
              hasBulletsSection={true}
              modalState={modalState}
              toggleModal={toggleModal}
            /> */}
            <Entry
              sectionTitle="Experience"
              hasBulletsSection={true}
              modalState={modalState}
              openModal={openModal}
              closeModal={closeModal}
              isEditing={isEditing}
              toggleIsEditing={toggleIsEditing}
            />
          </section>
          {/* {showModal && <Modal />} */}

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Education"}</h2>
            <hr></hr>
            <Entry
              sectionTitle="Education"
              modalState={modalState}
              openModal={openModal}
              closeModal={closeModal}
              isEditing={isEditing}
              toggleIsEditing={toggleIsEditing}
            />
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Certifications"}</h2>
            <hr></hr>
            <Entry
              sectionTitle="Certifications"
              modalState={modalState}
              openModal={openModal}
              closeModal={closeModal}
              isEditing={isEditing}
              toggleIsEditing={toggleIsEditing}
            />
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Skills"}</h2>
            <hr></hr>
            <Entry
              hasEntry={false}
              hasBulletsSection={true}
              modalState={modalState}
              openModal={openModal}
              closeModal={closeModal}
              isEditing={isEditing}
              toggleIsEditing={toggleIsEditing}
            />
          </section>
        </main>
      </div>
    </>
  );
}
