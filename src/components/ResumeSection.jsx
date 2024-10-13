/* eslint-disable react/prop-types */
import BulletPoint from "./BulletPoint";

export default function ResumeSection({
  title,
  hasBulletsSection = false,
  hasEntry = true,
  entries = [
    {
      defaultTitle: "",
      defaultSubtitle: "",
      defaultLocation: "",
      defaultDatePeriod: "",
    },
  ],
}) {
  return (
    <section className="resumeSection">
      <h2 className="sectionTitle">{title}</h2>
      <hr></hr>
      <div className="entry">
        {hasEntry && (
          // TO-DO: Set each entry as a component
          <div className="entryHeader">
            <div className="entryPrimaryInfo">
              <input
                type="text"
                className="entryTitle"
                placeholder={entries[0].defaultTitle}
              />

              <input
                type="text"
                className="entrySubtitle"
                placeholder={entries[0].defaultSubtitle}
              />
            </div>

            <div className="entryLocationDate">
              <input
                className="location"
                placeholder={entries[0].defaultLocation}
              />
              <input
                className="datePeriod"
                placeholder={entries[0].defaultDatePeriod}
              />
            </div>
          </div>
        )}
        {hasBulletsSection && (
          <ul className="bulletSection">
            <BulletPoint
              text="Highlight your accomplishments, starting with actions/verbs and using numbers where possible."
              id={crypto.randomUUID()}
            />
            <BulletPoint
              text="You've got the power."
              id={crypto.randomUUID()}
            />
          </ul>
        )}
      </div>
    </section>
  );
}
