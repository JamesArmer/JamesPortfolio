import React from "react";
import "../styles/styles.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import HeroBlurb from "../components/heroBlurb";

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroBlurb />
      <Footer />
    </div>
  );
};

export default IndexPage;
