import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 70,
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
  highlight: {
    color: theme.palette.pbr.primary,
  },
  imageContainer: {
    width: '100%',
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
          Token <span className={classes.highlight}>Release Schedule</span>
        </h4>
      </div>
      <div className="text-center">
        <img src="https://polkabridge.org/assets/img/schedule.png" alt="working" className={classes.imageContainer} />
      </div>
    </div>
  );
}
