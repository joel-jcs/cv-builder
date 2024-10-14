/* eslint-disable react/prop-types */
import "../styles/Entry.css";
import { useState } from "react";
import Input from "./Input";

// add "handleChange" function here like the ResumeHeader
// so that we can edit the input and properly set the state variables

export default function Entry({
  hasEntry = true,
  sectionTitle,
  hasBulletsSection = false,
}) {
  const locationPlaceholder = "Location";
  const datePlaceholder = "Date Period";
  let titlePlaceholder = "";
  let subtitlePlaceholder = "";

  if (sectionTitle === "Experience") {
    titlePlaceholder = "Company Name";
    subtitlePlaceholder = "Position Title";
  } else if (sectionTitle === "Education") {
    titlePlaceholder = "School or University";
    subtitlePlaceholder = "Degree and Field";
  } else if (sectionTitle === "Certifications") {
    titlePlaceholder = "Certification Title";
    subtitlePlaceholder = "Certification Provider";
  }

  const [entryTitle, setTitle] = useState("");
  const [entrySubtitle, setSubtitle] = useState("");
  const [entryLocation, setLocation] = useState("");
  const [entryDate, setDate] = useState("");
  const [bulletPoints, setBulletPoints] = useState([
    { placeholder: "Highlight your accomplishments...", value: "" },
    { placeholder: "You've got the power.", value: "" },
  ]);

  const handleChange = (e) => {
    const { className, value } = e.target;
    if (className === "entryTitle") setTitle(value);
    if (className === "entrySubtitle") setSubtitle(value);
    if (className === "location") setLocation(value);
    if (className === "datePeriod") setDate(value);
  };

  const handleBulletPoint = (e) => {
    const { name, value } = e.target;
    const index = name.split("-")[1];
    const updatedBulletPoints = [...bulletPoints];
    updatedBulletPoints[index].value = value;
    setBulletPoints(updatedBulletPoints);
  };

  console.log(entryTitle, entrySubtitle, entryLocation, entryDate);
  console.log(bulletPoints);

  return (
    <div className="entry">
      {hasEntry && (
        <div className="entryHeader">
          <div className="entryPrimaryInfo">
            <Input
              className="entryTitle"
              placeholder={titlePlaceholder}
              value={entryTitle}
              onChange={handleChange}
            />
            <Input
              className="entrySubtitle"
              placeholder={subtitlePlaceholder}
              value={entrySubtitle}
              onChange={handleChange}
            />
          </div>

          <div className="entryLocationDate">
            <Input
              className="location"
              placeholder={locationPlaceholder}
              value={entryLocation}
              onChange={handleChange}
            />
            <Input
              className="datePeriod"
              placeholder={datePlaceholder}
              value={entryDate}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {hasBulletsSection && (
        <ul className="bulletSection">
          {bulletPoints.map((bullet, index) => (
            <li className="bulletPoint" key={index}>
              <Input
                name={`bulletPoint-${index}`}
                placeholder={bullet.placeholder}
                value={bullet.value}
                onChange={handleBulletPoint}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
