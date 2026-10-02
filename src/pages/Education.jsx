// Education page: schools, credentials and dates
import { educationList } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section className="section narrow">
      <h1>Education</h1>

      <ol className="timeline">
        {educationList.map((entry) => (
          <li key={entry.school + entry.credential}>
            <p className="timeline-dates">{entry.dates}</p>
            <h2>{entry.credential}</h2>
            <p className="school">{entry.school}</p>
              {entry.details && <p>{entry.details}</p>}
              {entry.image && (
            <img className="timeline-image" src={entry.image} alt={entry.imageAlt} />
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
