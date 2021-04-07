import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 70,
    paddingBottom: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 15,
    textAlign: 'center',
  },
  imageWrapper: {
    padding: 15,
    height: '64px',
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
  listingsWrapper: {
    maxWidth: 700,
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
        <div className="mt-3 row text-center">
          <div className="col-6 col-md-3">
            <img src="https://polkabridge.org/assets/img/uniswap.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="https://polkabridge.org/assets/img/mxc-logo.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="https://polkabridge.org/assets/img/gate.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="https://polkabridge.org/assets/img/bilaxy.png" alt="logo" className={classes.imageWrapper} />
          </div>
        </div>
      </div>
    </div>
  );
}
