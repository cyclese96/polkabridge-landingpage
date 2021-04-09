import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 70,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
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
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },

  imageContainer: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
}));
export default function Roadmap() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container">
        <div>
          <h6 className={classes.heading}>
            PolkaBridge <strong className={classes.highlight}>RoadMap</strong>
          </h6>
          <p className={classes.para}>
            Fundamentally strong and visionary project with strong foundation and supported by PolkaDot team.
          </p>
        </div>
        <Fade top>
          <div className="mt-5 text-center">
            <img src="roadmap.png" alt="roadmap" className={classes.imageContainer} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
