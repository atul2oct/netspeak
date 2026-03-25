import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-cta-section">
            <div>
              <h2>Ready to Transform Your Telecom Infrastructure?</h2>
              <p>Let's build something exceptional together.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Get Started <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <div className="footer-brand">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 6 L18 30 M12 10 L12 30 M24 10 L24 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M12 10 L18 6 L24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span>Netspeak</span>
              </div>
              <p>Bangalore-based startup specializing in IT, Telecom, and Energy solutions with 16+ years of combined expertise.</p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <Link to="/services">In-Building Wireless</Link>
              <Link to="/services">Rooftop Antennas</Link>
              <Link to="/services">Network Activation</Link>
              <Link to="/services">O&M Services</Link>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <a href="tel:+918550006665" className="footer-contact-item">
                <FiPhone size={16} />
                +91 8550006665
              </a>
              <div className="footer-contact-item">
                <FiMapPin size={16} />
                <span>#01, K no 1530, Krishna Gokula Hotel building, 3rd floor, Dr. Shivarama Karantha Nagar, Bangalore - 560077</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Netspeak Infra Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
