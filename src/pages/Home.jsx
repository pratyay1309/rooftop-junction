import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import './Home.css';

const whyChooseUs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Experienced Team',
    desc: 'Skilled engineers, designers, and technicians with deep industry expertise.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Quality Materials',
    desc: 'IS-standard compliant, high-durability roofing materials for every project.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Timely Delivery',
    desc: 'We ensure your project stays on schedule, every time.',
  },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img src="/bluepatra.jpg" alt="Sheet metal factory" className="hero__bg-img" />
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content container">
          <FadeIn>
            <img src="/roofjunction_logo.png" alt="Roof Junction Logo" className="hero__logo" />
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="hero__headline">
              One-Stop Roofing Solution:<br />
              <span className="hero__headline-accent">Supply to Installation</span>
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="hero__subheadline">
              Roof Junction Engineering &amp; Structural Solutions — your trusted partner for
              roofing, fabrication, and installation.
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <Link to="/contact" className="btn btn-gold hero__cta" id="hero-cta">
              Get Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="section what-we-do" id="what-we-do">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>What We Do</h2>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="what-we-do__content">
              <p>
                We are a comprehensive provider of roofing and structural systems — from material
                supply and engineering design to installation and long-term maintenance. We serve
                residential, commercial, and industrial sectors.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-choose" id="why-choose">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Why Choose Us</h2>
            </div>
          </FadeIn>
          <div className="why-choose__grid">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 150}>
                <div className="card why-choose__card">
                  <div className="icon-circle">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner" id="cta-banner">
        <div className="container">
          <FadeIn>
            <div className="cta-banner__inner">
              <h2>Contact us today for reliable roofing solutions.</h2>
              <Link to="/contact" className="btn btn-gold" id="cta-contact-btn">
                Contact Us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
