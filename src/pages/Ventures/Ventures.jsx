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
