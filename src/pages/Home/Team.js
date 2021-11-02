import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, LinkedIn, Telegram, Twitter } from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
    },
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
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 5,
    textAlign: "center",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 22,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: "center",
    color: theme.palette.pbr.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,

      paddingBottom: 3,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },

  icon: {
    fontSize: 24,
    color: "#616161",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },

  people: {
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 180,
    },
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    boxShadow: "5px 5px 4px 5px #888888",
    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
    },
  },
}));
export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="text-center">
        <h4 className={classes.heading}>
          Our <strong className={classes.highlight}>Team</strong>
        </h4>
        <div className="mt-5 d-flex justify-content-center">
          <Fade left>
            <div className={classes.people}>
              <img
                src="./images/cyclese.png"
                alt="Cyclese"
                className={classes.avatar}
              />
              <h6 className={classes.title}>Cyclese</h6>
              <p className={classes.para}>CEO & Founder</p>

              <Tooltip title="Telegram">
                <a href="https://t.me/cyclese_polkabridge">
                  <IconButton aria-label="Telegram">
                    <Telegram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>{" "}
          <Fade right>
            <div className={classes.people}>
              <img
                src="./images/team/aamir.jpg"
                alt="Aamir"
                className={classes.avatar}
              />
              <h6 className={classes.title}>Aamir Alam</h6>
              <p className={classes.para}>Developer</p>
              <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/aamir-alam/">
                  <IconButton aria-label="LinkedIn">
                    <LinkedIn className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="GitHub">
                <a href="https://github.com/AamirAlam">
                  <IconButton aria-label="GitHub">
                    <GitHub className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>
          <Fade right>
            <div className={classes.people}>
              <img
                src="./images/team/tahir.jpg"
                alt="Tahir"
                className={classes.avatar}
              />
              <h6 className={classes.title}>Tahir Ahmad</h6>
              <p className={classes.para}>Developer</p>
              <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/tahirahmadin/">
                  <IconButton aria-label="LinkedIn">
                    <LinkedIn className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="Github">
                <a href="https://github.com/tahirahmadin">
                  <IconButton aria-label="Github">
                    <GitHub className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>
          <Fade right>
            <div className={classes.people}>
              <img
                src="./images/team/amir.jpg"
                alt="Amir"
                className={classes.avatar}
              />
              <h6 className={classes.title}>Amir Siddiqui</h6>
              <p className={classes.para}>Developer</p>
              <Tooltip title="Telegram">
                <a href="https://github.com/amirsiddiquiin">
                  <IconButton aria-label="Telegram">
                    <GitHub className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <Fade right>
            <div className={classes.people}>
              <img
                src="./images/team/javier.jpg"
                alt="Javier"
                className={classes.avatar}
              />
              <h6 className={classes.title}>Javier </h6>
              <p className={classes.para}>Marketing Head</p>
              <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/javier-delgado-b057b7166">
                  <IconButton aria-label="LinkedIn">
                    <LinkedIn className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>
          <Fade right>
            <div className={classes.people}>
              <img
                src="./images/team/angie.jpg"
                alt="Angie"
                className={classes.avatar}
              />
              <h6 className={classes.title}>Angie </h6>
              <p className={classes.para}>Marketing Manager</p>
              <Tooltip title="Twitter">
                <a href="https://twitter.com/InfinityTimesMe">
                  <IconButton aria-label="Twitter">
                    <Twitter className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>
          <Fade right>
            <div className={classes.people}>
              <img
                src="./images/team/swas.jpg"
                alt="Swas"
                className={classes.avatar}
              />
              <h6 className={classes.title}>Swas </h6>
              <p className={classes.para}>Design Lead</p>
              <Tooltip title="Telegram">
                <a href="https://t.me/polkabridgegroup">
                  <IconButton aria-label="Telegram">
                    <Telegram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
