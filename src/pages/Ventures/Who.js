import { Button, Card, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountTree, ChevronLeft, ChevronRight } from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";
import CustomButton from "../../common/CustomButton";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingBottom: 50,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "transparent",
    height: "100%",
    // borderBottom: "200px solid green",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  },
  featureTitle: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "center",
    fontFamily: "Fira Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      textAlign: "center",
      lineHeight: 1.2,
    },
  },

  para: {
    fontFamily: "Fira Sans",
    textAlign: "center",
    width: "70%",
    fontSize: 16,
    fontWeight: 400,
    color: "#e5e5e5",
    letterSpacing: "-0.2px",
  },

  container: { paddingTop: 50, paddingBottom: 50 },
}));

export default function Who() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h5 className={classes.featureTitle}>WHO ARE WE?</h5>
        <div className="d-flex justify-content-center my-3">
          <p className={classes.para}>
            Founded in 2022, PolkaBridge Ventures is a corporate VC firm of
            PolkaBridge, a decentralised all-in-one DeFi Application Platform.
            The firm seeks to Invest, Incubate & Accelerate early stage projects
            operating in Cryptocurrency & Blockchain Sectors.
          </p>
        </div>
      </div>
      <div className={classes.container}>
        <h5 className={classes.featureTitle}>WHAT WE DO?</h5>
        <div className="d-flex justify-content-center my-3">
          <p className={classes.para}>
            At PolkaBridge Ventures, we specialise in “driving Ideas towards
            implementation”, using our expertise & support in every aspect of
            establishing your project, from Finance & Advisory to post-launch
            Marketing & Development. <br />
            <div style={{ marginTop: 20 }}>
              Here are some of the Exclusive Services we provide:-
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
