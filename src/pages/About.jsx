// About Me page: legal name, photo, short bio, and resume link
import { ownerInfo, experienceList } from '../data/portfolioData.js'

export default function About() {
  return (
    <section className="section">
      <h1>About me</h1>

      <div className="pulse-divider">
        <svg className="pulse" viewBox="0 0 800 120" aria-hidden="true" preserveAspectRatio="none">
        <path d="M0 60h250l25-45 40 90 35-70 25 25h425" pathLength="1" />
        </svg>
      </div>

      <div className="about-layout">
        <img
          className="portrait"
          src="/images/picture.png"
          alt={`Portrait of ${ownerInfo.legalName}`}
          width="280"
          height="320"
        />

        <div>
          <h2 className="legal-name">{ownerInfo.legalName}</h2>
          <p>
            I am currently enrolled at Centennial College as a Digital Health Engineering student. I enjoy organizing cluttered data to create neat databases, dashboards, and even websites.
          </p>
          <p>
            During my studies in the field of technology, I gained experience as a cashier and a cook that helped me learn to be cool in stressful situations and to work effectively in a group. Besides, I have taught computers to elderly women, which made me understand the value of patience and clearness of language when designing something.
          </p>

          <a className="button primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View my resume (PDF)
          </a>
        </div>
      </div>

      <h2>Work and volunteer experience:</h2>
      <ul className="plain-list">
        {experienceList.map((item) => (
          <li key={item.role}>
            <strong>{item.role}.</strong> {item.summary}
          </li>
        ))}
      </ul>
    </section>
  )
}
