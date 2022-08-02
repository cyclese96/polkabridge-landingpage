import { Button, Card, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountTree, ChevronLeft, ChevronRight } from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";
import CustomButton from "../../common/CustomButton";

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
      textAlign: "center",
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  },
  container: {
    marginTop: 100,
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
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      textAlign: "center",
      lineHeight: 1.2,
    },
  },
  featurePara: {
    paddingLeft: 8,
    fontWeight: 400,
    width: "90%",
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
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
  featureCardFull: {
    width: 640,
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 30,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",

      height: 300,
    },
  },
}));

export default function Ecosystem() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Hidden mdUp>
          <h5 className={classes.featureTitle}>
            PolkaBridge's <br />
            Ecosystem
          </h5>
        </Hidden>
        <div className="row d-md-flex align-items-center justify-content-evenly mt-5">
          <div className="col-md-8">
            <div className="d-flex justify-content-center">
              <Hidden smDown>
                <div className={classes.featureCardFull}>
                  <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/nDTgKrdUCFU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{ borderRadius: 30 }}
                  ></iframe>
                </div>
              </Hidden>
              <Hidden mdUp>
                <div className={classes.featureCardFull}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/nDTgKrdUCFU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{ borderRadius: 30 }}
                  ></iframe>
                </div>
              </Hidden>
            </div>
          </div>
          <div className="col-md-4">
            <Hidden smDown>
              <h5 className={classes.featureTitle}>
                PolkaBridge's <br />
                Ecosystem
              </h5>
            </Hidden>
            <div className="mt-3">
              <div className=" d-flex align-items-center justify-content-start mt-2">
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 10,
                    width: 10,
                  }}
                ></div>
                <div className={classes.featurePara}>P2P Exchange</div>
              </div>
              <div className=" d-flex align-items-center justify-content-start mt-2">
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 10,
                    width: 10,
                  }}
                ></div>
                <div className={classes.featurePara}>Deflationary Farming</div>
              </div>
              <div className=" d-flex align-items-center justify-content-start mt-2">
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 10,
                    width: 10,
                  }}
                ></div>
                <div className={classes.featurePara}>Stake and Earn</div>
              </div>
              <div className=" d-flex align-items-center justify-content-start mt-2">
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 10,
                    width: 10,
                  }}
                ></div>
                <div className={classes.featurePara}>
                  MultiChain and Cross-Chain AMM
                </div>
              </div>

              <div className=" d-flex align-items-center justify-content-start mt-2">
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 10,
                    width: 10,
                  }}
                ></div>
                <div className={classes.featurePara}>Metaverse approach</div>
              </div>

              <div className=" d-flex align-items-center justify-content-start mt-2">
                <div
                  style={{
                    backgroundColor: "green",
                    borderRadius: 50,
                    height: 10,
                    width: 10,
                  }}
                ></div>
                <div className={classes.featurePara}>
                  Lowest liquidity provider fees.
                </div>
              </div>
            </div>
            <div className="mt-3">
              <CustomButton
                title={"Check On Certik"}
                link={"https://www.certik.com/projects/polkabridge"}
              ></CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
