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
import { getPbrStats } from "../../actions/apiActions";
import Lottie from "lottie-react";
import headerImage from "../../common/header-lottie.json";

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 130,
    paddingLeft: "5%",
    background: `linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    url("images/venture_back.png")
      no-repeat top center`,
    backgroundSize: "cover",
    minHeight: "700px",
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
    textAlign: "center",
    fontSize: "52px",
    lineHeight: "70px",
    fontWeight: 300,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",
    fontFamily: "Fira Sans",
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
            <Pulse>
              <h1 className={classes.heading}>
                Venture Capital Fund Brings Richness To
                <br />
                The
                <strong style={{ color: "#E0077D", fontWeight: 600 }}>
                  {" "}
                  PolkaBridge
                </strong>{" "}
                Ecosystem
              </h1>
            </Pulse>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
