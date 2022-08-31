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
    fontSize: 17,
    fontWeight: 400,
    color: "#e5e5e5",
    letterSpacing: "-0.2px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: 18,
    },
  },
  features: {
    paddingTop: 30,
    color: "#E0077D",
    fontSize: 30,
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: 1.3,
    },
  },
  itemWrapper: {
    marginLeft: 10,
    paddingLeft: 10,

    marginBottom: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(rgb(23, 29, 42) 0%, rgba(23, 29, 42, 0) 100%)",
    padding: "15px 20px 15px 20px",
    borderRadius: 20,
    backgroundColor: "initial",
    color: "white",
    boxShadow: `rgb(0 0 0 / 2%) 0px 1px 1px, rgb(0 0 0 / 2%) 0px 2px 2px, rgb(0 0 0 / 2%) 0px 4px 4px, rgb(0 0 0 / 2%) 0px 6px 8px, rgb(0 0 0 / 2%) 0px 8px 16px`,
  },
  logo: {
    height: 20,
    width: 20,
  },
  title: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 600,
    color: "#E0077D",
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
            <div>
              {/* <h3 className={classes.features}>
                PRIVATE & STRATEGIC INVESTMENTS ⁃ ADVISORY ⁃ DEVELOPMENT ⁃ IDO &
                INO ⁃ STRATEGIC PARTNERSHIPS ⁃ LAUNCHPAD CONNECT ⁃ MARKETING ⁃
                INFLUENCER NETWORKING
              </h3> */}

              <div className="mt-5">
                <Pulse>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={classes.itemWrapper}>
                        <div className={classes.title}>
                          PRIVATE & STRATEGIC INVESTMENTS
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={classes.itemWrapper}>
                        <div className={classes.title}>ADVISORY</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={classes.itemWrapper}>
                        <div className={classes.title}>DEVELOPMENT</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={classes.itemWrapper}>
                        <div className={classes.title}>IDO & INO</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className={classes.itemWrapper}>
                        <div className={classes.title}>
                          STRATEGIC PARTNERSHIPS
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={classes.itemWrapper}>
                        <div className={classes.title}>LAUNCHPAD CONNECT</div>
                      </div>
                    </div>
                  </div>

                  <div className={classes.itemWrapper}>
                    <div className={classes.title}>
                      MARKETING & INFLUENCER NETWORKING
                    </div>
                  </div>
                </Pulse>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
