import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
