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
import ReleaseSchedule from "./ReleaseSchedule";
import Ecosystem from "./Ecosystem";
import Header from "./Header";
import { readCache, addDataIntoCache } from "./../../actions/cacheActions";
import { Dialog, Slide, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DexPopupContent from "../../components/DexPopup";
import Team from "./Team";
import Achievements from "./Achievements";
import RoadmapNew from "./RoadmapNew";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
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
    <div
      style={{
        overflowX: "hidden",
        //     background: `linear-gradient(180deg,
        //   rgba(0, 0, 0, 0.99),
        //   rgba(6, 21, 33, 0.99)
        // ),
        // url("https://png.pngtree.com/thumb_back/fh260/background/20201014/pngtree-abstract-particles-background-with-connection-concept-vector-illustration-image_416083.jpg") no-repeat center center
        //   cover`,
        //     height: "100vh",
        //     width: "100vw",
      }}
    >
      <section id="header">
        <Header />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="ecosystem">
        <Ecosystem />
      </section>
      <section id="achievements">
        <Achievements />
      </section>

      <section>
        <Tokenomics />
      </section>
      {/* <section id="roadmap">
        <Roadmap />
      </section> */}
      <section id="roadmap">
        <RoadmapNew />
      </section>
      <section id="team">
        <Team />
      </section>

      <section id="partnerships">
        <Partnerships />
      </section>
      <section id="exchange">
        <Listings />
      </section>
      <section>
        <SocialLinks />
      </section>

      {/* 
    
      <hr style={{ color: "#e9e9e9" }} />
      <section id="about">
        <About />
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
     
      <section id="exchange">
        <Listings />
      </section>
      
      <Dialog
        className={classes.modal}
        open={claimPopup}
        TransitionComponent={Transition}
        keepMounted={false}
        onClose={() => setClaimPopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DexPopupContent closePopup={() => setClaimPopup(false)} />
      </Dialog>{" "} */}
    </div>
  );
}
