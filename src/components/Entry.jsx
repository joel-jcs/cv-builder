/* eslint-disable react/prop-types */
import "../styles/Entry.css";
import Input from "./Input";

// add "handleChange" function here like the ResumeHeader
// so that we can edit the input and properly set the state variables

export default function Entry({
  hasEntry = true,
  sectionTitle,
  entryTitle,
  entrySubtitle,
  entryLocation = "Location",
  entryDatePeriod = "Date Period",
  hasBulletsSection = false,
}) {
  if (sectionTitle === "Experience") {
    entryTitle = "Company Name";
    entrySubtitle = "Position Title";
  } else if (sectionTitle === "Education") {
    entryTitle = "School or University";
    entrySubtitle = "Degree and Field";
  } else if (sectionTitle === "Certifications") {
    entryTitle = "Certification Title";
    entrySubtitle = "Certification Provider";
  }
  // const [entryTitle, setEntryTitle] = useState("");
  // const [entrySubtitle, setEmail] = useState("");
  // const [entryLocation, setPhone] = useState("");
  // const [entryDate, setLink] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "name") setName(value);
  //   if (name === "email") setEmail(value);
  //   if (name === "phone") setPhone(value);
  //   if (name === "link") setLink(value);
  //   if (name === "location") setLocation(value);
  // };

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
