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
                <Link to="/deliver">Deliver</Link>
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
                <Link to={"/categories/tracksuits"}>Tracksuits</Link>
              </li>
              <li>
                <Link to={"/categories/hats"}>Different Hats</Link>
              </li>
              <li>
                <Link to={"/categories/backpack"}>Backpack</Link>
              </li>
              <li>
                <Link to={"/categories/sneakers"}>Sneakers</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>
              1 Esenina
              <br /> Karakol, Kyrgyzstan
            </p>
            <p>
            <a
            className="Tel"
            target="_blank"
            rel="noreferrer"
            href="tel:  +996 707 763 896"
          >
            +996 707 763 896
          </a>
              <br /> Email:    <a
            className="Tel"
            target="_blank"
            rel="noreferrer"
            href="mailto:emilovbaku530@gmail.com"
          >
            emilovbaku530@gmail.com
          </a>
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
