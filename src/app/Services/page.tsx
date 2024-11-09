import { FaCode, FaDesktop, FaLayerGroup, FaPalette, FaLightbulb } from 'react-icons/fa';
import React from 'react';

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">_____My Services</h2>
        <h3 className="services-subtitle">What Can I Do</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h4 className="service-heading">Figma and PSD to HTML/CSS Conversion:</h4>
            <p className="service-description">
              I convert Figma/PSD designs into high-quality, pixel-perfect HTML/CSS templates, maintaining design integrity and functionality.
            </p>
          </div>

          <div className="service-card">
            <FaDesktop className="service-icon" />
            <h4 className="service-heading">Front-End Development</h4>
            <p className="service-description">
              Proficient in HTML, CSS, TypeScript, and Tailwind CSS, I build interactive and dynamic web interfaces that engage users.
            </p>
          </div>

          <div className="service-card">
            <FaPalette className="service-icon" />
            <h4 className="service-heading">Web Design:</h4>
            <p className="service-description">
              With a keen eye for design, I craft aesthetically pleasing and user-friendly layouts that enhance the overall user experience.
            </p>
          </div>

          <div className="service-card">
            <FaLayerGroup className="service-icon" />
            <h4 className="service-heading">Cross-Browser Compatibility:</h4>
            <p className="service-description">
              I ensure that your website functions seamlessly across all major browsers, providing a consistent experience for all users.
            </p>
          </div>

          <div className="service-card">
            <FaLightbulb className="service-icon" />
            <h4 className="service-heading">Continuous Learning:</h4>
            <p className="service-description">
              I stay updated with the latest trends and technologies in web development to provide innovative and cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
