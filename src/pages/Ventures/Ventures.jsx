import React, { useEffect, useState } from "react";
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
import ReleaseSchedule from "./UpcomingProduct";
import Ecosystem from "./Who";
import Header from "./Header";
import { readCache, addDataIntoCache } from "../../actions/cacheActions";
import { Dialog, Slide, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DexPopupContent from "../../components/DexPopup";
import Team from "./Team";
import Achievements from "./Achievements";
import RoadmapNew from "./RoadmapNew";
import UpcomingProduct from "./UpcomingProduct";
import Who from "./Who";
import VCPartners from "./VCPartners";
import Portfolio from "./Portfolio";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  background: {
    overflowX: "hidden",
    background: `linear-gradient(
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.71)
    ),
    url("images/bg.webp")
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
    <div className={classes.background}>
      <section id="header">
        <Header />
      </section>

      <section id="ecosystem">
        <Who />
      </section>

      <section id="partnerships">
        <Partnerships />
      </section>
      <section id="partnerships">
        <VCPartners />
      </section>
      <section id="partnerships">
        <Portfolio />
      </section>
      <section id="partnerships">
        <About />
      </section>
      <section>
        <SocialLinks />
      </section>
    </div>
  );
}
