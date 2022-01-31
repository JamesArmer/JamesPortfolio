import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">James Armer</div>
          <div className="main-image">
            <Img fluid={data.icon.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
            <span>Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
