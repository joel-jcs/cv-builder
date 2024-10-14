import "../styles/Resume.css";
import Header from "./ResumeHeader";
import Entry from "./Entry";
import Modal from "./Modal";
import { useState } from "react";

export function Resume() {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
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
            <Entry
              entryTitle="Company Name"
              entrySubtitle="Position Title"
              entryLocation="Location"
              entryDatePeriod="Date Period"
              hasBulletsSection={true}
            />
          </section>
          {/* {showModal && <Modal />} */}

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Education"}</h2>
            <hr></hr>
            <Entry
              entryTitle="School or University"
              entrySubtitle="Degree and Field"
              entryLocation="Location"
              entryDatePeriod="Date Period"
            />
          </section>

          <section className="resumeSection">
            <h2 className="sectionTitle">{"Certifications"}</h2>
            <hr></hr>
            <Entry
              entryTitle="Certification Source or Entity"
              entrySubtitle="Certification Title"
              entryLocation="Location"
              entryDatePeriod="Date Period"
            />
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
