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
            />
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Certifications"}</h2>
            <hr></hr>
            <Entry sectionTitle="Certifications" />
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Skills"}</h2>
            <hr></hr>
            <Entry hasEntry={false} hasBulletsSection={true} />
          </section>
        </main>
      </div>
    </>
  );
}
