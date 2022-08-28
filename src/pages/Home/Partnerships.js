import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LaunchpadATH from "./LaunchpadATH";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "8%",
    paddingRight: "8%",
    backgroundColor: "transparent",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingLeft: "1%",
      paddingRight: "1%",
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
    fontSize: 50,
    fontWeight: 700,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  subheading: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 50,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",
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
  logoWrapperCard: {
    width: "100%",
    maxWidth: 100,
    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    borderRadius: 7,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 100,
      marginTop: 20,
    },
  },
  logoWrapper: {
    width: "100%",
    maxWidth: 100,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 100,
      marginTop: 20,
    },
  },
  celerWrapper: {
    width: "100%",
    maxWidth: 150,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 100,
      marginTop: 20,
    },
  },
  celer: {
    maxWidth: 140,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 80,
    },
  },
  logoMain: {
    width: "100%",
    maxWidth: 95,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 80,
    },
  },
  logoMainHacken: {
    width: "100%",
    maxWidth: 55,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 45,
    },
  },
  ecologoMain: {
    width: "100%",
    maxWidth: 65,
  },
  imageWrapperNewTomo: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: 90,
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
  listingsWrapper2: {
    paddingTop: 5,
    paddingBottom: 5,
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
  imageWrapperCardUnilend: {
    borderRadius: 10,
    padding: 10,
    height: "50px",

    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("md")]: {
      marginTop: 6,
      height: "50px",
      maxWidth: 120,
      padding: 5,
    },
  },
  imageWrapperNewSafle: {
    padding: 10,
    height: "50px",

    [theme.breakpoints.down("sm")]: {
      height: "50px",
      padding: 10,
    },
  },
  imageWrapperCardDfyn: {
    borderRadius: 10,
    padding: 10,
    height: "50px",

    backgroundColor: "#f9f9f9",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("sm")]: {
      marginTop: 6,
      height: "50px",
      width: "fit-content",
      padding: 5,
    },
  },
  imageWrapperCardBlack: {
    borderRadius: 10,
    padding: 10,
    height: "50px",

    backgroundColor: "#121212",
    border: "3px solid #121212",
    filter: "drop-shadow(0 0 0.5rem #111111)",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      padding: 10,
    },
  },
}));
export default function Partnerships() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <p className={classes.heading}> VCs Partners</p>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  d-flex justify-content-center align-items-center text-center">
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://unitycapitalvc.com/">
                <img
                  src="https://unitycapitalvc.com/assets/theme-assets/images-3d-animation/uniticapitial.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
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
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://www.v2blabs.com/">
                <img
                  src="https://www.v2blabs.com/_nuxt/img/Logo.6837bc2.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="http://www.bmw-vc.com/">
                <img
                  src="images/bmwcapital.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  d-flex justify-content-center align-items-center text-center">
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://zephyruscapital.com/">
                <img
                  src="https://zephyruscapital.com/wp-content/uploads/2021/12/logowhite.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://ucapital.vc/">
                <img
                  src="https://static.tildacdn.com/tild3834-3661-4463-b238-393837653962/UnrealCapital_logo_v.svg"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://www.unicornventures.co.in/">
                <img
                  src="./images/unicornvent.jpeg"
                  alt="logo"
                  className={classes.logoMainHacken}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 80, marginBottom: 80 }}></div>
      <p className={classes.heading}> Tech & Community Partners </p>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  d-flex justify-content-center align-items-center text-center">
          <div className="col-6 col-md-2" align="center">
            <div className={classes.celerWrapper}>
              <a href="https://cbridge.celer.network/137/56/ANML">
                <img
                  src="images/celer.png"
                  alt="logo"
                  className={classes.celer}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  d-flex justify-content-center align-items-center text-center">
          <div className="col-6 col-md-2">
            <a href="http://chinapolka.com/#/">
              <img
                src="images/chinapolka.png"
                alt="logo"
                className={classes.logoMain}
              />
            </a>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://polygon.technology/">
                <img
                  src="images/polygon.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.imageWrapper}>
              <a href="https://tomochain.com/">
                <img
                  src="images/tmochain.svg"
                  alt="logo"
                  className={classes.imageWrapperNewTomo}
                />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://casperlabs.io/">
                <img
                  src="images/casper.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  d-flex justify-content-center align-items-center text-center">
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://www.certik.com/">
                <img
                  src="https://movenetwork.io/wp-content/uploads/2021/11/Certik-logo-300x300-01.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://hacken.io/">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/5583.png"
                  alt="logo"
                  className={classes.logoMainHacken}
                />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://deeper.network/">
                <img
                  src="images/deeper.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://labsgroup.io/">
                <img
                  src="images/labsgroup.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row flex-row justify-content-center text-center ">
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapperCard}>
              <a href="https://www.koistarter.io/">
                <img
                  src="https://www.koistarter.io/images/logo.svg"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
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
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapperCard}>
              <a href="https://kommunitas.net/">
                <img
                  src="images/kommunitas.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://fantomlive.finance/">
                <img
                  src="images/fantomlive.png"
                  alt="logo"
                  className={classes.imageWrapperCardBlack}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.listingsWrapper2}>
        <div className="mt-3 row  d-flex justify-content-center align-items-center text-center">
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://unifarm.co/">
                <img
                  src="images/unifarm.jpg"
                  alt="logo"
                  className={classes.logoMain}
                  style={{ borderRadius: 5 }}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapperCard}>
              <a href="https://www.ankr.com/">
                <img
                  src="images/ankr.png"
                  alt="ankr"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapperCard}>
              <a href="https://unilend.finance/">
                <img
                  src="images/unilend.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapperCard}>
              <a href="https://dfyn.network/">
                <img
                  src="images/dfyn.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.listingsWrapper2}>
        <div className="mt-4 row  d-flex justify-content-center align-items-center text-center">
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://publicmint.com/">
                <img
                  src="images/mint.png"
                  alt="logo"
                  className={classes.imageWrapperCardBlack}
                />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://bitkeep.com/">
                <img
                  src="images/bitkeep.png"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2" align="center">
            <div className={classes.logoWrapper}>
              <a href="https://getsafle.com/">
                <img
                  src="images/safle.svg"
                  alt="logo"
                  className={classes.logoMain}
                />
              </a>
            </div>
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
    </div>
  );
}
