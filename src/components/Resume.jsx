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
                defaultTitle: "Company Name",
                defaultSubtitle: "Position Title",
                defaultLocation: "Location",
                defaultDatePeriod: "Date Period",
              },
            ]}
          />
          <Section
            title="Education"
            entries={[
              {
                defaultTitle: "School or University",
                defaultSubtitle: "Degree and Field",
                defaultLocation: "Location",
                defaultDatePeriod: "Date Period",
              },
            ]}
          />
          <Section
            title="Certifications"
            entries={[
              {
                defaultTitle: "Certification Source or Entity",
                defaultSubtitle: "Certification Title",
                defaultLocation: "Location",
                defaultDatePeriod: "Date Period",
              },
            ]}
          />
          <Section title="Skills" hasEntry={false} hasBulletsSection={true} />
        </main>
      </div>
    </>
  );
}
