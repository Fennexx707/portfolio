
import { serviceList } from '../data/portfolioData.js'

export default function Services() {
  return (
    <section className="section">
      <h1>Services</h1>

      <div className="pulse-divider">
        <svg className="pulse" viewBox="0 0 800 120" aria-hidden="true" preserveAspectRatio="none">
        <path d="M0 60h250l25-45 40 90 35-70 25 25h425" pathLength="1" />
        </svg>
      </div>

      <p className="lead">Ways I can help with your next project:</p>

      <div className="service-grid">
        {serviceList.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={service.image} alt={service.imageAlt} width="96" height="96" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
