import { Button, Card, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountTree, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Fade } from "react-reveal";
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
      paddingTop: 0,
      paddingBottom: 70,
      textAlign: "center",
    },
  },
  container: {
    marginTop: 100,
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
    width: "80%",
    fontSize: 14,
    fontWeight: 400,
    color: "#e5e5e5",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
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
  featureTitle: {
    fontWeight: 500,
    paddingLeft: 3,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    paddingBottom: 10,
    letterSpacing: "-0.9px",
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  featurePara: {
    paddingLeft: 8,
    fontWeight: 400,
    width: "90%",
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },

  cardTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 22,
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
  featureCard: {
    width: "100%",
    height: "fit-content",
    marginBottom: 15,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#D1D3D7",
    // border: "2px solid #f9f9f9",
    boxShadow: "0px 50px 200px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("sm")]: {
      padding: 14,
    },
  },
  description: {
    fontWeight: 400,
    width: "100%",
    verticalAlign: "baseline",
    letterSpacing: "-0.5px",
    margin: 0,
    fontSize: 14,
    color: "#454545",
    textAlign: "left",
  },
  featureHeading: {
    fontWeight: 600,
    paddingBottom: 6,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    fontSize: 20,
    color: "#212121",
    textAlign: "left",
  },
  imageContainer: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function UpcomingProducts() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Pulse>
          <h1 className={classes.heading}>Upcoming Product</h1>
        </Pulse>
        <Pulse>
          <div className="d-flex justify-content-center">
            <p className={classes.para}>
              Get a glimpse of what we are building now, launch updates of
              PolkaBridge's next product.
            </p>
          </div>
        </Pulse>

        <div className="container d-md-flex align-items-center justify-content-evenly mt-5">
          <div className="col-md-6">
            <div className="d-flex justify-content-between mb-3">
              <img
                src="images/sitting.png"
                className={classes.imageContainer}
              />
            </div>
            <h5 className={classes.featureTitle}>Progress (30%)</h5>
            <div class="containered">
              <div class="progress2 progress-moved">
                <div class="progress-bar2"></div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div
                  className={classes.featureCard}
                  style={{ backgroundColor: "#EFE4FC" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/wallet-4065270-3361678.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>Trade with Wallet</h5>

                  <p className={classes.description}>
                    Use your non-custodial wallet and trade with your fiat.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <Card
                  className={classes.featureCard}
                  style={{ backgroundColor: "#F7F0E7" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/price-tag-4039174-3345837.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>Very Low Fees</h5>

                  <p className={classes.description}>
                    Only 0.25% of trading amount will go to PolkaBridge's
                    ecosystem fund.
                  </p>
                </Card>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <Card
                  className={classes.featureCard}
                  style={{ backgroundColor: "#ffebee" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/secure-shield-4059087-3364010.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>Fully Secure</h5>

                  <p className={classes.description}>
                    Our platform is fully secure and automated trade enabled.
                  </p>
                </Card>
              </div>
              <div className="col-md-6">
                <Card
                  className={classes.featureCard}
                  style={{ backgroundColor: "#e0f2f1" }}
                >
                  <div style={{ height: 60, textAlign: "left" }}>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/clock-3825102-3202858.png"
                      height="50px"
                    />
                  </div>
                  <h5 className={classes.featureHeading}>24*7 Support</h5>

                  <p className={classes.description}>
                    Our executive will be available everytime to support your
                    trade.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
