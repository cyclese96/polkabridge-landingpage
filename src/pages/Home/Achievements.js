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
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: "2%",
    paddingRight: "2%",
    backgroundColor: "black",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
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
    minHeight: "90vh",
    width: "auto",

    background: `linear-gradient(180deg,
      rgba(0, 0, 0, 0.99),
      rgba(6, 21, 33, 0.60)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/background/20201014/pngtree-abstract-particles-background-with-connection-concept-vector-illustration-image_416083.jpg") no-repeat center center
      fixed`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
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
    color: "white",
    textAlign: "center",
    fontSize: 54,
    fontWeight: 700,
    verticalAlign: "middle",
    wordSpacing: "0px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
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
  featureTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    fontSize: 36,
    color: "white",
    textAlign: "left",
  },
  featurePara: {
    paddingTop: 7,
    fontWeight: 400,
    width: "85%",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "left",
  },

  cardTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.5px",
    margin: 0,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  cardValue: {
    paddingTop: 10,
    fontWeight: 400,
    width: "85%",
    verticalAlign: "baseline",
    letterSpacing: "-0.5px",
    margin: 0,
    fontSize: 14,
    color: "#e5e5e5",
    textAlign: "center",
  },
  featureCardFull: {
    width: 620,
    height: 450,

    // borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // border: "3px solid #bdbdbd",
    // filter: "drop-shadow(0 0 0.5rem #212121)",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  featureCard: {
    width: 200,
    height: 300,

    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // border: "3px solid #bdbdbd",
    filter: "drop-shadow(0 0 0.5rem #212121)",

    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,

    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "7px 40px 7px 40px",
    fontWeight: 600,
    fontSize: 13,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  valueText: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    fontSize: 36,
    color: "#BF1088",
    textAlign: "center",
  },
}));

export default function Achievements() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Pulse>
        <h1 className={classes.heading}>Achievements</h1>
      </Pulse>
      <Pulse>
        <div className="d-flex justify-content-center">
          <p className={classes.para}>
            Since first day of our inception, we have achieved many milestones
          </p>
        </div>
      </Pulse>
      <div className="container d-flex align-items-center justify-content-evenly mt-5">
        <div className="col-md-2">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                150<span style={{ fontSize: 44 }}>X</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>IDO Return</h5>

            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                Experience multichain and cross-chain AMM with lowest fees.
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-2">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                150<span style={{ fontSize: 44 }}>X</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>Launchpad</h5>
            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                Our launchpad projects gives 150x return on IDO price.
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-2">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                32<span style={{ fontSize: 44 }}>+</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>ATH MCap</h5>

            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                We have launched more than 32 projects on multiple chains
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-2">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                $20M<span style={{ fontSize: 44 }}>+</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>TVL</h5>
            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                More than $20M funds are locked into our staking pools.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
