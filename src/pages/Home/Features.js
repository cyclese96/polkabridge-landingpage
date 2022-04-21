import { Button, Card, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccountTree,
  ChevronLeft,
  ChevronRight,
  CompareArrows,
  HowToVote,
  LocalFlorist,
  Receipt,
  ShutterSpeed,
} from "@material-ui/icons";
import { useState } from "react";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 160,
    paddingBottom: 100,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "black",
    height: "100%",

    // borderBottom: "200px solid green",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  container: {
    marginTop: 0,
  },

  para: {
    textAlign: "center",
    width: "70%",
    fontSize: 14,
    fontWeight: 400,
    color: "#e5e5e5",
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
    borderRadius: 10,
    background: `transparent`,
    border: "1px solid #E0077D",
    verticalAlign: "baseline",
    margin: 0,
    marginTop: 20,
    color: "#E0077D",
    padding: "7px 30px 7px 30px",
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
  featureTitle: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "left",
  },
  featurePara: {
    paddingTop: 7,
    fontWeight: 400,
    width: "90%",
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "left",
  },

  cardTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  cardValue: {
    paddingTop: 10,
    fontWeight: 400,
    paddingLeft: "5%",
    paddingRight: "5%",
    verticalAlign: "baseline",

    margin: 0,
    fontSize: 13,
    color: "white",
    textAlign: "center",
  },
  featureCardFull: {
    width: 400,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,
    backgroundColor: "#161F30",
    border: "2px solid #2F3A4D",
    boxShadow: "0px 50px 200px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
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
}));

export default function Features() {
  const classes = useStyles();
  const [x, setX] = useState(window.innerWidth > 400 ? 0 : 0);

  const goRight = () => {
    x === -100 * ([1, 2, 3].length - 3) ? setX(0) : setX(x - 100);
  };
  const goLeft = () => {
    x === 100 * ([1, 2, 3].length - 3) ? setX(x + 100) : setX(0);
  };

  const goRightMob = () => {
    x === -100 * [1, 2, 3].length ? setX(0) : setX(x - 100);
  };
  const goLeftMob = () => {
    x === 100 * ([1, 2, 3].length - 3) ? setX(x + 100) : setX(0);
  };
  return (
    <div style={{}}>
      <div
        style={{
          backgroundColor: "transaparent",
          height: 60,
          display: "flex",
          justifyContent: "center",
          marginTop: -60,
        }}
      >
        <Hidden smDown>
          <Card className={classes.card}>
            <div className="d-flex justify-content-evenly align-items-center h-100">
              <div>
                <div style={{ color: "#bdbdbd" }}>Total Value Locked($)</div>
                <div style={{ color: "white", fontSize: 36, fontWeight: 700 }}>
                  $21,45,324
                </div>
              </div>
              <div
                style={{ borderLeft: "1px solid #616161", height: "60%" }}
              ></div>
              <div>
                <div style={{ color: "#bdbdbd" }}>Total Volume($)</div>
                <div style={{ color: "white", fontSize: 36, fontWeight: 700 }}>
                  $168,99,324
                </div>
              </div>
              <div
                style={{ borderLeft: "1px solid #616161", height: "60%" }}
              ></div>
              <div>
                <div style={{ color: "#bdbdbd" }}>Supported Pairs</div>
                <div style={{ color: "white", fontSize: 36, fontWeight: 700 }}>
                  32
                </div>
              </div>
            </div>
          </Card>
        </Hidden>
      </div>
      <div className={classes.background}>
        <div className={classes.container}>
          <div className="container d-md-flex align-items-center justify-content-evenly mt-5">
            <div className="col-md-3">
              <h5 className={classes.featureTitle}>
                Our <br />
                Products
              </h5>
              <p className={classes.featurePara}>
                All your DeFi needs at one place and many more are coming.{" "}
                <br />
                Swap, Stake, participate and much more.
              </p>
              <Hidden smDown>
                {" "}
                <div className="mt-5">
                  <ChevronLeft
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goLeft : goLeftMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                  <ChevronRight
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goRight : goRightMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                </div>
              </Hidden>
            </div>
            <div className="col-md-9 ">
              <div className="sliderFeature">
                {[
                  <div className="slideFeature">
                    <Card className={classes.featureCardFull}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 200 }}
                      >
                        <img src="images/multi.png" height="120px" />
                      </div>
                      <h5 className={classes.cardTitle}>Multichain AMM</h5>
                      <p className={classes.cardValue}>
                        Experience multichain and cross-chain AMM with lowest
                        fees ever and trade with more 100+ token pairs.
                      </p>
                      <div className="text-center">
                        <a href="https://swap.polkabridge.org">
                          <Button className={classes.buttonOutlined}>
                            Visit Now
                          </Button>
                        </a>
                      </div>
                    </Card>
                  </div>,
                  <div className="slideFeature">
                    <Card className={classes.featureCardFull}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 200 }}
                      >
                        <img src="images/launchpad.png" height="120px" />
                      </div>
                      <h5 className={classes.cardTitle}>Launchpad</h5>
                      <p className={classes.cardValue}>
                        Particiate in initial dex offering of fundamentally
                        strong projects selected by PolkaBridge team.
                      </p>
                      <div className="text-center">
                        <a href="https://launchpad.polkabridge.org">
                          <Button className={classes.buttonOutlined}>
                            Visit Now
                          </Button>
                        </a>
                      </div>
                    </Card>
                  </div>,
                  <div className="slideFeature">
                    <Card className={classes.featureCardFull}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 200 }}
                      >
                        <img src="images/staking.png" height="120px" />
                      </div>
                      <h5 className={classes.cardTitle}>Staking</h5>
                      <p className={classes.cardValue}>
                        Don't just hold tokens, participate in staking and earn
                        more rewards with PolkaBridge.
                      </p>
                      <div className="text-center">
                        <a href="https://stake.polkabridge.org">
                          <Button className={classes.buttonOutlined}>
                            Visit Now
                          </Button>
                        </a>
                      </div>
                    </Card>
                  </div>,
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="slideNew"
                      style={{ transform: `translateX(${x}%)` }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <Hidden mdUp>
                {" "}
                <div className="mt-5">
                  <ChevronLeft
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goLeft : goLeftMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                  <ChevronRight
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goRight : goRightMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                </div>
              </Hidden>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
