import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* Home Link */}
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home and About Links */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* Background Color Buttons */}
          <div className="d-flex">
            <button
              className="btn btn-primary mx-1"
              onClick={() => props.handleColorChange("blue")}
            >
              Blue Background
            </button>
            <button
              className="btn btn-success mx-1"
              onClick={() => props.handleColorChange("green")}
            >
              Green Background
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => props.handleColorChange("red")}
            >
              Red Background
            </button>
            <button
              className="btn btn-warning mx-1"
              onClick={() => props.handleColorChange("yellow")}
            >
              Yellow Background
            </button>
            
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{height :'30px',width : '30px' }}></div>
            </div>
          </div>
          {/* Dark Mode Toggle */}
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: props.mode === "light" ? "black" : "white" }}
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
};
