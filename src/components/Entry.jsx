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
  modalState,
  openModal,
  closeModal,
  isEditing,
  toggleIsEditing,
  handleFieldClick,
  isMaxHeightReached,
  addEntry,
  deleteEntry,
}) {
  const locationPlaceholder = "Location";
  const datePlaceholder = "Date Period";
  let titlePlaceholder = "";
  let subtitlePlaceholder = "";
  let bulletPlaceholder = "";

  if (sectionTitle === "Experience") {
    titlePlaceholder = "Company Name";
    subtitlePlaceholder = "Position Title";
    bulletPlaceholder =
      "Write something, press 'Enter' to add line or 'Backspace' to delete...";
    hasEntry = true;
  } else if (sectionTitle === "Education") {
    titlePlaceholder = "School or University";
    subtitlePlaceholder = "Degree and Field";
    hasEntry = true;
  } else if (sectionTitle === "Certifications") {
    titlePlaceholder = "Certification Title";
    subtitlePlaceholder = "Certification Provider";
    hasEntry = true;
  } else if (sectionTitle === "Skills") {
    hasEntry = false;
    bulletPlaceholder = "Add skill...";
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
      value: "",
    },
  ]);

  const changeBulletPoint = (e) => {
    if (isMaxHeightReached()) return;

    const div = e.target;
    const name = div.getAttribute("name");
    const index = name.split("-")[1];
    const value = div.innerText;
    const updatedBulletPoints = [...bulletPoints];
    updatedBulletPoints[index].value = value;
    setBulletPoints(updatedBulletPoints);
  };

  function addBulletPoint(parentNode, index) {
    if (isMaxHeightReached()) return;
    const newItemIndex = index + 1;

    setBulletPoints((prevEntries) => {
      return [
        ...prevEntries.slice(0, newItemIndex),
        {
          bulletPointId: generateBulletPointId(),
          value: "",
        },
        ...prevEntries.slice(newItemIndex),
      ];
    });

    // set timeout to wait for re-render before getting last bulletpoint
    setTimeout(() => {
      const bulletPoints = parentNode.querySelectorAll(".input");
      const newBulletPoint = bulletPoints[newItemIndex];
      newBulletPoint.focus();
    }, 1);
  }

  function deleteBulletPoint(bulletPointId, parentNode, index) {
    let prevItemIndex = index - 1;

    setBulletPoints((prevEntries) => {
      return prevEntries.filter(
        (entry) => entry.bulletPointId !== bulletPointId
      );
    });

    // set timeout to wait for re-render before getting last bulletpoint
    setTimeout(() => {
      if (prevItemIndex < 0) return; // prevents auto-focus if all bullet points have been deleted

      const bulletPoints = parentNode.querySelectorAll(".input");
      let nextBulletPoint;
      if (!bulletPoints[index]) {
        nextBulletPoint = bulletPoints[prevItemIndex];
      } else {
        nextBulletPoint = bulletPoints[index];
      }

      console.log(nextBulletPoint);

      nextBulletPoint && nextBulletPoint.focus();
    }, 1);
  }

  const [hasBulletsSection, setHasBulletsSection] = useState(
    sectionTitle === "Experience" || sectionTitle === "Skills"
  );

  function toggleBulletPoints() {
    if (hasBulletsSection) {
      setBulletPoints([]);
      setHasBulletsSection(false);
    } else {
      setBulletPoints([
        {
          bulletPointId: generateBulletPointId(),
          value: "",
        },
      ]);
      setHasBulletsSection(true);
    }
  }

  return (
    <div
      className="entry"
      onMouseEnter={() => !isEditing && openModal(entryId)}
      onMouseLeave={() => !isEditing && closeModal()}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          toggleIsEditing(entryId);
          closeModal();
        }
      }}
    >
      {modalState === entryId && (
        <Modal
          key={entryId}
          suppressHydrationWarning={true} // remove on prod
          entryId={entryId}
          isEditing={isEditing}
          toggleIsEditing={toggleIsEditing}
          sectionTitle={sectionTitle}
          entriesLength={entriesLength}
          addEntry={addEntry}
          deleteEntry={deleteEntry}
          toggleBulletPoints={toggleBulletPoints}
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
              handleFieldClick={handleFieldClick}
            />
            <Input
              className="entrySubtitle"
              placeholder={subtitlePlaceholder}
              value={entrySubtitle}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
              toggleIsEditing={toggleIsEditing}
              handleFieldClick={handleFieldClick}
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
              handleFieldClick={handleFieldClick}
            />
            <Input
              className="datePeriod"
              placeholder={datePlaceholder}
              value={entryDate}
              onChange={handleChange}
              isEditing={isEditing}
              entryId={entryId}
              toggleIsEditing={toggleIsEditing}
              handleFieldClick={handleFieldClick}
            />
          </div>
        </div>
      )}
      {hasBulletsSection && (
        <ul
          className={
            sectionTitle === "Skills"
              ? "bulletSection skillsSection"
              : "bulletSection"
          }
        >
          {bulletPoints.map((bullet, index) => (
            <BulletPoint
              key={bullet.bulletPointId}
              bulletPointId={bullet.bulletPointId}
              name={`bulletPoint-${index}`}
              placeholder={bulletPlaceholder}
              value={bullet.value}
              sectionTitle={sectionTitle}
              changeBulletPoint={changeBulletPoint}
              isEditing={isEditing}
              entryId={entryId}
              toggleIsEditing={toggleIsEditing}
              handleFieldClick={handleFieldClick}
              addBulletPoint={addBulletPoint}
              deleteBulletPoint={deleteBulletPoint}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
