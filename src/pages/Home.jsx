// Home page: welcome message, mission statement, and buttons to other pages
import { Link, useLocation } from 'react-router-dom'
import { ownerInfo, missionStatement } from '../data/portfolioData.js'

export default function Home() {
  const { state } = useLocation()
  const submittedName = state?.submittedName

  return (
    <>
      {submittedName && (
        <div className="notice" role="status">
          Thanks, {submittedName}. Your message was captured and I will get back to you soon.
        </div>
      )}

      <section className="hero">
        <svg className="pulse" viewBox="0 0 800 120" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 60h250l25-45 40 90 35-70 25 25h425" pathLength="1" />
        </svg>

        <p className="hero-kicker">Welcome to my portfolio</p>
        <h1>Hi, I'm {ownerInfo.firstName}.</h1>
        <p className="hero-sub">
          I'm 18 years old, ethnically Bengali, and I'm a digital health engineering student at Centennial College, learning to build software for healthcare. In this webpage, you'll discover all about me, my passions, projects and etc.
        </p>

        <div className="button-row">
          <Link className="button primary" to="/about">Meet me</Link>
          <Link className="button" to="/projects">See my projects</Link>
        </div>
      </section>

      <section className="section narrow">
        <h2>My mission</h2>
        <blockquote className="mission">{missionStatement}</blockquote>
      </section>
    </>
  )
}
