/* eslint-disable react/prop-types */
import "../styles/ResumeHeader.css";
import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function ResumeHeader({
  modalState,
  openModal,
  closeModal,
  isEditing,
  toggleIsEditing,
  handleFieldClick,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    const { className, value } = e.target;
    if (className === "name") setName(value);
    if (className === "email") setEmail(value);
    if (className === "phone") setPhone(value);
    if (className === "link") setLink(value);
    if (className === "location") setLocation(value);
  };

  const defaultName = "John Smith";
  const defaultEmail = "realjsmith@email.com";
  const defaultPhone = "555-555-5555";
  const defaultLink = "LinkedIn or Portfolio";
  const defaultLocation = "San Juan, PR";

  const [id] = useState(crypto.randomUUID());

  return (
    <header
      id={id}
      onMouseEnter={() => !isEditing && openModal(id)}
      onMouseLeave={() => !isEditing && closeModal()}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          toggleIsEditing(id);
          closeModal();
        }
      }}
    >
      {modalState === id && (
        <Modal
          isHeader={true}
          entryId={id}
          isEditing={isEditing}
          toggleIsEditing={toggleIsEditing}
        />
      )}
      <Input
        type={"text"}
        className={"name"}
        placeholder={defaultName}
        value={name}
        onChange={handleChange}
        isEditing={isEditing}
        entryId={id}
        toggleIsEditing={toggleIsEditing}
        handleFieldClick={handleFieldClick}
      />
      <div className="contactDetails">
        <Input
          type={"email"}
          className={"email"}
          placeholder={defaultEmail}
          value={email}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
          toggleIsEditing={toggleIsEditing}
          handleFieldClick={handleFieldClick}
        />
        <Input
          type={"tel"}
          className={"phone"}
          placeholder={defaultPhone}
          value={phone}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
          toggleIsEditing={toggleIsEditing}
          handleFieldClick={handleFieldClick}
        />
        <Input
          type={"url"}
          className={"link"}
          placeholder={defaultLink}
          value={link}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
          toggleIsEditing={toggleIsEditing}
          handleFieldClick={handleFieldClick}
        />
        <Input
          type={"text"}
          className={"location"}
          placeholder={defaultLocation}
          value={location}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
          toggleIsEditing={toggleIsEditing}
          handleFieldClick={handleFieldClick}
        />
      </div>
    </header>
  );
}
