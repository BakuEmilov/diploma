import "./Logo.css";
import logo from "../../assets/nike-logo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
    </div>
  );
}