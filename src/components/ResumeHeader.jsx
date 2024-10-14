/* eslint-disable react/prop-types */
import "../styles/ResumeHeader.css";
import { useState } from "react";
import Input from "./Input";

export default function ResumeHeader() {
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

  return (
    <header>
      <Input
        type={"text"}
        name={"name"}
        className={"name"}
        placeholder={defaultName}
        value={name}
        onChange={handleChange}
      />
      <div className="contactDetails">
        <Input
          type={"email"}
          name={"email"}
          placeholder={defaultEmail}
          value={email}
          onChange={handleChange}
        />
        <Input
          type={"tel"}
          name={"phone"}
          placeholder={defaultPhone}
          value={phone}
          onChange={handleChange}
        />
        <Input
          type={"url"}
          name={"link"}
          placeholder={defaultLink}
          value={link}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"location"}
          placeholder={defaultLocation}
          value={location}
          onChange={handleChange}
        />
      </div>
    </header>
  );
}
