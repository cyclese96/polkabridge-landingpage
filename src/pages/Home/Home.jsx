import React, { Fragment } from 'react';
import Partnerships from './Partnerships';
import About from './About';
import Features from './Features';
import HowItWorks from './HowItWorks';
import PBRToken from './PBRToken';
import Team from './Team';
import Roadmap from './Roadmap';
import SocialLinks from './SocialLinks';
import Footer from '../../common/Footer';
import Listings from './Listings';
import Tokenomics from './Tokenomics';
import ReleaseSchedule from './ReleaseSchedule';
import Header from './Header';

export default function Home() {
  return (
    <Fragment>
      <section>
        <Header />
      </section>
      <section>
        <Partnerships />
      </section>
      <hr style={{ color: '#e9e9e9' }} />
      <section>
        <About />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <PBRToken />
      </section>
      <section>
        <Tokenomics />
      </section>
      <section>
        <ReleaseSchedule />
      </section>

      <section>
        <Roadmap />
      </section>

      <section>
        <Team />
      </section>
      <section>
        <Listings />
      </section>
      <section>
        <SocialLinks />
      </section>
      <section>
        <Footer />
      </section>
    </Fragment>
  );
}
