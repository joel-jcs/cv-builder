import "../styles/Resume.css";
import Header from "./ResumeHeader";

export function Resume() {
  return (
    <>
      <div className="resumePage">
        <Header />
        <main>
          <section className="resumeSection">
            <h2 className="sectionTitle">Experience</h2>
            <hr></hr>
            <div className="entry">
              <div className="entryPrimaryInfo">
                <h3 className="entryTitle">Company Name</h3>
                <h4 className="entrySubtitle">Position Title</h4>
              </div>
              <div className="entryLocationDate">
                <span className="location">Location</span>
                <span className="datePeriod">Date Period</span>
              </div>
            </div>
            <ul>
              <li className="bulletPoint">
                Highlight your accomplishments, starting with actions/verbs and
                using numbers where possible.
              </li>
            </ul>
          </section>
          <section className="resumeSection">
            <h2 className="sectionTitle">Education</h2>
            <hr></hr>
            <div className="entry">
              <div className="entryPrimaryInfo">
                <h3 className="entryTitle">School or University</h3>
                <h4 className="entrySubtitle">Degree and Field</h4>
              </div>
              <div className="entryLocationDate">
                <span className="location">Location</span>
                <span className="datePeriod">Date Period</span>
              </div>
            </div>
          </section>
          <section className="resumeSection">
            <h2 className="sectionTitle">Certifications</h2>
            <hr></hr>
            <div className="entry">
              <div className="entryPrimaryInfo">
                <h3 className="entryTitle">Certification Source or Entity</h3>
                <h4 className="entrySubtitle">Certification Title</h4>
              </div>
              <div className="entryLocationDate">
                <span className="location">Location</span>
                <span className="datePeriod">Date Period</span>
              </div>
            </div>
          </section>
          <section className="resumeSection">
            <h2 className="sectionTitle">Skills</h2>
            <hr></hr>
            <ul>
              <li className="bulletPoint">Skill 1</li>
              <li className="bulletPoint">Skill 2</li>
              <li className="bulletPoint">Skill 3</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
