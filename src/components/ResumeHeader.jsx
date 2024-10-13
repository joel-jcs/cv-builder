/* eslint-disable react/prop-types */
export default function ResumeHeader({
  name = "John Smith",
  email = "realjsmith@email.com",
  phone = "555-555-5555",
  link = "Link: LinkedIn or Portfolio",
  location = "San Juan, PR",
}) {
  return (
    <header>
      <input type="text" className="name" placeholder={name} />
      <div className="contactDetails">
        <input type="email" placeholder={email} />
        <span className="bulletDivider">•</span>
        <input type="phone" placeholder={phone} />
        <span className="bulletDivider">•</span>
        <input type="link" placeholder={link} />
        <span className="bulletDivider">•</span>
        <input type="text" placeholder={location} />
      </div>
    </header>
  );
}
