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
    width: "60%",
    fontSize: 17,
    fontWeight: 400,
    color: "#e5e5e5",
    letterSpacing: "-0.2px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: 18,
    },
  },

  container: { paddingTop: 50, paddingBottom: 50 },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h5 className={classes.featureTitle}>ABOUT POLKABRIDGE</h5>
        <div className="d-flex justify-content-center my-3">
          <p className={classes.para}>
            PolkaBridge is a decentralized all-in-one financial application
            platform. The PolkaBridge ecosystem includes Multichain &
            Cross-Chain AMM, Farming, Staking, Lending, Launchpad, P2P Exchange,
            INO NFT, and more. All products will be developed with Polkadot in
            the centre.
          </p>
        </div>
      </div>
    </div>
  );
}
