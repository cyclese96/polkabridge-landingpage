import { Button, IconButton, Input, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Twitter,
  Telegram,
  GitHub,
  Email,
  Reddit,
  Instagram,
  YouTube,
} from "@material-ui/icons";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: "rgba(0,0,0,0.4)",
    // backgroundColor: "transparent",
    // display: "flex",
    // justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: "3%",
      paddingRight: "3%",
    },
  },
  socialContainer: {
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "black",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  newsletterCard: {
    width: 800,
    height: "100%",
    padding: 20,
    paddingTop: 30,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // border: "1px solid #454545",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
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
  subheading: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 28,
    height: 28,
    color: "#e4e5ee",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      height: 20,
    },
  },
  iconWrapper: {
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      marginRight: 2,
    },
  },
  subscribeCard: {
    backgroundColor: "#D9047C",
    width: "90%",
    height: "100%",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    borderRadius: 10,
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,

    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginRight: 5,
    color: "#ffffff",
    padding: "7px 30px 7px 30px",
    fontWeight: 600,
    fontSize: 13,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
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
          <div className="col-6 col-md-3  d-flex justify-content-start mt-3">
            <div>
              <a href="https://polkabridge.org">
                <h5 className={classes.link}>Home </h5>
              </a>
              <a href="https://polkabridge.medium.com/" target="_blank">
                <h5 className={classes.link}>Blog</h5>
              </a>

              <a href="mailto:support@polkabridge.org" target="_blank">
                <h5 className={classes.link}>Contact Us</h5>
              </a>

              <a href="https://polkabridge.org/ventures" target="_blank">
                <h5 className={classes.link} style={{ color: "#c80c81" }}>PolkaBridge Ventures</h5>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-start mt-3">
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
              <a href="https://t.me/polkabridge/1221" target="_blank">
                <h5 className={classes.link}>P2P</h5>
              </a>
              <a
                href="https://polkabridge.medium.com/polkabridge-insights-platform-an-introduction-2e4bd82238c"
                target="_blank"
              >
                <h5 className={classes.link}>Insights</h5>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3  d-flex justify-content-start mt-3">
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
                href="https://wallet.polygon.technology/bridge"
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
          <div className="col-6 col-md-3  d-flex justify-content-start mt-3">
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

            </div>
          </div>
        </div>
      </div>
      <div className={classes.socialContainer}>
        <div className="container text-center" style={{ paddingTop: 30 }}>
          <div>
            <img src="./polkabridge.png" alt="logo" height="40px" />
          </div>
          <div className="row flex-row justify-content-center mt-4">
            <div className="col-3 col-md-1 col-sm-3">
              {" "}
              <div className={classes.iconWrapper}>
                <Tooltip title="Twitter" aria-label="add1">
                  <a href="https://twitter.com/realpolkabridge">
                    <IconButton aria-label="Twitter">
                      <Twitter className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-3 col-md-1 col-sm-3">
              <div className={classes.iconWrapper}>
                <Tooltip title="Telegram">
                  <a href="https://t.me/polkabridgegroup">
                    <IconButton aria-label="Telegram">
                      <Telegram className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-3 col-md-1 col-sm-3">
              {" "}
              <div className={classes.iconWrapper}>
                <Tooltip title="Github">
                  <a href="https://github.com/cyclese96">
                    <IconButton aria-label="Github">
                      <GitHub className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-3 col-md-1 col-sm-3">
              {" "}
              <div className={classes.iconWrapper}>
                <Tooltip title="Medium">
                  <a href="https://polkabridge.medium.com/">
                    <IconButton aria-label="Reddit">
                      <img src="./images/medium.png" className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-2 col-md-1 col-sm-3">
              <div className={classes.iconWrapper}>
                <Tooltip title="Reddit">
                  <a href="https://www.reddit.com/r/polkabridge_official/">
                    <IconButton aria-label="Reddit">
                      <Reddit className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-2 col-md-1 col-sm-3">
              <div className={classes.iconWrapper}>
                <Tooltip title="Instagram">
                  <a href="https://www.instagram.com/polkabridgeofficial/">
                    <IconButton aria-label="Reddit">
                      <Instagram className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-2 col-md-1 col-sm-3">
              <div className={classes.iconWrapper}>
                <Tooltip title="Discord">
                  <a href="https://discord.gg/tzemFksyZB">
                    <IconButton aria-label="Discord">
                      <img
                        src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-White-1024x780.png"
                        className={classes.icon}
                        style={{ height: 23 }}
                        alt="discord"
                      />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-2 col-md-1 col-sm-3">
              <div className={classes.iconWrapper}>
                <Tooltip title="Email">
                  <a href="mailto:support@polkabridge.org">
                    <IconButton aria-label="Email">
                      <Email className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="col-2 col-md-1 col-sm-3">
              <div className={classes.iconWrapper}>
                <Tooltip title="Youtube">
                  <a href="https://www.youtube.com/channel/UCQC74p4WK9nsW3Rmxou-IrA">
                    <IconButton aria-label="Email">
                      <YouTube className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
          <p className={classes.para}>
            Copyright 2022{" "}
            <span className={classes.highlight}>PolkaBridge</span>. All Rights
            Reserved.
          </p>
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
