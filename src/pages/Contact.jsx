import React from 'react';


const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-info">
        We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us.
      </p>
      <div className="contact-details">
        <div className="contact-item">
          
          <span className="contact-text">Phone: +1 (123) 456-7890</span>
        </div>
        <div className="contact-item">
          <span className="contact-text">Email: info@nikeshop.com</span>
        </div>
        <div className="contact-item">
      
          <span className="contact-text">Address: 123 Nike Street, City, Country</span>
        </div>
      </div>
      <h3 className="contact-subheading">Store Hours</h3>
      <p className="contact-hours">
        Our store is open from Monday to Friday, from 9:00 AM to 6:00 PM. Feel free to visit us during these hours to explore our latest Nike products.
      </p>
    </div>
  );
};

export default Contact;