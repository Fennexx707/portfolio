
import { ownerInfo } from '../data/portfolioData.js'


const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {currentYear} {ownerInfo.legalName}. Built with React.
      </p>
    </footer>
  )
}
