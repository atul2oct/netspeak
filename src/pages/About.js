import React from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiEye, FiFlag, FiArrowRight, FiCheck } from 'react-icons/fi';
import './About.css';

const timeline = [
  { year: '2025', title: 'Company Founded', desc: 'Netspeak Infra Solutions Pvt Ltd established in Bangalore.' },
  { year: '16+', title: 'Years of Team Expertise', desc: 'Combined experience in IBS, telecom, and network optimization.' },
  { year: '4G-5G', title: 'Future-Ready', desc: 'Specializing in planning and upgrading networks from 4G to 5G.' },
  { year: '48hr', title: 'Resolution Guarantee', desc: 'IBS site escalation response within 48 hours.' },
];

const capabilities = [
  'Building surveys & site assessments',
  'IBS material supply & installation',
  'End-to-end project execution',
  'DAS design & deployment',
  'Optical Fiber Cable maintenance',
  '4G to 5G network transitions',
  'Warehousing & material management',
  'Customized system deployments',
];

function About() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-hero-grid"></div>
          <div className="page-hero-glow"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{color: 'var(--accent)'}}>About Us</span>
          <h1 className="page-hero-title">Powering India's Telecom Future</h1>
          <p className="page-hero-desc">
            Bangalore-based startup with 16+ years of combined expertise in IT, Telecom, and Energy solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section about-content-section">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text">
              <h2 className="section-title">Who We Are</h2>
              <p>
                Founded in 2025, Netspeak Infra Solutions Pvt Ltd is a Bangalore-based startup specializing
                in IT, Telecom, and Energy solutions. We provide comprehensive infrastructure services to
                meet the evolving demands of modern industries.
              </p>
              <p>
                With 16+ years of expertise in In-Building Solutions (IBS), our team has extensive experience
                in building surveys, IBS material supply, installation, and end-to-end project execution.
              </p>
              <p>
                We focus on delivering seamless network connectivity through advanced IBWS and Rooftop
                Antenna Solutions, ensuring enhanced coverage, improved network efficiency, and uninterrupted
                service. Our company is committed to providing a single point of contact for all telecom
                infrastructure needs.
              </p>
            </div>
            <div className="about-capabilities">
              <h3>Our Capabilities</h3>
              <div className="capabilities-list">
                {capabilities.map((cap, i) => (
                  <div key={i} className="capability-item">
                    <FiCheck className="capability-check" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More About */}
      <section className="section about-detail-section">
        <div className="container">
          <div className="about-detail-content">
            <p>
              We specialize in planning and upgrading networks from 4G to 5G with efficient execution
              strategies that minimize downtime and enhance coverage. Our team ensures quick complaint
              resolution, responds to IBS site escalations within 48 hours, and maintains high operational
              efficiency and customer satisfaction.
            </p>
            <p>
              We collaborate with builders, operators, and IP owners to smoothly integrate telecom solutions
              in urban and commercial environments. Our comprehensive services include design, supply,
              installation, maintenance, and end-to-end network activation, catering to businesses of all sizes.
            </p>
            <p>
              We adhere to strict SOPs and quick deployment strategies, ensuring seamless project execution
              with minimal disruption to ongoing operations. With a strong focus on material management, we
              ensure zero wastage while supplying and installing IBS materials as per design specifications.
            </p>
            <p>
              Our expertise extends to O&M for IBS and Optical Fiber Cables, ensuring uninterrupted services.
              We offer dedicated manpower solutions, providing skilled engineers and technicians for maintenance
              and troubleshooting. Our warehousing and material management solutions help telecom operators
              maintain an efficient supply chain and avoid operational delays.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Aim */}
      <section className="section vma-section">
        <div className="container">
          <div className="vma-grid">
            <div className="vma-card vma-aim">
              <div className="vma-icon"><FiTarget size={32} /></div>
              <h3>Our Aim</h3>
              <p>
                To be the leading provider of telecom, IT, and energy infrastructure solutions,
                offering seamless connectivity, efficient network deployment, and end-to-end project
                management for businesses and service providers.
              </p>
            </div>
            <div className="vma-card vma-vision">
              <div className="vma-icon"><FiEye size={32} /></div>
              <h3>Our Vision</h3>
              <p>
                To become the No.1 telecom infrastructure provider by delivering innovative,
                high-quality, and future-ready solutions, ensuring seamless connectivity and
                customer satisfaction.
              </p>
            </div>
            <div className="vma-card vma-mission">
              <div className="vma-icon"><FiFlag size={32} /></div>
              <h3>Our Mission</h3>
              <p>
                To supply top-tier professional services with a commitment to excellence, reliability,
                and cutting-edge technology, enabling businesses to grow, innovate, and stay connected
                in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="timeline-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title light">Key Milestones</h2>
          </div>
          <div className="timeline-grid">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'var(--gray-100)'}}>
        <div className="container">
          <div className="about-cta">
            <h2>Want to Work With Us?</h2>
            <p>Discover how our telecom infrastructure solutions can transform your business.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
