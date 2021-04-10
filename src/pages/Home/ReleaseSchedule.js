import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
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
export default function ReleaseSchedule() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="mb-3 mt-3">
        <h4 className={classes.heading}>
          Token <strong className={classes.highlight}>Release Schedule</strong>
        </h4>
      </div>
      <Fade top>
        <div className="text-center">
          <img src="images/schedule.png" alt="working" className={classes.imageContainer} />
        </div>
      </Fade>
    </div>
  );
}
