// Main navigation bar with the logo and a link to each of the six pages
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { navigationLinks } from '../data/portfolioData.js'

export default function NavBar() {
  // Controls whether the menu is open on small screens
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={() => setMenuIsOpen(false)}>
          <Logo />
          <span>Nuha</span>
        </Link>

        <button
          className="menu-button"
          aria-expanded={menuIsOpen}
          aria-controls="nav-links"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? 'Close' : 'Menu'}
        </button>

        <ul id="nav-links" className={menuIsOpen ? 'nav-links open' : 'nav-links'}>
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
