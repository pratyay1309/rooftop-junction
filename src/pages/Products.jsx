import FadeIn from '../components/FadeIn';
import './Products.css';

const products = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="3" y1="14" x2="21" y2="14" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    title: 'Roofing & Cladding Systems',
    desc: 'High-tensile strength systems designed to withstand harsh environments while offering a sleek appearance.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Sandwich PUF Panels',
    desc: 'Excellent thermal insulation and structural integrity, perfect for storages and sheds.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Polycarbonate Roofing',
    desc: 'Lightweight and durable roofing solutions that allow natural light penetration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <line x1="6" y1="8" x2="6" y2="16" />
        <line x1="18" y1="8" x2="18" y2="16" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="18" x2="16" y2="18" />
      </svg>
    ),
    title: 'Structural Steel Framework',
    desc: 'Robust and precision-engineered steel frameworks providing a solid foundation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="7" x2="21" y2="7" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="17" x2="21" y2="17" />
        <line x1="5" y1="4" x2="5" y2="7" />
        <line x1="19" y1="4" x2="19" y2="7" />
        <line x1="5" y1="17" x2="5" y2="20" />
        <line x1="19" y1="17" x2="19" y2="20" />
      </svg>
    ),
    title: 'Purlins & Girts',
    desc: 'High-quality Z and C purlins ensuring long-lasting support for roofing and cladding assemblies.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" />
        <path d="M12 2c2 2.5 3 5.5 3 10" />
        <path d="M12 2c-2 2.5-3 5.5-3 10s1 7.5 3 10" />
        <path d="M2 12h10" />
        <path d="M22 4l-4 4m0-4l4 4" />
      </svg>
    ),
    title: 'Turbo Ventilators',
    desc: 'Wind-driven ventilators for effective extraction of hot air, ensuring a cooler environment.',
  },
];

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <circle cx="12" cy="2" r="1" />
        <path d="M8 8a4 4 0 0 1 8 0" />
        <path d="M12 17v5" />
        <path d="M4 17c4 0 4-4 8-4s4 4 8 4" />
      </svg>
    ),
    title: 'End-to-End Solutions',
    desc: 'From supply to installation, we handle every stage of your roofing project.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: 'IS Standards Compliance',
    desc: 'All products conform to Indian Standards for quality and structural safety.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'High Durability',
    desc: 'Engineered to last — resistant to weather, corrosion, and structural stress.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Cost-Efficient Systems',
    desc: 'Optimised material use and precision fabrication reduce overall project costs.',
  },
];

export default function Products() {
  return (
    <div className="page-enter products-page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>Our Products</h1>
            <p className="page-hero__sub">
              High-quality roofing and structural products engineered for performance and durability.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section" id="products-grid">
        <div className="container">
          <div className="products__grid">
            {products.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="card products__card">
                  <div className="icon-circle">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section highlights-section" id="product-highlights">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Why Our Products Stand Out</h2>
            </div>
          </FadeIn>
          <div className="highlights__grid">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="card highlights__card">
                  <div className="icon-circle">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
