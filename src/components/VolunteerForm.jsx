import React, { useState } from 'react';

function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', skills: '', availability: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', skills: '', availability: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="volunteer" className="volunteer">
      <div className="container">
        <h2 className="section-title">Become a Volunteer</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Please enter a valid email address"
              />
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone (+91XXXXXXXXXX)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="^\+91[6-9]\d{9}$"
                title="Phone number must start with +91 and be 10 digits long"
              />
            </div>

            {/* Skills Dropdown */}
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <select name="skills" id="skills" value={formData.skills} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="teaching">Teaching</option>
                <option value="medical">Medical</option>
                <option value="construction">Construction</option>
                <option value="it">IT</option>
              </select>
            </div>

            {/* Availability Dropdown */}
            <div className="form-group">
              <label htmlFor="availability">Availability</label>
              <select name="availability" id="availability" value={formData.availability} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Why do you want to volunteer?</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn">Submit</button>
            {submitted && <p className="success-message">Thanks! We'll contact you soon.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;
