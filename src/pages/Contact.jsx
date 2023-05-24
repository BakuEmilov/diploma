import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-info">
        We would love to hear from you! If you have any questions, feedback, or
        inquiries, please feel free to reach out to us.
      </p>
      <div className="contact-details">
        <div className="contact-item">
          {/*  */}
          <span className="contact-text">
            Phone:{" "}
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel:  +996 707 763 896"
            >
              +996 707 763 896
            </a>
          </span>
        </div>
        <div className="contact-item">
          {/*  */}
          <span className="contact-text">
            Email:{" "}
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="mailto:emilovbaku530@gmail.com"
            >
              emilovbaku530@gmail.com
            </a>
          </span>
        </div>
        <div className="contact-item">
          {/*  */}
          <span className="contact-text">
            Address: 1 Esenina, Karakol, Kyrgyzstan
          </span>
        </div>
      </div>
      <h3 className="contact-subheading">Store Hours</h3>
      <p className="contact-hours">
        Our store is open from Monday to Friday, from 9:00 AM to 6:00 PM. Feel
        free to visit us during these hours to explore our latest Nike products.
      </p>
    </div>
  );
};

export default Contact;
