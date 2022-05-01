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
    paddingTop: 130,
    paddingBottom: 130,
    paddingLeft: "2%",
    paddingRight: "2%",
    backgroundColor: "transparent",
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
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      textAlign: "center",
      lineHeight: 1.2,
    },
  },
  featurePara: {
    paddingTop: 7,
    fontWeight: 400,
    width: "85%",
    verticalAlign: "baseline",

    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      textAlign: "center",
      fontSize: 14,
    },
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
    height: "100%",
    paddingTop: 10,
    paddingBottom: 30,
    borderRadius: 30,
    backgroundColor: "rgba(22, 31, 48, 0.9)",

    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    // border: "3px solid #bdbdbd",
    filter: "drop-shadow(0 0 0.2rem #151515)",

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
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  valueBig: {
    fontSize: 40,

    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
}));

export default function Achievements() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Pulse>
        <h5 className={classes.featureTitle}>Our Achievements</h5>
      </Pulse>
      <Pulse>
        <div className="d-flex justify-content-center">
          <p className={classes.featurePara}>
            Since first day of our inception, we have achieved many milestones
          </p>
        </div>
      </Pulse>
      <div className="container d-sm-flex align-items-center justify-content-evenly mt-5">
        <div className="col-md-2 mt-3">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                150<span className={classes.valueBig}>X</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>IDO Return</h5>

            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                Our launchpad projects gives 150x return on IDO price.
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-2 mt-3">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                50<span className={classes.valueBig}>+</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>Projects</h5>
            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                We have launched more than 50 projects on multiple chains
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-2 mt-3">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                150M<span className={classes.valueBig}>+</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>ATH MCap</h5>

            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                Our all time high market cap crossed $150 Million+ valuation.
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-2 mt-3">
          <Card className={classes.featureCard}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 80 }}
            >
              <h5 className={classes.valueText}>
                {" "}
                $10M<span className={classes.valueBig}>+</span>
              </h5>
            </div>
            <h5 className={classes.cardTitle}>TVL</h5>
            <div className="d-flex justify-content-center">
              <p className={classes.cardValue}>
                More than $10M funds are locked into our staking pools.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
