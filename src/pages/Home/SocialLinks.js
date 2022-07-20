import { Button, IconButton, Input, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: "rgba(0,0,0,0.4)",
    // backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: "3%",
      paddingRight: "3%",
    },
  },
  // newsletterCard: {
  //   // width: 800,
  //   width: "100%",
  //   height: "100%",
  //   padding: 20,
  //   paddingTop: 30,
  //   borderRadius: 30,
  //   backgroundColor: "rgba(0, 0, 0, 0.3)",
  //   // border: "1px solid #454545",
  //   filter: "drop-shadow(0 0 0.5rem #212121)",
  //   boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
  //   paddingBottom: 15,
  //   [theme.breakpoints.down("sm")]: {
  //     paddingLeft: 0,
  //     paddingRight: 0,
  //     width: "100%",
  //     height: "100%",
  //   },
  // },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  link: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 14,
    color: "white",
    textAlign: "left",
    marginBottom: 10,
    cursor: "pointer",
    // borderLeft: "1px solid rgba(212,4,126,0.5)",
    paddingLeft: 10,
  },
}));
export default function SocialLinks() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-6 col-md-3  d-flex justify-content-start">
            <div>
              <a href="https://polkabridge.org">
                <h5 className={classes.link}>Home </h5>
              </a>
              <a href="https://polkabridge.medium.com/" target="_blank">
                <h5 className={classes.link}>Blog</h5>
              </a>
              <a href="https://t.me/polkabridge/1221" target="_blank">
                <h5 className={classes.link}>P2P</h5>
              </a>
              <a
                href="https://polkabridge.medium.com/polkabridge-insights-platform-an-introduction-2e4bd82238c"
                target="_blank"
              >
                <h5 className={classes.link}>Insights</h5>
              </a>
              <a href="mailto:support@polkabridge.org" target="_blank">
                <h5 className={classes.link}>Contact Us</h5>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-start">
            <div>
              <a href="https://farm.polkabridge.org" target="_blank">
                <h5 className={classes.link}>Farming</h5>
              </a>
              <a href="https://stake.polkabridge.org" target="_blank">
                <h5 className={classes.link}>Staking</h5>
              </a>
              <a href="https://launchpad.polkabridge.org" target="_blank">
                <h5 className={classes.link}>Launchpad</h5>
              </a>
              <a href="https://ino.polkabridge.org" target="_blank">
                <h5 className={classes.link}>INO</h5>
              </a>
              <a href="https://swap.polkabridge.org" target="_blank">
                <h5 className={classes.link}>Swap</h5>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3  d-flex justify-content-start">
            <div>
              <a
                href="https://etherscan.io/token/0x298d492e8c1d909d3f63bc4a36c66c64acb3d695"
                target="_blank"
              >
                <h5 className={classes.link}>Ethereum Contract</h5>
              </a>
              <a
                href="https://bscscan.com/token/0x1d1cb8997570e73949930c01fe5796c88d7336c6"
                target="_blank"
              >
                <h5 className={classes.link}>BSC Contract</h5>
              </a>
              <a
                href="https://polygonscan.com/token/0x0d6ae2a429df13e44a07cd2969e085e4833f64a0"
                target="_blank"
              >
                <h5 className={classes.link}>Polygon Contract</h5>
              </a>
              <a
                href="https://wallet-dev.polygon.technology/bridge/"
                target="_blank"
              >
                <h5 className={classes.link}>Polygon Bridge</h5>
              </a>
              <a
                href="https://cbridge.celer.network/#/transfer"
                target="_blank"
              >
                <h5 className={classes.link}>BSC Bridge</h5>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3  d-flex justify-content-start">
            <div>
              <a
                href="https://polkabridge.org/docs/whitepaper.pdf"
                target="_blank"
              >
                <h5 className={classes.link}>Whitepaper</h5>
              </a>

              <a
                href="https://docs.google.com/forms/u/0/d/1ceBZIL8xDNBJWYzZ4j11lhU9MMke8usrNgnPEoSIMf0/viewform?edit_requested=true"
                target="_blank"
              >
                <h5 className={classes.link}>Apply for IDO</h5>
              </a>

              <Link
                activeClass="active"
                to="team"
                smooth={true}
                offset={0}
                duration={500}
                delay={0}
              >
                <h5 className={classes.link}>Team & Partners</h5>
              </Link>
              <a href="https://polkawar.com" target="_blank">
                <h5 className={classes.link} style={{ color: "#D4047E" }}>
                  PolkaWar
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={classes.newsletterCard}>
        <div className="text-center">
          <h6 className={classes.heading}>Get in touch Now!</h6>
        </div>
        <div className="d-flex justify-content-center">
          <div className={classes.subscribeCard}>
            <p className={classes.subheading}>Need more updates?</p>
            <div className="px-5 py-3">
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 45,
                  paddingLeft: 10,
                }}
              >
                {" "}
                <Input
                  disableUnderline={true}
                  placeholder="Type your email here"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    height: 45,
                    paddingLeft: 10,
                  }}
                  fullWidth
                />
                <Button className={classes.button}>Subscribe</Button>
              </div>
            </div>
            <p className={classes.para}>
              We will send you development updates right into your inbox!
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
