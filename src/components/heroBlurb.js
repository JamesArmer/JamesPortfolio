import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const HeroBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(
        relativePath: { eq: "headshot.png" }
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
              lectus, quis fermentum diam hendrerit eget.
            </p>
            <div className="btn-row">
              <Link to="/work" id="blurb">View Projects</Link>
            </div>
          </div>
          <div className="images">
            <div className="middle">
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlurb;
