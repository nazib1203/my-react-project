import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>123 Basti Ki Pathshala</p>
            <p>Email: contact@Basti Ki Pathshala.org</p>
            <p>Phone: +91987654321</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Our Programs</h3>
            <ul>
              <li><a href="#">Education</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Community Development</a></li>
            </ul>
          </div>
        </div>
       <div className="copyright">
  <p>© {new Date().getFullYear()} - Basti Ki Pathshala Foundation. All rights reserved.</p>
</div>
      </div>
    </footer>
  );
}

export default Footer;
