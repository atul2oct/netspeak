import React, { useState } from 'react';
import { FiPhone, FiMapPin, FiMail, FiSend, FiClock } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-hero-grid"></div>
          <div className="page-hero-glow"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{color: 'var(--accent)'}}>Contact Us</span>
          <h1 className="page-hero-title">Let's Build Together</h1>
          <p className="page-hero-desc">
            Reach out for a consultation on your telecom infrastructure needs. We're ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-info-desc">
                Whether you need a complete telecom infrastructure solution or specific services,
                our team is ready to assist you.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FiPhone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+918550006665">+91 8550006665</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4>Office Address</h4>
                    <p>#01, K no 1530, Krishna Gokula Hotel building, 3rd floor, Dr. Shivarama Karantha Nagar, Bangalore North, Bangalore Karnataka - 560077</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FiClock />
                  </div>
                  <div>
                    <h4>Support</h4>
                    <p>24/7 Support & Troubleshooting<br/>Escalation resolution within 48 hours</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FiMail />
                  </div>
                  <div>
                    <h4>Headquarters</h4>
                    <p>Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <FiSend size={40} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Service Interested In</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="ibws">In-Building Wireless Solutions</option>
                      <option value="rooftop">Rooftop Antenna Solutions</option>
                      <option value="ibs">IBS Material Supply & Installation</option>
                      <option value="network">Network Activation & Upgrades</option>
                      <option value="om">Operations & Maintenance</option>
                      <option value="project">Telecom Project Management</option>
                      <option value="manpower">Manpower & Support Services</option>
                      <option value="civil">Civil & Electrical Work</option>
                      <option value="troubleshooting">Troubleshooting & Complaint Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or requirements..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary form-submit">
                    Send Message <FiSend />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <iframe
              title="Netspeak Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.6!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{border: 0, borderRadius: 'var(--radius-lg)'}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
