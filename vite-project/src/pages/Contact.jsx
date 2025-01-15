import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Importing envelope icon from react-icons

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out to us via the form below or
          email us directly.
        </p>
      </div>

      <div className="contact-info">
        <div className="contact-card">
          <h3>Contact Information</h3>
          <p>
            <FaEnvelope /> support@wobb.com
          </p>
        </div>
      </div>

      {/* Optionally, you can include a contact form */}
      <div className="contact-form">
        <h3>Or reach out using the form below:</h3>
        <form>
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea
            placeholder="Your Message"
            className="form-textarea"></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
