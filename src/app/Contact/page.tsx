"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section className="contact-section">
        <div className="contact-text">
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-paragraph">
            We would love to hear from you! Whether you have a question, a
            project proposal, or just want to connect, feel free to reach out.
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              rows={5}
              required
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
          <div className="contact-text">
            <h2 className="contact-heading">Get In Touch</h2>
            <div className="social-icons">
              <a
                href="https://github.com/nidanasar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/nida-shafqet-37452914b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaLinkedinIn size={40} />
              </a>
              <a href="mailto:nidashafqet@gmail.com" className="social-icon-link">
                <AiOutlineMail size={40} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-image-container">
          <Image
            src="/images/card.png"
            alt="Contact Image"
            width={500}
            height={400}
            className="contact-image"
          />
        </div>
      </section>
    </div>
  );
}
