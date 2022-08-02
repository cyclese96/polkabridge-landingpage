import { Button, Card, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useState } from "react";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 160,
    paddingBottom: 100,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "transparent",
    height: "100%",

    // borderBottom: "200px solid green",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: 30,
      paddingBottom: 30,
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
    background: `rgba(224, 7, 125,0.8)`,

    verticalAlign: "baseline",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    margin: 0,
    marginTop: 20,
    color: "white",
    padding: "7px 30px 7px 30px",
    fontWeight: 600,
    fontSize: 14,
    textTransform: "none",
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
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      lineHeight: 1.2,
      fontSize: "32px",
    },
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
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
      width: "100%",
      textAlign: "center",
      fontSize: 14,
    },
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
    width: 280,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,
    backgroundColor: "rgba(22, 31, 48, 0.6)",
    border: "6px solid #2F3A4D",

    boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  card: {
    width: 900,
    minHeight: 120,
    height: "100%",
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid #616161",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    paddingBottom: 15,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "90%",
      padding: 5,
      height: "100%",
    },
  },
  analyticsHeading: {
    color: "#bdbdbd",
    textAlign: "left",

    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      paddingTop: 10,
      textAlign: "center",
    },
  },
  analyticsPara: {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: 700,
    textAlign: "left",

    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
    },
  },
  cardWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 120,

    [theme.breakpoints.down("xs")]: {
      height: "100%",

      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  videoCard: {
    width: "100%",
    height: "100%",
    maxWidth: 900,
    minHeight: 400,
    [theme.breakpoints.down("md")]: {
      minHeight: 180,
    },
  },
  videoFrame: {
    width: "100%",
    height: "100%",
    maxWidth: 900,
    minHeight: 506,
    borderRadius: 30,
    [theme.breakpoints.down("md")]: {
      minHeight: 200,
      height: "100%",
      padding: 10,
    },
  },
}));

export default function Features() {
  const classes = useStyles();
  const [x, setX] = useState(window.innerWidth > 400 ? 0 : 0);

  const goRight = () => {
    x === -100 * ([1, 2, 3, 4, 5, 6, 7].length - 3) ? setX(0) : setX(x - 100);
  };
  const goLeft = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6, 7].length - 3) ? setX(x + 100) : setX(0);
  };

  const goRightMob = () => {
    x === -100 * ([1, 2, 3, 4, 5, 6, 7].length - 1) ? setX(0) : setX(x - 100);
  };
  const goLeftMob = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6, 7].length - 3) ? setX(x + 100) : setX(0);
  };
  return (
    <div style={{}}>
      <div
        style={{
          backgroundColor: "transaparent",
          minHeight: window.innerWidth > 400 ? 60 : 120,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: -60,
        }}
      >
        <Card className={classes.card}>
          <div className={classes.cardWrapper}>
            <div>
              <div className={classes.analyticsHeading}>
                Total Value Locked($)
              </div>
              <div className={classes.analyticsPara}>{">"}$10,000,000</div>
            </div>
            <div
              style={{ borderLeft: "1px solid #616161", height: "60%" }}
            ></div>
            <div>
              <div className={classes.analyticsHeading}>Total Volume($)</div>
              <div className={classes.analyticsPara}>$100,000,000</div>
            </div>
            <div
              style={{ borderLeft: "1px solid #616161", height: "60%" }}
            ></div>
            <div>
              <div className={classes.analyticsHeading}>Supported Pairs</div>
              <div className={classes.analyticsPara}>7</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className={classes.videoCard}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nDTgKrdUCFU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={classes.videoFrame}
          ></iframe>
        </div>
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
                All your DeFi needs at one place and many more are coming. Swap,
                Stake, participate and much more.
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
                        <a href="https://swap.polkabridge.org" target="_blank">
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
                        <a
                          href="https://launchpad.polkabridge.org"
                          target="_blank"
                        >
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
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-staking-5112599-4269010.png"
                          height="120px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>INO</h5>
                      <p className={classes.cardValue}>
                        Enroll and participate in hottest NFT projects initial
                        offering with PolkaBridge.
                      </p>
                      <div className="text-center">
                        <a href="http://ino.polkabridge.org/" target="_blank">
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
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/money-sack-4024957-3337577.png"
                          height="120px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>
                        Deflationary Farming
                      </h5>
                      <p className={classes.cardValue}>
                        0.5% of every transaction is used to dirtibute among
                        liquidity providers as a reward and some amount is
                        burnt.
                      </p>
                      <div className="text-center">
                        <a href="https://farm.polkabridge.org" target="_blank">
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
                        <a href="https://stake.polkabridge.org" target="_blank">
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
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-to-dollar-swap-5152761-4312550.png"
                          height="120px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>P2P Exchange</h5>
                      <p className={classes.cardValue}>
                        Trade tokens with your non-custodial wallet with our
                        decentralised P2P Exchange.
                      </p>
                      <div className="text-center">
                        <a>
                          <Button className={classes.buttonOutlined}>
                            Coming soon
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
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/content-management-5617624-4674335.png"
                          height="120px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>Insights</h5>
                      <p className={classes.cardValue}>
                        Learn about crypto and get top buzz around crypto
                        industry at your fingertips.
                      </p>
                      <div className="text-center">
                        <a>
                          <Button className={classes.buttonOutlined}>
                            Coming soon
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
