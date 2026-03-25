import React from 'react';
import { Link } from 'react-router-dom';
import { FiWifi, FiRadio, FiPackage, FiZap, FiSettings, FiClipboard, FiUsers, FiTool, FiAlertCircle, FiArrowRight, FiCheck } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    id: 'ibws',
    icon: <FiWifi />,
    title: 'In-Building Wireless Solutions (IBWS)',
    desc: 'Our In-Building Wireless Solutions are designed to improve indoor mobile network coverage, ensuring seamless connectivity across commercial buildings, corporate offices, hospitals, malls, and high-rise apartments.',
    features: [
      { title: 'Customized System Deployment', desc: 'Design and deploy Distributed Antenna Systems (DAS) and advanced solutions tailored to building architecture.' },
      { title: 'Seamless Connectivity', desc: 'Enhancing network coverage and performance for 4G, LTE, and 5G technologies.' },
      { title: 'Zero Interference', desc: 'Solutions optimized for minimal signal loss and maximum network efficiency.' },
      { title: 'End-to-end Management', desc: 'From site surveys to design, installation, and ongoing maintenance.' },
    ],
    highlights: ['GSM, CDMA & 3G coverage', 'Active DAS with RF-over-Fiber', 'Active, hybrid, or passive DAS', 'Single point of contact'],
    color: '#0056b3',
  },
  {
    id: 'rooftop',
    icon: <FiRadio />,
    title: 'Rooftop Antenna Solutions',
    desc: 'Our Rooftop Antenna Solutions enhance outdoor wireless coverage, ensuring reliable and high-speed connectivity for multiple service providers.',
    features: [
      { title: 'Expert Antenna Placement', desc: 'Strategic positioning of antennas for optimal signal strength and coverage.' },
      { title: 'City Aesthetics Preservation', desc: 'Solutions designed to blend seamlessly with urban landscapes.' },
      { title: 'Quick Deployment', desc: 'Standard Operating Procedures (SOPs) for fast and efficient installation.' },
      { title: 'Complete Troubleshooting', desc: 'Ongoing monitoring and swift troubleshooting to maintain peak performance.' },
    ],
    highlights: ['Value for MSPs & property owners', 'Design & optimization expertise', 'KPI maintenance assistance', 'Best-suited location selection'],
    color: '#0077b6',
  },
  {
    id: 'ibs-material',
    icon: <FiPackage />,
    title: 'IBS Material Supply & Installation',
    desc: 'We specialize in supplying and installing high-quality IBS materials, ensuring reliable infrastructure for telecom networks.',
    features: [
      { title: 'High-Quality Material Supply', desc: 'DAS components, cables, antennas, splitters, repeaters, and power supply units.' },
      { title: 'Design-Based Installation', desc: 'Ensuring zero wastage by following detailed infrastructure designs.' },
      { title: 'Seamless Integration', desc: 'Close collaboration with builders, operators, and IP owners for streamlined installation.' },
    ],
    highlights: ['Premium DAS components', 'Zero-wastage approach', 'Detailed design compliance', 'Multi-stakeholder coordination'],
    color: '#00b4d8',
  },
  {
    id: 'network',
    icon: <FiZap />,
    title: 'End-to-End Network Activation & Upgrades',
    desc: 'We handle everything from order processing to network activation, ensuring smooth 4G and 5G transitions with efficient planning and execution.',
    features: [
      { title: 'Upgrading Networks from 4G to 5G', desc: 'Future-proofing businesses with cutting-edge connectivity solutions.' },
      { title: 'Efficient Planning & Deployment', desc: 'Strategically designing network transitions to minimize downtime.' },
      { title: 'End-to-End Execution', desc: 'Coordination with civil, electrical, and supplier teams for smooth project completion.' },
    ],
    highlights: ['4G to 5G transitions', 'Minimal downtime strategy', 'Cross-team coordination', 'Future-proof solutions'],
    color: '#f59e0b',
  },
  {
    id: 'om',
    icon: <FiSettings />,
    title: 'Operations & Maintenance (O&M)',
    desc: 'Comprehensive O&M services for IBS and Optical Fiber Cable networks to ensure smooth functioning of in-building network systems.',
    features: [
      { title: 'Regular Inspections & Maintenance', desc: 'Periodic checks to prevent network failures and disruptions.' },
      { title: '24/7 Support & Troubleshooting', desc: 'Fast response to technical issues to maintain high uptime.' },
      { title: 'Optimized Performance', desc: 'Ensuring highest efficiency levels for both IBS and OFC networks.' },
    ],
    highlights: ['Preventive maintenance', 'Round-the-clock support', 'High uptime guarantee', 'IBS & OFC expertise'],
    color: '#8b5cf6',
  },
  {
    id: 'project',
    icon: <FiClipboard />,
    title: 'Telecom Project Management & Deployment',
    desc: 'Turnkey telecom infrastructure solutions, including surveying, designing, installing, and maintaining telecom projects.',
    features: [
      { title: 'IBS Site Surveys & Report Preparation', desc: 'In-depth building assessments for customized network solutions.' },
      { title: 'Comprehensive Project Execution', desc: 'Material management, manpower allocation, and site deployment.' },
      { title: 'Quick Complaint Resolution', desc: 'Resolving escalations within 48 hours to maintain service continuity.' },
    ],
    highlights: ['Detailed site surveys', 'Resource optimization', '48-hour escalation response', 'End-to-end management'],
    color: '#ec4899',
  },
  {
    id: 'manpower',
    icon: <FiUsers />,
    title: 'Manpower & Support Services',
    desc: 'We provide skilled professionals for telecom infrastructure maintenance, ensuring efficient and smooth operations.',
    features: [
      { title: 'Expert Engineers & Technicians', desc: 'Specialized teams for installation, troubleshooting, and maintenance.' },
      { title: 'Material & Warehouse Management', desc: 'Efficient inventory management for smooth supply chain operations.' },
      { title: 'Dedicated Transport Services', desc: 'On-time material delivery and logistics support.' },
    ],
    highlights: ['Skilled workforce', 'Inventory management', 'Logistics support', 'Supply chain efficiency'],
    color: '#14b8a6',
  },
  {
    id: 'civil',
    icon: <FiTool />,
    title: 'Civil & Electrical Work',
    desc: 'All necessary civil and electrical work for IBS, rooftop antennas, and network installation projects.',
    features: [
      { title: 'Building Infrastructure Modifications', desc: 'Civil work support for antenna mounting, cabling, and network equipment.' },
      { title: 'Power Management', desc: 'Safe and efficient electrical solutions for uninterrupted network functionality.' },
      { title: 'End-to-end Execution', desc: 'Managing all aspects of civil and electrical project planning and maintenance.' },
    ],
    highlights: ['Antenna mounting support', 'Cabling infrastructure', 'Power solutions', 'Full project lifecycle'],
    color: '#f97316',
  },
  {
    id: 'troubleshooting',
    icon: <FiAlertCircle />,
    title: 'Dedicated Troubleshooting & Complaint Management',
    desc: 'We ensure quick response and resolution for all telecom network issues with proactive maintenance and 24/7 support.',
    features: [
      { title: '24/7 Support Team', desc: 'Handling escalations within 48 hours for uninterrupted service.' },
      { title: 'Network Downtime Reduction', desc: 'Rapid issue identification and troubleshooting.' },
      { title: 'Proactive Maintenance', desc: 'Preventing failures before they impact services.' },
    ],
    highlights: ['24/7 availability', '48-hour resolution', 'Proactive approach', 'Minimal downtime'],
    color: '#ef4444',
  },
];

function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-hero-grid"></div>
          <div className="page-hero-glow"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{color: 'var(--accent)'}}>Services & Products</span>
          <h1 className="page-hero-title">Comprehensive Telecom Solutions</h1>
          <p className="page-hero-desc">
            From in-building wireless to end-to-end network activation — everything your telecom infrastructure needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section services-detail-section">
        <div className="container">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className={`service-detail ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-detail-main">
                <div className="service-detail-icon" style={{background: `${service.color}15`, color: service.color}}>
                  {service.icon}
                </div>
                <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p className="service-detail-desc">{service.desc}</p>
                <div className="service-features">
                  {service.features.map((feat, j) => (
                    <div key={j} className="service-feature">
                      <div className="feature-dot" style={{background: service.color}}></div>
                      <div>
                        <h4>{feat.title}</h4>
                        <p>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-detail-side">
                <div className="service-highlights" style={{borderColor: `${service.color}30`}}>
                  <h4>Key Highlights</h4>
                  {service.highlights.map((h, j) => (
                    <div key={j} className="highlight-item">
                      <FiCheck style={{color: service.color}} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta">
            <h2>Need a Custom Solution?</h2>
            <p>Our team is ready to design and deploy the perfect telecom infrastructure for your needs.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Team <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
