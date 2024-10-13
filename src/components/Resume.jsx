import "../styles/Resume.css";
import Header from "./ResumeHeader";
import Section from "./ResumeSection";

export function Resume() {
  return (
    <>
      <div className="resumePage">
        <Header />
        <main>
          <Section
            title="Experience"
            entries={[
              {
                title: "Company Name",
                subtitle: "Position Title",
                location: "Location",
                datePeriod: "Date Period",
                hasBulletsSection: true,
              },
            ]}
          />
          <Section
            title="Education"
            entries={[
              {
                title: "School or University",
                subtitle: "Degree and Field",
                location: "Location",
                datePeriod: "Date Period",
              },
            ]}
          />
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
