import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 35,
      paddingTop: 10,
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
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 10,
    },
  },

  listingsWrapper: {
    maxWidth: 900,
  },
}));
export default function Ecosystem() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <p className={classes.para}>PolkaBridge Ecosystem</p>
      <div className={classes.listingsWrapper}>
        <div className="mt-3 row  text-center">
          <div className="col-6 col-md-5">
            <a href="https://polkawar.com/">
              <img
                src="images/polkawar.png"
                alt="logo"
                className={classes.imageWrapper}
              />
            </a>
          </div>
          <div className="col-6 col-md-3">
            <a href="https://corgib.polkabridge.org/">
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <img
                    src="images/corgi.png"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </div>
                <div>
                  {" "}
                  <strong style={{ paddingTop: 5 }}>CORGIB</strong>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
