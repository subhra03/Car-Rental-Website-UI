import React, { useState } from "react";
import { FiUser, FiMail, FiMessageCircle, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container contact-page">
      <h2 className="text-center mb-4" data-aos="fade-down">
        Contact Us
      </h2>
      <div className="row g-4">
        <div className="col-md-6" data-aos="fade-up">
          <div className="contact-card">
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thank you for contacting us! We will get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold d-flex align-items-center gap-2">
                  <FiUser /> Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold d-flex align-items-center gap-2">
                  <FiMail /> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold d-flex align-items-center gap-2">
                  <FiMessageCircle /> Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-warning text-dark fw-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="contact-card h-100 d-flex flex-column">
            <h5 className="mb-3 d-flex align-items-center gap-2">
              <FiMapPin /> Our Contact Details
            </h5>
            <div className="contact-detail">
              <FiMapPin />
              <div>
                <strong>Address</strong>
                123 Main Street, Cityname, State, PIN - 123456
              </div>
            </div>
            <div className="contact-detail">
              <FiPhone />
              <div>
                <strong>Phone</strong>
                <a href="tel:+918521690791" className="text-decoration-none text-dark">
                  +91 85216 90791
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <FiMail />
              <div>
                <strong>Email</strong>
                <a href="mailto:info@ridex.com" className="text-decoration-none text-dark">
                  info@ridex.com
                </a>
              </div>
            </div>

            <div className="contact-map mt-auto">
              <iframe
                title="RideX Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902315757755!2d90.39322441543715!3d26.158353583457344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59e6db4a07e1%3A0x6e7b0c02f72e6f39!2sGuwahati!5e0!3m2!1sen!2sin!4v1695456600000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
