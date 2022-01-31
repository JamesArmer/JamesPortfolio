import React from "react";
import { Link } from "gatsby";
import "../styles/styles.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">James Armer</Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
