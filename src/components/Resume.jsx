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
            hasBulletsSection={true}
            entries={[
              {
                title: "Company Name",
                subtitle: "Position Title",
                location: "Location",
                datePeriod: "Date Period",
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
          <Section
            title="Certifications"
            entries={[
              {
                title: "Certification Source or Entity",
                subtitle: "Certification Title",
                location: "Location",
                datePeriod: "Date Period",
              },
            ]}
          />
          <Section title="Skills" hasBulletsSection={true} />
        </main>
      </div>
    </>
  );
}
