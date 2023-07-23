import '../styles/Contact.css';
import React, { useState } from 'react';

import { FaBriefcase, FaUniversity, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import { darken } from 'polished';

const Contact = () => {
  // Define the new color scheme
  const mainColor = '#f06292';
  const lighterColor = darken(0.1, mainColor);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can implement the logic to submit the form to a server or use a service)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h2 className="page-title">CONTACT ME</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <div className="info-item">
          <FaBriefcase className="info-icon" />
          <p>1651 Skyline Drive, Pittsburgh, PA</p>
        </div>
        <div className="info-item">
          <FaUniversity className="info-icon" />
          <p>LinkedIn</p>
        </div>
        <div className="info-item">
          <FaLaptopCode className="info-icon" />
          <p>412-728-5774</p>
        </div>
        <div className="info-item">
          <FaUserGraduate className="info-icon" />
          <p>shishirregmi65@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
