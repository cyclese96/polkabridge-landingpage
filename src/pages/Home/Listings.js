import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 70,
    paddingBottom: 70,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
    textAlign: "center",
  },
  imageWrapper: {
    padding: 15,
    height: "58px",
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  listingsWrapper: {
    width: 920,
    border: "1px solid #e9e9e9",
    borderRadius: 7,
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.024),
     0 2.8px 3.4px rgba(0, 0, 0, 0.086),
     0 10px 10px rgba(0, 0, 0, 0.02)`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cmcLogo: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 55,
    padding: 10,
  },
  kucoinLogo: {
    backgroundColor: "white",

    height: 55,
    padding: 10,
  },
}));
export default function Listings() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Exchange <span className={classes.highlight}> Listings</span>
      </h6>

      <div className={classes.listingsWrapper}>
        <div className="mt-3 row g-0 text-center">
          <Fade left>
            <div className="col-6 col-md-3 my-2">
              <a href="https://app.uniswap.org/#/swap?inputCurrency=0x298d492e8c1d909d3f63bc4a36c66c64acb3d695">
                <img
                  src="images/uniswap.png"
                  alt="logo"
                  className={classes.imageWrapper}
                />
              </a>
            </div>
            <div className="col-6 col-md-2 my-2">
              <a href="https://quickswap.exchange/#/swap?inputCurrency=0x0d6ae2a429df13e44a07cd2969e085e4833f64a0&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f">
                <img src="images/quickswap.png" className={classes.cmcLogo} />
              </a>
            </div>
            <div className="col-6 col-md-2 my-2">
              <a href="https://trade.kucoin.com/trade/PBR-USDT">
                <img
                  src="images/kucoin.png"
                  alt="kucoin"
                  className={classes.kucoinLogo}
                />
              </a>
            </div>
            <div className="col-6 col-md-2 my-2">
              <a href="https://www.gate.io/trade/PBR_USDT">
                <img
                  src="images/gate.png"
                  alt="logo"
                  className={classes.imageWrapper}
                />
              </a>
            </div>
            <div className="col-6 col-md-3 my-2">
              <a href="https://www.mexc.com/exchange/PBR_USDT">
                <img
                  src="images/mxc-logo.png"
                  alt="logo"
                  className={classes.imageWrapper}
                />
              </a>
            </div>

            <div className="col-6 col-md-3 my-2">
              <a href="https://www.bkex.com/#/trade/PBR_USDT">
                <img src="images/bkex.png" className={classes.cmcLogo} />
              </a>
            </div>
          </Fade>
          <Fade right>
            <div className="col-6 col-md-2 my-2">
              <a href="https://www.bibox.com/en/exchange/basic/PBR_USDT">
                <img src="images/bibox.webp" className={classes.cmcLogo} />
              </a>
            </div>
            <div className="col-6 col-md-3 my-2">
              <a href="https://www.bitmart.com/trade/en?symbol=PBR_USDT&layout=pro">
                <img src="images/bitmart.svg" className={classes.cmcLogo} />
              </a>
            </div>
            <div className="col-6 col-md-2 my-2">
              <a href="https://www.coingecko.com/en/coins/polkabridge">
                <img src="images/coingecko.webp" className={classes.cmcLogo} />
              </a>
            </div>
            <div className="col-6 col-md-2 my-2">
              <a href="https://coinmarketcap.com/currencies/polkabridge/">
                <img src="images/cmc.png" className={classes.cmcLogo} />
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
