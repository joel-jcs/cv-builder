/* eslint-disable react/prop-types */
import "../styles/Entry.css";
import { useState } from "react";
import Input from "./Input";
import BulletPoint from "./BulletPoint";
import Modal from "./Modal";

export default function Entry({
  hasEntry,
  sectionTitle,
  entryId,
  entriesLength,
  hasBulletsSection,
  modalState,
  openModal,
  closeModal,
  isEditing,
  toggleIsEditing,
  addEntry,
  deleteEntry,
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
    hasEntry = true;
    hasBulletsSection = true;
  } else if (sectionTitle === "Education") {
    titlePlaceholder = "School or University";
    subtitlePlaceholder = "Degree and Field";
    hasEntry = true;
    hasBulletsSection = false;
  } else if (sectionTitle === "Certifications") {
    titlePlaceholder = "Certification Title";
    subtitlePlaceholder = "Certification Provider";
    hasEntry = true;
    hasBulletsSection = false;
  } else if (sectionTitle === "Skills") {
    hasEntry = false;
    hasBulletsSection = true;
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

  const generateBulletPointId = () => crypto.randomUUID();

  const [bulletPoints, setBulletPoints] = useState([
    {
      bulletPointId: generateBulletPointId(),
      placeholder: "Highlight your accomplishments...",
      value: "",
    },
    {
      bulletPointId: generateBulletPointId(),
      placeholder: "You've got the power.",
      value: "",
    },
  ]);
  const changeBulletPoint = (e) => {
    const { name, value } = e.target;
    const index = name.split("-")[1];
    const updatedBulletPoints = [...bulletPoints];
    updatedBulletPoints[index].value = value;
    setBulletPoints(updatedBulletPoints);
  };

  function addBulletPoint(parentNode, newItemIndex) {
    setBulletPoints((prevEntries) => {
      return [
        ...prevEntries.slice(0, newItemIndex),
        {
          bulletPointId: generateBulletPointId(),
          placeholder: "New bullet point...",
          value: "",
        },
        ...prevEntries.slice(newItemIndex),
      ];
    });

    setTimeout(() => {
      const bullets = parentNode.querySelectorAll("input");
      const newBullets = bullets[newItemIndex];
      newBullets.focus();
    }, 1);
  }

  function deleteBulletPoint(bulletPointId) {
    setBulletPoints((prevEntries) => {
      return [
        ...prevEntries,
        prevEntries.filter((entry) => entry.bulletPointId !== bulletPointId),
      ];
    });
  }

  return (
    <div
      className="entry"
      onMouseEnter={() => !isEditing && openModal(entryId)}
      onMouseLeave={() => !isEditing && closeModal()}
      // to-do: add editing on click
      // onClick={() => !isEditing && toggleIsEditing(entryId)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          toggleIsEditing(entryId);
        }
      }}
    >
      {modalState === entryId && (
        <Modal
          key={entryId}
          entryId={entryId}
          isEditing={isEditing}
          toggleIsEditing={toggleIsEditing}
          sectionTitle={sectionTitle}
          entriesLength={entriesLength}
          addEntry={addEntry}
          deleteEntry={deleteEntry}
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
              toggleIsEditing={toggleIsEditing}
            />
            <Input
              className="entrySubtitle"
              placeholder={subtitlePlaceholder}
              value={entrySubtitle}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
              toggleIsEditing={toggleIsEditing}
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
              toggleIsEditing={toggleIsEditing}
            />
            <Input
              className="datePeriod"
              placeholder={datePlaceholder}
              value={entryDate}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
              toggleIsEditing={toggleIsEditing}
            />
          </div>
        </div>
      )}
      {hasBulletsSection && (
        <ul className="bulletSection">
          {bulletPoints.map((bullet, index) => (
            // will need to set the key as something unique
            <li className="bulletPoint" key={index}>
              <BulletPoint
                bulletPointId={bullet.bulletPointId}
                name={`bulletPoint-${index}`}
                placeholder={bullet.placeholder}
                value={bullet.value}
                changeBulletPoint={changeBulletPoint}
                isEditing={isEditing}
                entryId={entryId}
                toggleIsEditing={toggleIsEditing}
                addBulletPoint={addBulletPoint}
                deleteBulletPoint={deleteBulletPoint}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
