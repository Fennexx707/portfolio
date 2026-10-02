// Contact page: contact details panel plus a message form.
// The form captures what the visitor types, then redirects to the Home page.
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ownerInfo } from '../data/portfolioData.js'

const emptyForm = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  email: '',
  message: '',
}

export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(emptyForm)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Contact form submitted:', formData)
    navigate('/', { state: { submittedName: formData.firstName } })
  }

  return (
    <section className="section">
      <h1>Contact me</h1>

      <div className="pulse-divider">
        <svg className="pulse" viewBox="0 0 800 120" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 60h250l25-45 40 90 35-70 25 25h425" pathLength="1" />
        </svg>
      </div>

      <div className="contact-layout">
        <aside className="contact-panel">
          <h2>Get in touch</h2>
          <dl>
            <dt>Email</dt>
            <dd><a href={`mailto:${ownerInfo.email}`}>{ownerInfo.email}</a></dd>
            <dt>Phone</dt>
            <dd>{ownerInfo.phone}</dd>
            <dt>Location</dt>
            <dd>{ownerInfo.location}</dd>
            <dt>GitHub</dt>
            <dd><a href={ownerInfo.github} target="_blank" rel="noopener noreferrer">{ownerInfo.github.replace('https://', '')}</a></dd>
            <dt>LinkedIn</dt>
            <dd><a href={ownerInfo.linkedin} target="_blank" rel="noopener noreferrer">{ownerInfo.linkedin.replace('https://www.', '')}</a></dd>
          </dl>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              First name
              <input name="firstName" value={formData.firstName} onChange={handleChange} required autoComplete="given-name" />
            </label>
            <label>
              Last name
              <input name="lastName" value={formData.lastName} onChange={handleChange} required autoComplete="family-name" />
            </label>
          </div>

          <label>
            Contact number
            <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} autoComplete="tel" />
          </label>

          <label>
            Email address
            <input type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>

          <button className="button primary" type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}
