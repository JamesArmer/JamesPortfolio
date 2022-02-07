import React from "react";
import "../styles/styles.scss";

import Header from "../components/header";
import Hero from "../components/hero";
import AboutBlurb from "../components/aboutBlurb";

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutBlurb />
    </div>
  );
};

export default IndexPage;
