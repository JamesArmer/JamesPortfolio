import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      azure: file(relativePath: { eq: "azure-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "react-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      android: file(relativePath: { eq: "android-logo.png" }) {
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
        <div className="side-image left">
            <Img fluid={data.android.childImageSharp.fluid} />
          </div>
          <div className="main-text">James Armer</div>
          <div className="main-image">
            <Img fluid={data.azure.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.react.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>
      <div className="fixed-misc">Full Stack Software Developer</div>
    </div>
  );
};

export default Hero;
