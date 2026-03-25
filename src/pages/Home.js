import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiWifi, FiRadio, FiTool, FiZap, FiSettings, FiUsers, FiShield, FiCheckCircle } from 'react-icons/fi';
import './Home.css';

const stats = [
  { number: '16+', label: 'Years of Expertise' },
  { number: '48hr', label: 'Issue Resolution' },
  { number: '24/7', label: 'Support Available' },
  { number: '5G', label: 'Ready Solutions' },
];

const services = [
  { icon: <FiWifi />, title: 'In-Building Wireless', desc: 'Seamless indoor connectivity with advanced DAS solutions for commercial buildings, hospitals, and malls.' },
  { icon: <FiRadio />, title: 'Rooftop Antennas', desc: 'Strategic antenna placement for optimal outdoor coverage while preserving city aesthetics.' },
  { icon: <FiTool />, title: 'IBS Material Supply', desc: 'High-quality DAS components, cables, antennas, splitters, and repeaters with zero-wastage installation.' },
  { icon: <FiZap />, title: 'Network Activation', desc: 'End-to-end 4G to 5G network transitions with efficient planning and minimal downtime.' },
  { icon: <FiSettings />, title: 'O&M Services', desc: 'Comprehensive operations & maintenance for IBS and Optical Fiber Cable networks.' },
  { icon: <FiUsers />, title: 'Project Management', desc: 'Turnkey telecom solutions including surveying, designing, installing, and deployment.' },
];

const whyChoose = [
  { icon: <FiShield />, title: 'Single Point of Contact', desc: 'Design, supply, installation, and maintenance — all handled by one team.' },
  { icon: <FiCheckCircle />, title: 'Experienced Team', desc: '16+ years of expertise in IBS, telecom solutions, and network optimization.' },
  { icon: <FiZap />, title: 'Future-Ready Tech', desc: 'Ensuring seamless transition from 4G to 5G networks.' },
  { icon: <FiTool />, title: 'Quick Deployment', desc: 'SOP-based execution with complaint resolution within 48 hours.' },
];

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid-pattern"></div>
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Bangalore-Based Telecom Infrastructure Experts
          </div>
          <h1 className="hero-title">
            Building the <span className="gradient-text">Future</span> of
            <br />Telecom Infrastructure
          </h1>
          <p className="hero-description">
            Comprehensive IT, Telecom, and Energy solutions — from in-building wireless systems
            to end-to-end network activation. Your single point of contact for seamless connectivity.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Services <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Our Core Services</h2>
              <p className="section-subtitle">
                End-to-end telecom infrastructure solutions designed for performance, reliability, and future scalability.
              </p>
            </div>
            <Link to="/services" className="btn btn-dark">
              All Services <FiArrowUpRight />
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" className="service-link">
                  Learn more <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-visual">
              <div className="about-card about-card-1">
                <div className="about-card-icon"><FiWifi size={28} /></div>
                <h4>4G to 5G</h4>
                <p>Network Upgrades</p>
              </div>
              <div className="about-card about-card-2">
                <div className="about-card-icon"><FiShield size={28} /></div>
                <h4>Zero Wastage</h4>
                <p>Material Management</p>
              </div>
              <div className="about-card about-card-3">
                <div className="about-card-icon"><FiSettings size={28} /></div>
                <h4>End-to-End</h4>
                <p>Project Execution</p>
              </div>
            </div>
            <div className="about-preview-content">
              <span className="section-label">About Us</span>
              <h2 className="section-title">Transforming Connectivity Since Day One</h2>
              <p className="section-subtitle">
                Founded in 2025, Netspeak Infra Solutions is a Bangalore-based startup with a team
                that brings over 16 years of combined expertise in In-Building Solutions, telecom
                infrastructure, and network optimization.
              </p>
              <p className="about-preview-text">
                We collaborate with builders, operators, and IP owners to smoothly integrate
                telecom solutions in urban and commercial environments. From design to deployment,
                we ensure seamless project execution with minimal disruption.
              </p>
              <Link to="/about" className="btn btn-primary" style={{marginTop: '24px'}}>
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <div className="why-header">
            <span className="section-label">Why Us</span>
            <h2 className="section-title light">Why Choose Netspeak?</h2>
            <p className="section-subtitle light">
              We deliver excellence through experience, innovation, and an unwavering commitment to quality.
            </p>
          </div>
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Great Together</h2>
            <p>Get a single point of contact for all your telecom infrastructure needs.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us <FiArrowRight />
              </Link>
              <a href="tel:+918550006665" className="btn btn-outline">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
