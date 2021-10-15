import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { CallToAction, MonetizationOn, ShutterSpeed } from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 130,

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
    height: "80vh",
    width: "auto",
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.99), rgba(233, 233, 233, 0.19) ),url("https://png.pngtree.com/thumb_back/fh260/background/20201014/pngtree-abstract-particles-background-with-connection-concept-vector-illustration-image_416083.jpg")`,
    backgroundSize: "contain",
    [theme.breakpoints.up("sm")]: {
      height: "85vh",
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
    color: theme.palette.pbr.textSecondary,
    width: "auto",
    textAlign: "center",
    fontSize: "52px",

    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",
    padding: "0px 12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  subheading: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
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
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <section>
        {" "}
        <div className={classes.header}>
          <div className={classes.spacing}>
            <div className="d-flex flex-row justify-content-center mt-5">
              {/* <div className={classes.circle} />
              <p className={classes.notice}>PBR Launchpad starting soon.</p> */}
            </div>
            <Pulse>
              <h1 className={classes.heading}>
                Decentralized all-in-one financial
                <br />
                application platform
              </h1>
            </Pulse>
            <p className={classes.subheading}>
              <strong>Powered by </strong>{" "}
              <div className={classes.title} variant="h6" noWrap>
                <img
                  src="https://polkadot.network/assets/img/logo-polkadot.svg?v=c1f8875403"
                  alt="logo"
                  height="40px"
                />
              </div>
            </p>
            <div className="text-center mt-3">
              <a
                href="https://farm.polkabridge.org/"
                style={{ textDecoration: "none", padding: 5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  <ShutterSpeed className={classes.icon} /> Farming
                </Button>
              </a>
              <a
                href="https://stake.polkabridge.org/"
                style={{ textDecoration: "none", padding: 5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  <ShutterSpeed className={classes.icon} /> Staking
                </Button>
              </a>
              <a
                href="https://launchpad.polkabridge.org/"
                style={{ textDecoration: "none", padding: 5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  <MonetizationOn className={classes.icon} /> Launchpad
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
