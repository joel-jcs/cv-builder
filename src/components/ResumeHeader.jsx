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
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "link") setLink(value);
    if (name === "location") setLocation(value);
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
          entryId={id}
          isEditing={isEditing}
          toggleIsEditing={toggleIsEditing}
        />
      )}
      <Input
        type={"text"}
        name={"name"}
        className={"name"}
        placeholder={defaultName}
        value={name}
        onChange={handleChange}
        isEditing={isEditing}
        entryId={id}
      />
      <div className="contactDetails">
        <Input
          type={"email"}
          name={"email"}
          placeholder={defaultEmail}
          value={email}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
        />
        <Input
          type={"tel"}
          name={"phone"}
          placeholder={defaultPhone}
          value={phone}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
        />
        <Input
          type={"url"}
          name={"link"}
          placeholder={defaultLink}
          value={link}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
        />
        <Input
          type={"text"}
          name={"location"}
          placeholder={defaultLocation}
          value={location}
          onChange={handleChange}
          isEditing={isEditing}
          entryId={id}
        />
      </div>
    </header>
  );
}
