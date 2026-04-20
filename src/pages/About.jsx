import FadeIn from '../components/FadeIn';
import './About.css';

const stats = [
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>), label: 'Location', value: 'Pune, Maharashtra' },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>), label: 'Sectors Served', value: 'Residential | Commercial | Industrial' },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><polyline points="12 17 18 11 12 5" /></svg>), label: 'Approach', value: 'Design → Fabrication → Installation → Maintenance' },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>), label: 'Standards', value: 'IS Compliant' },
];

export default function About() {
  return (
    <div className="page-enter about-page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>About Us</h1>
            <p className="page-hero__sub">Your trusted partner for comprehensive roofing and structural solutions.</p>
          </FadeIn>
        </div>
      </section>
      <section className="section" id="about-content">
        <div className="container">
          <div className="about__layout">
            <FadeIn>
              <div className="about__text">
                <p>Roof Junction Engineering &amp; Structural Solutions is a comprehensive, one-stop provider of roofing and structural systems, delivering end-to-end solutions from material supply and engineering design to installation and long-term maintenance. With a strong emphasis on precision, durability, and performance, the company serves residential, commercial, and industrial sectors, offering solutions tailored to diverse project requirements.</p>
                <p>The company specialises in high-quality roofing and structural products, including colour-coated metal roofing and cladding systems, sandwich PUF panels, polycarbonate roofing, structural decking, purlins and girts, and a wide range of steel sections. By integrating advanced materials with modern engineering practices, Roof Junction ensures optimal structural integrity, thermal efficiency, and long-term reliability in every project.</p>
                <p>Backed by a team of experienced engineers, designers, and skilled technicians, Roof Junction adopts a fully integrated approach — covering design, material optimisation, precision fabrication, and standardised installation. Every project is executed in strict compliance with industry standards and safety protocols, ensuring high-quality workmanship and consistent performance.</p>
                <p>With a commitment to innovation, cost efficiency, and customer satisfaction, Roof Junction Engineering &amp; Structural Solutions continues to deliver high-performance, future-ready roofing systems that enhance durability, reduce lifecycle costs, and support sustainable infrastructure development.</p>
              </div>
            </FadeIn>
            <div className="about__stats">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 120}>
                  <div className="card about__stat-card">
                    <div className="about__stat-icon">{stat.icon}</div>
                    <div className="about__stat-info">
                      <span className="about__stat-label">{stat.label}</span>
                      <span className="about__stat-value">{stat.value}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
