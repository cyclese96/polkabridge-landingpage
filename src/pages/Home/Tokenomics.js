import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "12%",
    paddingRight: "12%",
    backgroundColor: "#000005",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
      paddingBottom: 40,
      textAlign: "center",
      paddingLeft: "2%",
      paddingRight: "2%",
    },
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

  usecaseWrapper: {
    borderRadius: 1,
    backgroundImage: 'url("images/pbr_fire.png")',
    backgroundPosition: "center center",
    backgroundSize: "550px",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "100px",
    },
  },
  usecaseCard: {
    borderRadius: 1,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  usecaseTitle: {
    fontWeight: 700,
    verticalAlign: "baseline",
    letterSpacing: "-0.2px",
    lineHeight: "32px",
    margin: 0,
    fontSize: 20,
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "22px",
      fontWeight: 600,
    },
  },
  usecasePara: {
    paddingTop: 10,
    fontWeight: 400,
    width: "85%",
    verticalAlign: "baseline",
    letterSpacing: "-0.2px",
    margin: 0,
    fontSize: 14,
    lineHeight: "24px",
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      lineHeight: "18px",
      fontWeight: 400,
      letterSpacing: "-0.5px",
    },
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    height: 80,

    [theme.breakpoints.down("sm")]: {
      height: 50,
    },
  },
}));
export default function Tokenomics() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container">
        <Fade right>
          <div className="mb-5">
            <h4 className={classes.heading}>$PBR Token</h4>
          </div>
          <div className={classes.usecaseWrapper}>
            <div className="row g-5">
              <div className="col-md-5">
                <div className={classes.usecaseCard}>
                  <div>
                    <h5 className={classes.usecaseTitle}>
                      Get Whitelisted for launchpads
                    </h5>
                    <p className={classes.usecasePara}>
                      Hold atleast 10,000+ PBR Tokens and get guaranteed
                      allocation in private pools.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/bookmark-4453958-3718828.png"
                      alt="tokenomics"
                      className={classes.image}
                    />
                  </div>
                </div>
              </div>
              <Hidden smDown>
                <div className="d-block d-md-block d-sm-none d-xs-none col-md-2"></div>
              </Hidden>

              <div className="col-md-5">
                <div className={classes.usecaseCard}>
                  <div>
                    <h5 className={classes.usecaseTitle}>
                      Staking and Farming Rewards
                    </h5>
                    <p className={classes.usecasePara}>
                      Stake or Farm into pools at PolkaBridge and earn juicy
                      rewards.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/money-sack-4024957-3337577.png"
                      alt="tokenomics"
                      className={classes.image}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row g-5"
              style={{ marginTop: window.innerWidth > 400 ? 20 : 0 }}
            >
              <div className="col-md-5">
                <div className={classes.usecaseCard}>
                  <div>
                    <h5 className={classes.usecaseTitle}>
                      Early access for INO
                    </h5>
                    <p className={classes.usecasePara}>
                      Get early access for INO projects.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-staking-5112599-4269010.png"
                      alt="tokenomics"
                      className={classes.image}
                    />
                  </div>
                </div>
              </div>
              <Hidden smDown>
                <div className="d-block d-md-block d-sm-none d-xs-none col-md-2"></div>
              </Hidden>
              <div className="col-md-5">
                <div className={classes.usecaseCard}>
                  <div>
                    <h5 className={classes.usecaseTitle}>
                      Free Airdrops for HODLERs
                    </h5>
                    <p className={classes.usecasePara}>
                      Long term hodlers recieve bounties and airdrops.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-air-delivery-4419729-3668357.png"
                      alt="tokenomics"
                      className={classes.image}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row g-5"
              style={{ marginTop: window.innerWidth > 400 ? 20 : 0 }}
            >
              <div className="col-md-5">
                <div className={classes.usecaseCard}>
                  <div>
                    <h5 className={classes.usecaseTitle}>Monthly Burn</h5>
                    <p className={classes.usecasePara}>
                      We burn 1M $PBR tokens with Buyback and burn strategy.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/fire-4785796-3992652.png"
                      alt="burn"
                      className={classes.image}
                    />
                  </div>
                </div>
              </div>
              <Hidden smDown>
                <div className="d-block d-md-block d-sm-none d-xs-none col-md-2"></div>
              </Hidden>
              <div className="col-md-5">
                <div className={classes.usecaseCard}>
                  <div>
                    <h5 className={classes.usecaseTitle}>
                      Deflationary Farming
                    </h5>
                    <p className={classes.usecasePara}>
                      On every Dex trade 0.5% of the total value will be burnt.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-transaction-fee-4658209-3900722.png"
                      alt="tokenomics"
                      className={classes.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
