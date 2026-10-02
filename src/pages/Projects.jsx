// Projects page: one card per project with an image, my role and the outcome
import { projectList } from '../data/portfolioData.js'

export default function Projects() {
  return (
    <section className="section">
      <h1>Projects</h1>

      <div className="pulse-divider">
        <svg className="pulse" viewBox="0 0 800 120" aria-hidden="true" preserveAspectRatio="none">
        <path d="M0 60h250l25-45 40 90 35-70 25 25h425" pathLength="1" />
        </svg>
      </div>

      <p className="lead">A few things I've built while studying:</p>

      <div className="project-grid">
        {projectList.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.imageAlt} width="480" height="300" />
            <div className="project-body">
              <h2>{project.title}</h2>
              <p className="tools">{project.tools.join(', ')}</p>
              <p><strong>My role:</strong> {project.role}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
