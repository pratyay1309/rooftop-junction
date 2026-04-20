import FadeIn from '../components/FadeIn';
import './Services.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Roofing Installation',
    desc: 'Professional installation of metal roofing, cladding, and sheet systems for residential, commercial, and industrial structures. Our team ensures precision fit and weatherproof results.',
    benefits: ['Weatherproof', 'Precision Fit', 'Fast Turnaround'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Custom Sheet Metal Fabrication',
    desc: 'Bespoke sheet metal components fabricated to your exact specifications using advanced machinery. Ideal for non-standard roofing profiles and custom architectural requirements.',
    benefits: ['Made-to-Order', 'Tight Tolerances', 'Durable Finishes'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="18" rx="1" />
        <rect x="14" y="3" width="7" height="18" rx="1" />
        <line x1="6.5" y1="3" x2="6.5" y2="21" />
        <line x1="17.5" y1="3" x2="17.5" y2="21" />
      </svg>
    ),
    title: 'Structural Solutions',
    desc: 'Design and supply of structural steel frameworks, purlins, girts, and support systems. We ensure structural integrity aligned with IS standards for every build.',
    benefits: ['IS Compliant', 'Load-Bearing', 'Long-Lasting'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Repair & Maintenance',
    desc: 'Scheduled and emergency repair services for existing roofing and structural systems. We restore performance and extend the lifecycle of your current installations.',
    benefits: ['Quick Response', 'Cost-Effective', 'Lifecycle Extension'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    title: 'Consultation & Site Inspection',
    desc: 'On-site assessment and technical consultation to evaluate roofing needs, recommend solutions, and plan project execution. Get expert advice before you commit.',
    benefits: ['Expert Advice', 'Site-Specific', 'No-Obligation'],
  },
];

export default function Services() {
  return (
    <div className="page-enter services-page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>Our Services</h1>
            <p className="page-hero__sub">
              Comprehensive roofing and structural solutions tailored to your project.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section" id="services-grid">
        <div className="container">
          <div className="services__grid">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 120}>
                <div className="card services__card">
                  <div className="icon-circle">{svc.icon}</div>
                  <div className="services__card-content">
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                    <div className="services__badges">
                      {svc.benefits.map((b) => (
                        <span key={b} className="services__badge">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
