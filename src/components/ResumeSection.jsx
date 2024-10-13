export default function ResumeSection({ title, entries }) {
  console.log(entries[0].bullets[0]);

  return (
    <section className="resumeSection">
      <h2 className="sectionTitle">{title}</h2>
      <hr></hr>
      <div className="entry">
        <div className="entryPrimaryInfo">
          <h3 className="entryTitle"> {entries[0].title}</h3>
          <h4 className="entrySubtitle">{entries[0].subtitle}</h4>
        </div>
        <div className="entryLocationDate">
          <span className="location">{entries[0].location}</span>
          <span className="datePeriod">{entries[0].datePeriod}</span>
        </div>
      </div>
      {/* To-do: turn bullets into components */}
      {entries[0].bullets.length > 0 && (
        <ul>
          {entries[0].bullets.map((bullet) => (
            <li className="bulletPoint" key={bullet.id}>
              {bullet.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
