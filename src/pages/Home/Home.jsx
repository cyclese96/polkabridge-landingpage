import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Cached } from '@material-ui/icons';
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

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 150,
    height: 500,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  circle: {
    width: 7,
    height: 7,
    padding: 5,
    margin: 6,
    borderRadius: '50%',
    backgroundColor: theme.palette.pbr.primary,
  },
  header: {
    height: '100vh',
    width: 'auto',
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(233, 233, 233, 0.99) ),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl2T6kWLUzalYEALVytfVGJPuyw9eQ_wYHrvHv1r5xQrn8qebMgwudwpZNsQyXrtJM_M&usqp=CAU")`,
    backgroundSize: 'contain',
  },
  notice: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 15,
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    width: 'auto',
    textAlign: 'center',
    fontSize: '52px',
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    margin: '0px 0px 12px',
    padding: '0px 12px',
  },
  subheading: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
    marginTop: 25,
  },
  button: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    marginTop: 15,
    color: '#ffffff',
    padding: '15px 30px 15px 30px',
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
}));

export default function Home() {
  const classes = useStyles();
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
