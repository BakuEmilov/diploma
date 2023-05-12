import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Site Map</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link to="/services/web-design">Web Design</Link>
              </li>
              <li>
                <Link to="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/seo">SEO</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>
              123 Main St
              <br /> Anytown, USA 12345
            </p>
            <p>
              Phone: +996 707 763 896
              <br /> Email: emilovbaku530@gmail.com
            </p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
