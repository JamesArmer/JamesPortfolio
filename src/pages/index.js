import React from "react";
import "../styles/styles.scss";

import Header from "../components/header";
import Hero from "../components/hero";
import HeroBlurb from "../components/heroBlurb";

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroBlurb />
    </div>
  );
};

export default IndexPage;
