import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "transparent",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingLeft: "5%",
      paddingRight: "5%",
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
    margin: "0px 0px 12px",

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
  partner: {
    flex: "25%",
    height: "32px",
    [theme.breakpoints.down("sm")]: {
      flex: " 50%",
    },
  },
  imageWrapperChina: {
    padding: 15,
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapper: {
    padding: 15,
    height: "64px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapperBMW: {
    padding: 10,
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapperNew: {
    padding: 10,
    height: "68px",
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      padding: 10,
    },
  },
  listingsWrapper: {
    maxWidth: 700,
  },
  listingsWrappe2: {
    maxWidth: 900,
  },
  listingsWrapper3: {
    maxWidth: 900,
  },
  card: {
    width: "100%",
    height: "100%",

    borderRadius: 10,
    backgroundColor: "#111111",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",

    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  imageWrapperCard: {
    borderRadius: 10,
    padding: 10,
    height: "60px",

    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      padding: 10,
    },
  },
  imageWrapperCardBlack: {
    borderRadius: 10,
    padding: 10,
    height: "60px",

    backgroundColor: "#121212",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      padding: 10,
    },
  },
}));
export default function Partnerships() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <p className={classes.heading}> Partners</p>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  flex-row justify-content-center  text-center">
          <div className="col-6 col-md-2">
            <a href="http://chinapolka.com/">
              <img
                src="images/chinapolka.png"
                alt="logo"
                className={classes.imageWrapperChina}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <img
              src="images/bmwcapital.png"
              alt="logo"
              className={classes.imageWrapperBMW}
            />
          </div>
          <div className="col-6 col-md-2">
            <a href="https://projectinverse.com/">
              <img
                src="images/inverse.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>

          <div className="col-6 col-md-2">
            <a href="https://casperlabs.io/">
              <img
                src="images/casper.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  flex-row justify-content-center text-center">
          <div className="col-6 col-md-2">
            <a href="https://taraxa.io/">
              <img
                src="images/taraxa.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <a href="https://deeper.network/">
              <img
                src="images/deeper.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <a href="https://quickswap.exchange/">
              <img
                src="images/quickswap.png"
                alt="logo"
                className={classes.imageWrapperNew}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <a href="https://labsgroup.io/">
              <img
                src="images/labsgroup.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row flex-row justify-content-center text-center ">
          <div className="col-6 col-md-2">
            <a href="https://www.lunapad.co/">
              <img
                src="images/lunapad.png"
                alt="lunapad"
                className={classes.imageWrapperNew}
              />
            </a>
          </div>

          <div className="col-6 col-md-2">
            <a href="https://oddiyana.ventures/">
              <img
                src="images/oddiyana.jpeg"
                alt="logo"
                className={classes.imageWrapperNew}
                style={{ borderRadius: 20 }}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <a href="https://harmonylauncher.io/">
              <img
                src="images/harmony-launcher.jpg"
                alt="logo"
                style={{ borderRadius: "50%" }}
                className={classes.imageWrapperNew}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <a href="https://pinknode.io/">
              <img
                src="images/pinknode.jpeg"
                alt="logo"
                className={classes.imageWrapperNew}
                style={{ borderRadius: 20 }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row flex-row justify-content-center text-center ">
          <div className="col-6 col-md-2">
            <div className="text-center">
              <a href="https://unifarm.co/">
                <img
                  src="images/unifarm.jpg"
                  alt="logo"
                  className={classes.imageWrapperNew}
                  style={{ borderRadius: 20, height: "70px" }}
                />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2" align="center">
            <a href="https://www.ankr.com/">
              <img
                src="images/ankr.png"
                alt="ankr"
                className={classes.imageWrapperNew}
              />
            </a>
          </div>

          <div className="col-6 col-md-2">
            <a href="https://unilend.finance/">
              <img
                src="images/unilend.png"
                alt="logo"
                className={classes.imageWrapperCard}
              />
            </a>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className="text-center">
              <a href="https://dfyn.network/">
                <img
                  src="images/dfyn.png"
                  alt="logo"
                  className={classes.imageWrapperCard}
                  style={{ width: "120px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row flex-row justify-content-center text-center ">
          <div className="col-6 col-md-2">
            <a href="https://publicmint.com/">
              <img
                src="images/mint.png"
                alt="logo"
                className={classes.imageWrapperCardBlack}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <a href="https://polygon.technology/">
              <img
                src="images/polygon.png"
                alt="logo"
                className={classes.imageWrapperNew}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
