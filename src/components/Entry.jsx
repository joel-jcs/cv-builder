/* eslint-disable react/prop-types */
import "../styles/Entry.css";
import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function Entry({
  hasEntry = true,
  sectionTitle,
  hasBulletsSection = false,
  modalState,
  openModal,
  closeModal,
  isEditing,
  toggleIsEditing,
}) {
  const locationPlaceholder = "Location";
  const datePlaceholder = "Date Period";
  let titlePlaceholder = "";
  let subtitlePlaceholder = "";

  // can add a condition for Skills section.
  // if it's skills, I can change the className of the ul/li/bulletpoint at the bottom,
  // so that each skill shows as horizontal bullet point rather than vertically
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
  const handleChange = (e) => {
    const { className, value } = e.target;
    if (className === "entryTitle") setTitle(value);
    if (className === "entrySubtitle") setSubtitle(value);
    if (className === "location") setLocation(value);
    if (className === "datePeriod") setDate(value);
  };

  const [bulletPoints, setBulletPoints] = useState([
    { placeholder: "Highlight your accomplishments...", value: "" },
    { placeholder: "You've got the power.", value: "" },
  ]);
  const handleBulletPoint = (e) => {
    const { name, value } = e.target;
    const index = name.split("-")[1];
    const updatedBulletPoints = [...bulletPoints];
    updatedBulletPoints[index].value = value;
    setBulletPoints(updatedBulletPoints);
  };

  const [entryId] = useState(crypto.randomUUID());

  return (
    <div
      className="entry"
      onMouseEnter={() => openModal(entryId)}
      onMouseLeave={closeModal}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          toggleIsEditing(entryId);
        }
      }}
      id={entryId}
    >
      {modalState === entryId && (
        <Modal
          entryId={entryId}
          isEditing={isEditing}
          toggleIsEditing={toggleIsEditing}
        />
      )}
      {hasEntry && (
        <div className="entryHeader">
          <div className="entryPrimaryInfo">
            <Input
              className="entryTitle"
              placeholder={titlePlaceholder}
              value={entryTitle}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
            />
            <Input
              className="entrySubtitle"
              placeholder={subtitlePlaceholder}
              value={entrySubtitle}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
            />
          </div>

          <div className="entryLocationDate">
            <Input
              className="location"
              placeholder={locationPlaceholder}
              value={entryLocation}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
            />
            <Input
              className="datePeriod"
              placeholder={datePlaceholder}
              value={entryDate}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
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
                isEditing={isEditing}
                entryId={entryId}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
