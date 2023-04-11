import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccountBalance,
  ChevronLeft,
  ChevronRight,
  CloudQueue,
  Description,
  GroupWork,
  LocalFlorist,
  SettingsEthernet,
  SwapHoriz,
  Timer,
} from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: "black",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
    },
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 54,
    fontWeight: 700,
    verticalAlign: "middle",
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

  highlight: {
    color: theme.palette.pbr.primary,
  },

  imageContainer: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      width: "100%",
    },
  },
  scroll: {},
  roadmapWrapper: {
    display: "flex",
    width: "100%",
    scrollbarWidth: 0,
    overflowX: "scroll",
  },
  quarterWrapper: {
    width: 250,
  },
  lineMaker: {
    display: "flex",
    justifyContent: "center",
    width: 225,
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      width: 180,
    },
  },
  baseline: {
    display: "flex",
    alignSelf: "center",
    height: 5,
    width: "100%",
    backgroundColor: theme.palette.pbr.primary,
    verticalAlign: "baseline",
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: theme.palette.pbr.primary,
    borderRadius: "50%",
  },
  icon: {
    fontSize: 48,
    color: "#e5e5e5",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
  },
  details: {
    width: "80%",
  },
  title: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
    color: "white",
  },
  quarterText: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    color: theme.palette.pbr.primary,
  },
  list: {
    width: 200,
    paddingLeft: 15,
    fontSize: 14,
    color: "white",
  },
}));
export default function Roadmap(props) {
  const classes = useStyles();
  const [x, setX] = useState(window.innerWidth > 400 ? -400 : -700);

  const goRight = () => {
    x === -100 * ([1, 2, 3, 4, 5, 6, 7, 8].length - 4)
      ? setX(0)
      : setX(x - 100);
  };
  const goLeft = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6, 7, 8].length - 4) ? setX(x + 100) : setX(0);
  };

  const goRightMob = () => {
    x === -100 * [1, 2, 3, 4, 5, 6, 7, 8].length ? setX(0) : setX(x - 100);
  };
  const goLeftMob = () => {
    x === 100 * ([1, 2, 3, 4, 5, 6, 7, 8].length - 1) ? setX(x + 100) : setX(0);
  };

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>Our RoadMap</h6>
        <p className={classes.para}>
          Fundamentally strong and visionary project with strong foundation.
        </p>
      </div>
      <Fade top>
        <div className="mt-5">
          <div className="row g-0 align-items-center ">
            <div className="col-2 col-md-1">
              {" "}
              <button
                className="c--right"
                onClick={window.innerWidth > 900 ? goLeft : goLeftMob}
              >
                <div className="icon-wrapper">
                  <ChevronLeft className={classes.icon} />
                </div>
              </button>
            </div>

            <div className="col-8 col-md-10">
              <div className="slider">
                {[
                  <div className={classes.quarterWrapper}>
                    <div>
                      <Description className={classes.icon} />
                      <h4 className={classes.quarterText}>Q3, 2020</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>Research</h6>

                      <ul className={classes.list}>
                        <li>Research on Defi & Crosschain solution</li>
                        <li>Research on Polkadot ecosystem</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <GroupWork className={classes.icon} />
                      <h4 className={classes.quarterText}>Q4, 2020</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>Team & Tokenomics </h6>

                      <ul className={classes.list}>
                        <li>Team forming & project brainstorming</li>
                        <li>Design tokenomics for PolkaBridge token (PBR)</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <LocalFlorist className={classes.icon} />
                      <h4 className={classes.quarterText}>Q1, 2021</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>Listing & Farming</h6>

                      <ul className={classes.list}>
                        <li>Develop smart contract and web</li>
                        <li>Whitepaper</li>
                        <li>PBR Token IDO</li>
                        <li>Listing PBR on Uniswap</li>
                        <li>Listing PolkaBridge on PolkaProject</li>
                        <li>Deflationary Farming</li>
                        <li>Listing on tier-2 CEXs</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <Timer className={classes.icon} />
                      <h4 className={classes.quarterText}>Q2, 2021</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>Staking & Launchpad</h6>

                      <ul className={classes.list}>
                        <li>Multichain Launchpad </li>
                        <li>Multichain Staking</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <SwapHoriz className={classes.icon} />
                      <h4 className={classes.quarterText}>Q3, 2021</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>AMM</h6>

                      <ul className={classes.list}>
                        <li>
                          Multichain AMM (Ethereum, Binance Smart Chain,
                          Polygon){" "}
                        </li>

                        <li>Expand to Polygon Ecosystem</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <CloudQueue className={classes.icon} />
                      <h4 className={classes.quarterText}>Q4, 2021</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>PolkaDot Integration</h6>

                      <ul className={classes.list}>
                        <li>Listing on tier-1 CEX (Kucoin)</li>
                        <li>Mainnet Multichain AMM</li>
                        <li>
                          Integrate Harmony Blockchain into PolkaBridge DEFI
                          application(AMM, Staking, LaunchPad)
                        </li>
                        <li>Develop testnet on MoonBeam</li>
                        <li>Run PBR to MoonBeam parachain</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <SettingsEthernet className={classes.icon} />
                      <h4 className={classes.quarterText}>Q1, 2022</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>Defi 2.0</h6>

                      <ul className={classes.list}>
                        <li>
                          Integrate more chains into Multichain AMM (BSC,
                          Polygon, MoonBeam...)
                        </li>
                        <li>Launching INO - Initial NFT Offering Platform</li>
                        <li>Defi 2.0 - New area</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <SettingsEthernet className={classes.icon} />
                      <h4 className={classes.quarterText}>Q2-Q3-Q4, 2022</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>
                        Deeper into Multichain Dapps and Top Exchanges Listing
                      </h6>

                      <ul className={classes.list}>
                        <li>Launch new product: <a href="https://p2p.polkabridge.org" target="_blank">Decentralized P2P Exchange</a>. Testnet expected in August, 2022</li>
                        <li>Launch new product: <a href="https://polkabridge.medium.com/polkabridge-insights-platform-an-introduction-2e4bd82238c" target="_blank">PolkaBridge Insights Platform</a> . Testnet expected in September, 2022</li>
                        <li>
                          Integrate more chains into Multichain AMM (BSC,
                          Polygon, MoonBeam...)
                        </li>
                        <li>
                          Integrate more chains into INO platform (BSC, Polygon,
                          MoonBeam...)
                        </li>
                        <li>Top exchange listing (Huobi, Binance...)</li>
                        <li>Metaverse - New Approach</li>
                      </ul>
                    </div>
                  </div>,
                  <div className={classes.quarterWrapper}>
                    <div>
                      <AccountBalance className={classes.icon} />
                      <h4 className={classes.quarterText}>2023</h4>
                    </div>
                    <div className={classes.lineMaker}>
                      <div className={classes.circle}></div>{" "}
                      <div className={classes.baseline}></div>
                    </div>
                    <div className={classes.details}>
                      <h6 className={classes.title}>New Features</h6>

                      <ul className={classes.list}>
                        <li>Lending Platform</li>
                        <li>Cross-chain AMM</li>
                      </ul>
                    </div>
                  </div>,
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="slide"
                      style={{ transform: `translateX(${x}%)` }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-2 col-md-1  ">
              <button
                className="c--right"
                onClick={window.innerWidth > 900 ? goRight : goRightMob}
              >
                <div className="icon-wrapper">
                  <ChevronRight className={classes.icon} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
