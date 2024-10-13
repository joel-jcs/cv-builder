export function Resume() {
  return (
    <>
      <header>
        <h1>Your Name</h1>
        <div className="contact-details">
          <span>Email</span>
          <span>Phone</span>
          <span>LinkedIn / Portfolio</span>
        </div>
      </header>
      <main>
        <section>
          <h2 className="sectionTitle">Experience</h2>
          <hr></hr>
          <div className="experienceEntry">
            <div className="entryPrimaryInfo">
              <h3 className="entryTitle">Company Name</h3>
              <h4 className="entrySubtitle">Position Title</h4>
            </div>
            <div className="entryLocationDate">
              <span className="location">Location</span>
              <span className="datePeriod">Date Period</span>
            </div>
          </div>
          <ul>
            <li className="responsibility">
              Highlight your accomplishments, starting with actions/verbs and
              using numbers where possible.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="sectionTitle">Education</h2>
          <hr></hr>
          <div className="educationEntry">
            <div className="entryPrimaryInfo">
              <h3 className="entryTitle">School or University</h3>
              <h4 className="entrySubtitle">Degree and Field</h4>
            </div>
            <div className="entryLocationDate">
              <span className="location">Location</span>
              <span className="datePeriod">Date Period</span>
            </div>
          </div>
        </section>
        <section>
          <h2 className="sectionTitle">Skills</h2>
          <hr></hr>
          <ul>
            <li className="skill">Skill 1</li>
            <li className="skill">Skill 2</li>
            <li className="skill">Skill 3</li>
          </ul>
        </section>
      </main>
    </>
  );
}
