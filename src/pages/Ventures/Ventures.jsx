import React, { useEffect, useState } from "react";
// import Team from './Team';
import Roadmap from "./Roadmap";
import SocialLinks from "./SocialLinks";
import Header from "./Header";
import { readCache, addDataIntoCache } from "../../actions/cacheActions";
import { Dialog, Slide, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DexPopupContent from "../../components/DexPopup";
import Who from "./Who";
import Portfolio from "./Portfolio";
import GetInTouch from "./GetInTouch";
import AppbarVentures from "../../common/AppbarVentures";
import Partnerships from "../Home/Partnerships";
import About from "./About";
import TechPartners from "../Home/TechPartners";
import { Helmet } from "react-helmet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  background: {
    overflowX: "hidden",
    background: `linear-gradient(
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0.01)
    ),
    url("BG.jpg")
      no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
    // background: `linear-gradient(rgba(0, 0, 0, 0.95),rgba(0, 0, 0, 0.51)),url("images/bg.webp") no-repeat center center fixed`,
    // height: "100vh 100vw",
    // [theme.breakpoints.down("sm")]: {},
  },
}));

export default function Ventures() {
  const classes = useStyles();

  const [claimPopup, setClaimPopup] = useState(false);

  useEffect(() => {
    async function asyncFn() {
      let popupDisplayTime = await readCache();

      //Wait for Next 24 hours for popup to appear
      let nextPopupTime = popupDisplayTime + 86400000;
      let currentTime = parseInt(Date.now());

      //If next popup is less than current time means enable popup
      if (nextPopupTime <= currentTime) {
        setClaimPopup(true);
        addDataIntoCache();
      }
    }
    asyncFn();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PolkaBridge Ventures - Venture Capital Fund Brings Richness To The PolkaBridge Ecosystem | Support GameFi, NFT,  Defi, Web3, Infrastructure, Protocol, Fintech startup</title>
        <meta
          name="description"
          content="PolkaBridge Ventures, a firm of PolkaBridge | PolkaBridge Investment Capital| At PolkaBridge Ventures, we specialize  in “driving Ideas towards implementation”, using our expertise and support in every aspect of establishing your project, from Finance and  advisory to post-launch Marketing and Development."
        />
         <meta
      name="keywords"
      content="PolkaBridge Ventures,  PolkaBridge Capital, PolkaBrige Venture, PolkaBridge Portfolio, PolkaBridge Investment"
    />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="PolkaBridge Ventures - Venture Capital Fund Brings Richness To The PolkaBridge Ecosystem| Founded in 2022, PolkaBridge Ventures is a corporate VC firm of PolkaBridge, a decentralized all-in-one DeFi Application Platform. The firm seeks to Invest, Incubate and Accelerate early stage projects operating in Cryptocurrency and Blockchain Sectors." />
        <meta
      property="og:description"
      content="PolkaBridge Ventures, a firm of PolkaBridge | PolkaBridge Investment Capital| At PolkaBridge Ventures, we specialize  in “driving Ideas towards implementation”, using our expertise and support in every aspect of establishing your project, from Finance and  advisory to post-launch Marketing and Development."
    />
       <meta name="google-site-verification" content="sWNp3334UB2Xeb4keFPeDuEjA95qh178HYCP9RChhRM" />
       <meta property="og:url" content="https://polkabridge.org/ventures" />
    <meta property="og:site_name" content="PolkaBridge" />
    <meta property="og:image" content="https://polkabridge.org/images/venturefull.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:type" content="image/png" />

    <meta property="og:image:width" content="900" />
    <meta property="og:image:height" content="900" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content="PolkaBridge Ventures, a firm of PolkaBridge | PolkaBridge Investment Capital| At PolkaBridge Ventures, we specialize  in “driving Ideas towards implementation”, using our expertise and support in every aspect of establishing your project, from Finance and advisory to post-launch Marketing and Development." />
    <meta name="twitter:title" content="PolkaBridge Ventures - Venture Capital Fund Brings Richness To The PolkaBridge Ecosystem | Support GameFi, NFT,  Defi, Web3, Infrastructure, Protocol, Fintech startup" />
    <meta name="robots" content="noodp,index,follow" />

       
        <link rel="canonical" href="http://polkabridge.org/ventures" />
      </Helmet>
      <div className={classes.background}>
        <AppbarVentures />
        <section id="header">
          <Header />
        </section>

        <section id="ecosystem">
          <Who />
        </section>

        <section id="partners">
          <Partnerships />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <GetInTouch />

        <section>
          <SocialLinks />
        </section>
      </div>
    </div>
  );
}
