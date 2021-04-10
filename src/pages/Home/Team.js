import { IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Telegram } from '@material-ui/icons';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 5,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 22,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: 'center',
    color: theme.palette.pbr.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },

  icon: {
    fontSize: 24,
    color: '#616161',
    '&:hover': {
      color: theme.palette.pbr.primary,
    },
  },

  people: {
    width: 250,
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    boxShadow: '5px 5px 4px 5px #888888',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
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
              <img src="images/cyclese.png" alt="Cyclese" className={classes.avatar} />
              <h6 className={classes.title}>Cyclese</h6>
              <p className={classes.para}>CEO & Co-Founder </p>
              <p className={classes.para}>Senior Blockchain Developer</p>
              <Tooltip title="Telegram">
                <a href="https://t.me/cyclese_polkabridge">
                  <IconButton aria-label="Telegram">
                    <Telegram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </Fade>{' '}
          <Fade right>
            <div className={classes.people}>
              <img src="images/zeph.png" alt="Zeph" className={classes.avatar} />
              <h6 className={classes.title}>Zeph</h6>
              <p className={classes.para}>Co-Founder </p>
              <p className={classes.para}>UX/UI Designer</p>
              <Tooltip title="Telegram">
                <a href="https://t.me/zephwilliams">
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
