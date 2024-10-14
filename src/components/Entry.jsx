/* eslint-disable react/prop-types */
import Input from "./Input";

// add "handleChange" function here like the ResumeHeader
// so that we can edit the input and properly set the state variables

export default function Entry({
  hasEntry = true,
  entryTitle = "",
  entrySubtitle = "",
  entryLocation = "",
  entryDatePeriod = "",
  hasBulletsSection = false,
}) {
  return (
    <div className="entry">
      {hasEntry && (
        <div className="entryHeader">
          <div className="entryPrimaryInfo">
            <input
              type="text"
              className="entryTitle"
              placeholder={entryTitle}
            />

            <input
              type="text"
              className="entrySubtitle"
              placeholder={entrySubtitle}
            />
          </div>

          <div className="entryLocationDate">
            <input className="location" placeholder={entryLocation} />
            <input className="datePeriod" placeholder={entryDatePeriod} />
          </div>
        </div>
      )}
      {hasBulletsSection && (
        <ul className="bulletSection">
          <li className="bulletPoint">
            {/* to-do: update the input's props here */}
            <Input
              placeholder={
                "Highlight your accomplishments, starting with actions/verbs and using numbers where possible."
              }
            />
          </li>
          <li className="bulletPoint">
            {/* to-do: update the input's props here */}
            <Input placeholder={"You've got the power."} />
          </li>
        </ul>
      )}
    </div>
  );
}
