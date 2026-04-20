import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [toast, setToast] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Enquiry from Website');
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:salesroofjunction2026@gmail.com?subject=${subject}&body=${body}`;
    setToast(true);
    setTimeout(() => setToast(false), 3000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="page-enter contact-page">
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>Get In Touch</h1>
            <p className="page-hero__sub">Contact us for end-to-end roofing solutions and specialised structural steel works.</p>
          </FadeIn>
        </div>
      </section>
      <section className="section" id="contact-content">
        <div className="container">
          <div className="contact__layout">
            <FadeIn>
              <div className="contact__details">
                <div className="contact__detail-card card">
                  <h3>Contact Information</h3>
                  <div className="contact__item">
                    <div className="contact__item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
                    <div><span className="contact__item-label">Proprietor</span><span className="contact__item-value">R R Yesade</span></div>
                  </div>
                  <div className="contact__item">
                    <div className="contact__item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                    <div><span className="contact__item-label">Phone</span><a href="tel:+919021715847" className="contact__item-value contact__item-link">+91 90217 15847</a></div>
                  </div>
                  <div className="contact__item">
                    <div className="contact__item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
                    <div><span className="contact__item-label">Email</span><a href="mailto:salesroofjunction2026@gmail.com" className="contact__item-value contact__item-link">salesroofjunction2026@gmail.com</a></div>
                  </div>
                  <div className="contact__item">
                    <div className="contact__item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                    <div><span className="contact__item-label">Address</span><span className="contact__item-value">Milkat No. 0524 Canal Road, Khadak Vasla Road,<br />Pune, Maharashtra – 411023</span></div>
                  </div>
                </div>
                <div className="contact__map-placeholder" id="map-placeholder">REPLACE WITH GOOGLE MAPS EMBED</div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="contact__form-wrapper card">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="contact__form" id="contact-form">
                  <div className="contact__field"><label htmlFor="name">Name *</label><input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required /></div>
                  <div className="contact__field"><label htmlFor="phone">Phone *</label><input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required /></div>
                  <div className="contact__field"><label htmlFor="message">Message *</label><textarea id="message" name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell us about your project requirements..." required></textarea></div>
                  <button type="submit" className="btn btn-gold contact__submit" id="submit-btn">Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {toast && <div className="toast" id="success-toast">✓ Message ready to send! Your email client should open shortly.</div>}
    </div>
  );
}
