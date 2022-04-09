import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Twitter,
  Telegram,
  GitHub,
  Email,
  Reddit,
  Instagram,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  newsletterCard: {
    width: 800,
    height: "100%",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid #454545",
    filter: "drop-shadow(0 0 0.5rem #212121)",

    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 28,
    height: 28,
    color: "#616161",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      height: 20,
    },
  },
  iconWrapper: {
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      marginRight: 2,
    },
  },
}));
export default function SocialLinks() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.newsletterCard}>
        <div className="text-center">
          <div>
            <h6 className={classes.heading}>Follow Us</h6>
            <p className={classes.para}>
              Join our newsletter for more updates!
            </p>
          </div>
        </div>
        <div className="container text-center mt-5" style={{ paddingTop: 70 }}>
          <div>
            <img
              src="https://launchpad.polkabridge.org/img/logo-white.png"
              alt="logo"
              height="40px"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className={classes.iconWrapper}>
              <Tooltip title="Twitter" aria-label="add1">
                <a href="https://twitter.com/realpolkabridge">
                  <IconButton aria-label="Twitter">
                    <Twitter className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Telegram">
                <a href="https://t.me/polkabridgegroup">
                  <IconButton aria-label="Telegram">
                    <Telegram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>

            <div className={classes.iconWrapper}>
              <Tooltip title="Github">
                <a href="https://github.com/cyclese96">
                  <IconButton aria-label="Github">
                    <GitHub className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Medium">
                <a href="https://polkabridge.medium.com/">
                  <IconButton aria-label="Reddit">
                    <img src="./images/medium.png" className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Reddit">
                <a href="https://www.reddit.com/r/polkabridge_official/">
                  <IconButton aria-label="Reddit">
                    <Reddit className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Instagram">
                <a href="https://www.instagram.com/polkabridgeofficial/">
                  <IconButton aria-label="Reddit">
                    <Instagram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Discord">
                <a href="https://discord.gg/tzemFksyZB">
                  <IconButton aria-label="Discord">
                    <img
                      src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-White-1024x780.png"
                      className={classes.icon}
                      style={{ height: 23 }}
                      alt="discord"
                    />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Email">
                <a href="mailto:support@polkabridge.org">
                  <IconButton aria-label="Email">
                    <Email className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </div>
          <p className={classes.para}>
            Copyright 2022{" "}
            <span className={classes.highlight}>PolkaBridge</span>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
