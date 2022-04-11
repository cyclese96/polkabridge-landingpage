import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: "black",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heading: {
    color: "white",
    textAlign: "left",
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
  },
  usecaseCard: {
    borderRadius: 1,
    display: "flex",
    justifyContent: "space-between",
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
  },
  imageContainer: {
    width: "100%",
  },
}));
export default function Tokenomics() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-4 d-flex align-items-center">
            <Fade left>
              <div className="text-center mt-1">
                <img
                  src="images/PBR_TOKEN.png"
                  alt="tokenomics"
                  className={classes.imageContainer}
                />
              </div>
            </Fade>
          </div>
          <div className="col-md-8">
            <Fade right>
              <div className="mb-5">
                <h4 className={classes.heading}>$PBR Token</h4>
              </div>
              <div className={classes.usecaseWrapper}>
                <div className="row g-5">
                  <div className="col-6">
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
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/cryptocurrency-coin-4416139-3664000.png"
                          alt="tokenomics"
                          style={{ height: 80 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
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
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/cryptocurrency-trader-5129913-4288062.png"
                          alt="tokenomics"
                          style={{ height: 80 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-5 mt-4">
                  <div className="col-6">
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
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/cryptocurrency-networking-4416129-3663990.png"
                          alt="tokenomics"
                          style={{ height: 80 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
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
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/cryptocurrency-digital-assets-4416125-3663986.png"
                          alt="tokenomics"
                          style={{ height: 80 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-5 mt-4">
                  <div className="col-6">
                    <div className={classes.usecaseCard}>
                      <div>
                        <h5 className={classes.usecaseTitle}>Monthly Burn</h5>
                        <p className={classes.usecasePara}>
                          We burn 1M $PBR tokens with Buyback and burn strategy.
                        </p>
                      </div>
                      <div>
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-burn-5152772-4312541.png  "
                          alt="tokenomics"
                          style={{ height: 80 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={classes.usecaseCard}>
                      <div>
                        <h5 className={classes.usecaseTitle}>
                          Deflationary Farming
                        </h5>
                        <p className={classes.usecasePara}>
                          On every Dex trade 0.5% of the total value will be
                          burnt.
                        </p>
                      </div>
                      <div>
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-transaction-fee-4658209-3900722.png"
                          alt="tokenomics"
                          style={{ height: 80 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
