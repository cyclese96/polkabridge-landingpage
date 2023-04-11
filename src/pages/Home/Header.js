import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Hidden, IconButton } from "@material-ui/core";
import {
  CallToAction,
  Group,
  MonetizationOn,
  ShutterSpeed,
  TrendingUp,
} from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";
import { getPbrStats } from "./../../actions/apiActions";
import Lottie from "lottie-react";
import headerImage from "./../../common/header-lottie.json";

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 130,
    paddingLeft: "5%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      textAlign: "center",
    },
  },
  circle: {
    width: 7,
    height: 7,
    padding: 5,
    margin: 6,
    borderRadius: "50%",
    backgroundColor: theme.palette.pbr.primary,
  },
  header: {
    // minHeight: "95vh",
    minHeight: 500,
    height: "100%",
    width: "auto",
    background: `linear-gradient(180deg,
      rgba(0, 0, 0, 0.99),
      rgba(6, 21, 33, 0.60)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/background/20201014/pngtree-abstract-particles-background-with-connection-concept-vector-illustration-image_416083.jpg") no-repeat center center
      fixed`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: 80,

    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  notice: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
  },
  heading: {
    color: "white",
    width: "auto",
    textAlign: "left",
    fontSize: "52px",
    lineHeight: "70px",
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  para: {
    textAlign: "left",
    width: "80%",
    fontSize: 14,
    fontWeight: 400,
    color: "#bdbdbd",
    marginTop: 25,
  },
  subheading: {
    textAlign: "left",
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    color: "#f9f9f9",
    marginTop: 25,
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "15px 30px 15px 30px",
    fontWeight: 600,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  buttonOutlined: {
    borderRadius: "50px",
    background: `transparent`,
    lineHeight: "24px",
    border: "1px solid #BF1088",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginTop: 15,
    color: "#BF1088",
    padding: "15px 30px 15px 30px",
    fontWeight: 600,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  tagTitle: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    fontSize: 14,
    color: "white",
  },
  tagValue: {
    paddingLeft: 5,
    paddingRight: 10,
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    fontSize: 13,
    color: "#D9047C",
  },
  card: {
    width: 900,
    height: 120,

    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid #616161",
    filter: "drop-shadow(0 0 0.5rem #212121)",

    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  demoImage: {
    maxHeight: "550px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "fit-content",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  let [stats, setStats] = useState({
    usd: 0.0,
    usd_24h_change: 0,
    usd_market_cap: 0,
  });

  useEffect(() => {
    async function asyncFn() {
      let data = await getPbrStats();
      if (data.polkabridge) {
        console.log(data.polkabridge);
        setStats(data.polkabridge);
      }
      callFn();
    }
    asyncFn();
  }, []);
  const callFn = async () => {
    setTimeout(async () => {
      let data = await getPbrStats();
      if (data.polkabridge) {
        console.log(data.polkabridge);
        setStats(data.polkabridge);
      }
      return 0;
    }, 6000);
  };
  return (
    <Fragment>
      <section>
        <div className={classes.header}>
          <div className={classes.spacing}>
            <div className="row">
              <div className="col-md-7">
                <Hidden smDown>
                  {stats && (
                    <div className="d-flex flex-row justify-content-start mt-5 mb-4">
                      {/* <div className={classes.circle} /> */}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436"
                        height="20px"
                        style={{ marginRight: 5 }}
                      />
                      {/* <TrendingUp style={{ color: "#D9047C", marginRight: 5 }} /> */}
                      <div className="d-flex flex-row justify-content-start ">
                        <div className={classes.tagTitle}>Price:</div>
                        <div className={classes.tagValue}>
                          ${stats.usd.toFixed(2)}
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-start ">
                        <div className={classes.tagTitle}>Change:</div>
                        <div className={classes.tagValue}>
                          {parseFloat(stats.usd_24h_change).toFixed(2)}%
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-start ">
                        <div className={classes.tagTitle}>MCap:</div>
                        <div className={classes.tagValue}>
                          {parseFloat(stats.usd_market_cap / 1000000).toFixed(
                            2
                          )}
                          M
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-start ">
                        <div className={classes.tagTitle}>Current Supply:</div>
                        <div className={classes.tagValue}>65M Tokens</div>
                      </div>
                    </div>
                  )}
                </Hidden>

                <Hidden mdUp>
                  {stats && (
                    <div className="d-flex flex-row justify-content-start mt-5 mb-4">
                      {/* <div className={classes.circle} /> */}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436"
                        height="20px"
                        style={{ marginRight: 5 }}
                      />
                      {/* <TrendingUp style={{ color: "#D9047C", marginRight: 5 }} /> */}
                      <div className="d-flex flex-row justify-content-start ">
                        <div className={classes.tagTitle}>Price:</div>
                        <div className={classes.tagValue}>
                          ${stats.usd.toFixed(2)}
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-start ">
                        <div className={classes.tagTitle}>Change:</div>
                        <div className={classes.tagValue}>
                          {parseFloat(stats.usd_24h_change).toFixed(2)}%
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-start ">
                        <div className={classes.tagTitle}>MCap:</div>
                        <div className={classes.tagValue}>
                          {parseFloat(stats.usd_market_cap / 1000000).toFixed(
                            2
                          )}
                          M
                        </div>
                      </div>
                    </div>
                  )}
                </Hidden>
                <Pulse>
                  <h1 className={classes.heading}>
                    Decentralized All-in-one
                    <br />
                    <span style={{}}>Financial Application Platform</span>
                  </h1>
                </Pulse>
                <Pulse>
                  <p className={classes.para}>
                    Staking, Farming, Multi-Chain AMM, INO, Launchpad etc.
                    already launched and many more to come, Stay Tuned!
                  </p>
                </Pulse>
                <p className={classes.subheading}>
                  <strong style={{ fontSize: 14 }}>Powered by </strong>{" "}
                  <div className="mt-2" variant="h6" noWrap>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/polkadot-4897427-4081372.png"
                      alt="logo"
                      height="45px"
                    />
                  </div>
                </p>
                <div className="d-flex ">
                  <a
                    href="https://p2p.polkabridge.org/"
                    style={{ textDecoration: "none", padding: 5 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      <ShutterSpeed className={classes.icon} /> Launch P2P
                    </Button>
                  </a>
                  {/* <a
                    href="https://swap.polkabridge.org/charts"
                    style={{ textDecoration: "none", padding: 5 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buttonOutlined}
                    >
                      <ShutterSpeed
                        className={classes.icon}
                        style={{ color: "#BF1088" }}
                      />{" "}
                      View Analytics
                    </Button>
                  </a> */}
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <Hidden xsDown>
                  <Lottie animationData={headerImage} loop={true} />
                </Hidden>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="row d-flex flex-row"
          style={{
            paddingLeft: "5%",
            paddingRight: "5%",
            backgroundColor: "black",
            height: "250px",
            display: "flex",
            justifyContent: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <div className="col-md-4 d-flex flex-row align-items-center">
            <div>
              <div style={{ color: "#bdbdbd" }}>Vision</div>
              <div style={{ color: "white", fontSize: 28, fontWeight: 700 }}>
                Purpose of PolkaBridge <br />
                for Defi Ecosystem
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-row align-items-center">
            <div className="d-flex flex-row ">
              <IconButton
                style={{
                  color: "white",
                  backgroundColor: "#691ADB",
                  height: "fit-content",
                }}
              >
                <Group />
              </IconButton>
              <div style={{ paddingLeft: 15 }}>
                <div style={{ color: "white", fontSize: 22, fontWeight: 700 }}>
                  All In One DeFi
                </div>
                <div style={{ color: "#bdbdbd" }}>
                  PolkaBridge is aiming to build all DeFi solutions at one
                  place. Which are secure, trustless and easy to use.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-row align-items-center">
            <div className="d-flex flex-row ">
              <IconButton
                style={{
                  color: "white",
                  backgroundColor: "#CB0B82",
                  height: "fit-content",
                }}
              >
                <TrendingUp />
              </IconButton>
              <div style={{ paddingLeft: 15 }}>
                <div style={{ color: "white", fontSize: 22, fontWeight: 700 }}>
                  Bringing 1M DeFi users
                </div>
                <div style={{ color: "#bdbdbd" }}>
                  PolkaBridge's mission is to bring more users to use DeFi and
                  experience Web3 ecosystem with ease.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </Fragment>
  );
}
