import { Button, Card } from "@material-ui/core";
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
    paddingTop: 130,
    paddingBottom: 130,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "transparent",
    height: "100%",

    // borderBottom: "200px solid green",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  container: {
    marginTop: 0,
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
  title: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "center",
  },
  para: {
    paddingTop: 7,
    fontWeight: 400,

    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },

  cardTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 16,
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

  featurePara: {
    paddingLeft: 5,
    fontWeight: 400,
    width: "90%",
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "left",
  },
  quarterTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  li: {
    color: "#bdbdbd",
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 10,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      fontSize: 12,
    },
  },
  liActive: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 10,
    paddingLeft: 10,
    textAlign: "left",

    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      fontSize: 13,
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  card: {
    padding: 10,
    width: 280,
    height: "fit-content",
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
  cardActive: {
    padding: 10,
    width: 300,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,
    backgroundColor: "#161F30",
    border: "5px solid #bdbdbd",
    boxShadow: "0px 50px 200px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  cardWrapper: {
    width: 280,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
    },
  },
  ActiveCardWrapper: {
    width: 300,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
    },
  },
}));

export default function RoadmapNew() {
  const classes = useStyles();
  const [x, setX] = useState(window.innerWidth > 400 ? -300 : -400);

  const goRight = () => {
    x === -100 * ([1, 2, 3, 4, 5, 6].length - 3) ? setX(0) : setX(x - 100);
  };
  const goLeft = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6].length - 3) ? setX(x + 100) : setX(0);
  };

  const goRightMob = () => {
    x === -100 * [1, 2, 3, 4, 5].length ? setX(0) : setX(x - 100);
  };
  const goLeftMob = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6].length - 3) ? setX(x + 100) : setX(0);
  };

  return (
    <div className={classes.background}>
      <h5 className={classes.title}>Roadmap</h5>
      <p className={classes.para}>
        Fundamentally strong and visionary project with strong foundation.
      </p>
      <div className="container d-flex justify-content-around mt-5">
        <div style={{ height: "500px", display: "flex", alignItems: "center" }}>
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
        </div>

        <div className="sliderNew">
          {[
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q2 - 2021</h5>
              <div
                className="d-flex justify-content-center mt-2 mb-2"
                style={{ color: "#454545" }}
              >
                ------------{" "}
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 20,
                    width: 20,

                    border: "2px solid #f9f9f9",
                  }}
                ></div>
                ------------
              </div>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/chinese-coin-5100911-4256522.png"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>Multichain Beginning </h5>
                <div className="mt-3">
                  <li className={classes.li}>Multichain Launchpad</li>
                  <li className={classes.li}>Multichain Staking</li>
                </div>
              </Card>{" "}
            </div>,
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q3 - 2021</h5>
              <div
                className="d-flex justify-content-center mt-2 mb-2"
                style={{ color: "#454545" }}
              >
                ------------{" "}
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 20,
                    width: 20,

                    border: "2px solid #f9f9f9",
                  }}
                ></div>
                ------------
              </div>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/money-exchange-4846672-4043144.png"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>AMM Launch</h5>
                <div className="mt-3">
                  <li className={classes.li}>
                    Multichain AMM (Ethereum, Binance Smart Chain, Polygon)
                  </li>
                  <li className={classes.li}>Expand to Polygon Ecosystem</li>
                </div>
              </Card>{" "}
            </div>,
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q4 - 2021</h5>
              <div
                className="d-flex justify-content-center mt-2 mb-2"
                style={{ color: "#454545" }}
              >
                ------------{" "}
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 20,
                    width: 20,

                    border: "2px solid #f9f9f9",
                  }}
                ></div>
                ------------
              </div>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/polkadot-dot-crypto-coin-5236490-4377698.png"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>PolkaDot Integration</h5>
                <div className="mt-3">
                  <li className={classes.li}>Listing on tier-1 CEX (Kucoin)</li>
                  <li className={classes.li}>Mainnet Multichain AMM</li>
                  <li className={classes.li}>
                    Integrate Harmony Blockchain into PolkaBridge DEFI
                    application(AMM, Staking, LaunchPad)
                  </li>
                  <li className={classes.li}>Develop testnet on MoonBeam</li>
                  <li className={classes.li}>Run PBR to MoonBeam parachain</li>
                </div>
              </Card>{" "}
            </div>,
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q1 - 2022</h5>
              <div
                className="d-flex justify-content-center mt-2 mb-2"
                style={{ color: "#454545" }}
              >
                ------------{" "}
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 20,
                    width: 20,

                    border: "2px solid #f9f9f9",
                  }}
                ></div>
                ------------
              </div>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/finance-4996087-4159684.png"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>DeFi 2.0</h5>
                <div className="mt-3">
                  <li className={classes.li}>
                    Integrate more chains into Multichain AMM (BSC, Polygon,
                    MoonBeam...)
                  </li>
                  <li className={classes.li}>
                    Launching INO - Initial NFT Offering Platform
                  </li>
                  <li className={classes.li}>Defi 2.0 - New area</li>\
                </div>
              </Card>{" "}
            </div>,
            <div className={classes.ActiveCardWrapper}>
              <h5 className={classes.quarterTitle}>Q2 - 2022</h5>
              <div
                className="d-flex justify-content-center mt-2 mb-2"
                style={{ color: "#454545" }}
              >
                ------------{" "}
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 20,
                    width: 20,

                    border: "2px solid #f9f9f9",
                  }}
                ></div>
                ------------
              </div>
              <Card className={classes.cardActive}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img src="images/multi.png" height="80px" />
                </div>
                <h5 className={classes.cardTitle}>
                  Deeper into Multichain Dapps and Top Exchanges Listing
                </h5>
                <div className="mt-3">
                  <li className={classes.liActive}>P2P Exchange</li>
                  <li className={classes.liActive}>Deflationary Farming</li>
                  <li className={classes.liActive}>Stake and Earn</li>
                  <li className={classes.liActive}>Metaverse approach</li>
                  <li className={classes.liActive}>P2P Exchange</li>
                  <li className={classes.liActive}>
                    Lowest liquidity provider fees.
                  </li>
                </div>
              </Card>{" "}
            </div>,
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q3 - 2022</h5>
              <div
                className="d-flex justify-content-center mt-2 mb-2"
                style={{ color: "#454545" }}
              >
                ------------{" "}
                <div
                  style={{
                    backgroundColor: "#161F30",
                    borderRadius: 50,
                    height: 20,
                    width: 20,

                    border: "2px solid #e5e5e5",
                  }}
                ></div>
                ------------
              </div>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/metaverse-logo-4787843-3986055.png"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>New Features</h5>
                <div className="mt-3">
                  <li className={classes.li}>Lending Platform</li>
                  <li className={classes.li}>Cross-chain AMM</li>
                </div>
              </Card>{" "}
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
        <div style={{ height: "500px", display: "flex", alignItems: "center" }}>
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
      </div>
    </div>
  );
}
