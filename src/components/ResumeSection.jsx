/* eslint-disable react/prop-types */
import BulletPoint from "./BulletPoint";

export default function ResumeSection({
  title,
  entries = [
    {
      title: "",
      subtitle: "",
      location: "",
      datePeriod: "",
      hasBulletsSection: false,
    },
  ],
}) {
  console.log(entries[0]);

  return (
    <section className="resumeSection">
      <h2 className="sectionTitle">{title}</h2>
      <hr></hr>
      <div className="entry">
        <div className="entryPrimaryInfo">
          <h3 className="entryTitle"> {entries[0].title}</h3>
          <h4 className="entrySubtitle">{entries[0].subtitle}</h4>
        </div>
        <div className="entryLocationDate">
          <span className="location">{entries[0].location}</span>
          <span className="datePeriod">{entries[0].datePeriod}</span>
        </div>
      </div>
      {entries[0].hasBulletsSection && (
        <ul>
          <BulletPoint
            text="Highlight your accomplishments, starting with actions/verbs and using numbers where possible."
            id={crypto.randomUUID()}
          />
          <BulletPoint text="You've got the power." id={crypto.randomUUID()} />
        </ul>
      )}
    </section>
  );
}
