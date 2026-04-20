import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner container">
        <div className="footer__col footer__brand">
          <h3 className="footer__company">Roof Junction</h3>
          <p className="footer__tagline">Engineering Excellence, Built to Last.</p>
        </div>

        <div className="footer__col footer__nav">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <div className="footer__contact-items">
            <a href="tel:+919021715847" className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 90217 15847
            </a>
            <a href="mailto:salesroofjunction2026@gmail.com" className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              salesroofjunction2026@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; 2025 Roof Junction Engineering &amp; Structural Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
