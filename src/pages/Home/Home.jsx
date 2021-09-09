import React, { Fragment } from "react";
import Partnerships from "./Partnerships";
import About from "./About";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import PBRToken from "./PBRToken";
// import Team from './Team';
import Roadmap from "./Roadmap";
import SocialLinks from "./SocialLinks";
import Footer from "../../common/Footer";
import Listings from "./Listings";
import Tokenomics from "./Tokenomics";
import ReleaseSchedule from "./ReleaseSchedule";
import Ecosystem from "./Ecosystem";
import Header from "./Header";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <section id="header">
        <Header />
      </section>
      <section id="partnerships">
        <Partnerships />
      </section>
      <section id="ecosystem">
        <Ecosystem />
      </section>
      <hr style={{ color: "#e9e9e9" }} />
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="pbt-token">
        <PBRToken />
      </section>
      <section>
        <Tokenomics />
      </section>
      <section>
        <ReleaseSchedule />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>

      {/* <section id="team">
        <Team />
      </section> */}
      <section id="exchange">
        <Listings />
      </section>
      <section>
        <SocialLinks />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
