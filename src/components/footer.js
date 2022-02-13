import React from "react";
import { Link } from "gatsby";
import "../styles/styles.scss";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="inner-footer">
          <div className="copyright">
            <p>© 2022 James Armer. All rights reserved.</p>
          </div>
          <div className="socials">
            <Link href="mailto:james.armer5@gmail.com">
                james.armer5@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
