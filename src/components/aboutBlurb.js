import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      appScreenshot: file(
        relativePath: { eq: "LiftCalculator/lift-calculator-google-play.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeScreenshot: file(
        relativePath: { eq: "LiftCalculator/home-screenshot.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      percentagesScreenshot: file(
        relativePath: { eq: "LiftCalculator/percentages-screenshot.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
              urna lorem. Praesent aliquam nisl non velit consectetur gravida eu
              ut orci. Donec lacinia orci tellus, id vehicula justo hendrerit
              nec. Phasellus vitae molestie lacus. Aliquam ultrices justo ac
              viverra viverra. Nunc mollis et risus quis interdum. Curabitur
              condimentum vehicula placerat. Donec tempus viverra massa nec
              laoreet. Suspendisse sodales risus vitae lectus facilisis, vel
              porttitor ligula sollicitudin. Etiam ex nisi, venenatis ut
              scelerisque eget, feugiat non massa. Mauris malesuada mattis enim,
              ut pulvinar dolor pellentesque sed. Proin aliquet facilisis
              lectus, quis fermentum diam hendrerit eget. Quisque eu elit purus.
              Fusce eu tempus neque. Phasellus interdum nunc a purus cursus
              dictum. Maecenas ultrices dui id ornare ultricies.
            </p>
            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="bottom-right">
              <Img fluid={data.homeScreenshot.childImageSharp.fluid} />
            </div>
            <div className="top-middle">
              <Img fluid={data.appScreenshot.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.percentagesScreenshot.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlurb;
