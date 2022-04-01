import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 35,
    },
  },

  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
    textAlign: "center",
  },
  partner: {
    flex: "25%",
    height: "32px",
    [theme.breakpoints.down("sm")]: {
      flex: " 50%",
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
    height: "70px",
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
}));
export default function Partnerships() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <p className={classes.para}>Our Proud Partners</p>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  text-center">
          <div className="col-6 col-md-2">
            <a href="http://chinapolka.com/">
              <img
                src="images/chinapolka.png"
                alt="logo"
                className={classes.imageWrapper}
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
            <a href="https://labsgroup.io/">
              <img
                src="images/labsgroup.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
          <div className="col-6 col-md-2 ">
            <a href="https://unifarm.co/">
              <img
                src="images/unifarm.png"
                alt="logo"
                className={classes.imageWrapper}
                style={{ borderRadius: 25 }}
              />
            </a>
          </div>{" "}
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
        <div className="mt-3 row  text-center">
          <div className="col-6 col-md-2">
            <a href="https://publicmint.com/">
              <img
                src="images/mint.png"
                alt="logo"
                className={classes.imageWrapper}
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
            <a href="https://taraxa.io/">
              <img
                src="images/taraxa.png"
                alt="logo"
                className={classes.imageWrapper}
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
            <a href="https://unilend.finance/">
              <img
                src="images/unilend.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper3}>
        <div className="mt-3 row text-center ">
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
            <a href="https://dfyn.network/">
              <img
                src="images/dfyn.png"
                alt="logo"
                className={classes.imageWrapperNew}
              />
            </a>
          </div>
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
            <a href="https://polygon.technology/">
              <img
                src="images/polygon.svg"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
          <div className="col-6 col-md-2">
            <a href="https://harmonylauncher.io/">
              <img
                src="images/harmony-launcher.jpg"
                alt="logo"
                className={classes.imageWrapperNew}
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
        </div>
      </div>
    </div>
  );
}
