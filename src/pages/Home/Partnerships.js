import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 35,
    },
  },

  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 15,
    textAlign: 'center',
  },
  partner: {
    flex: '25%',
    height: '32px',
    [theme.breakpoints.down('sm')]: {
      flex: ' 50%',
    },
  },
  imageWrapper: {
    padding: 15,
    height: '64px',
  },
  listingsWrapper: {
    maxWidth: 700,
  },
}));
export default function Partnerships() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <p className={classes.para}>Our Proud Partners</p>
      <div className={classes.listingsWrapper}>
        <div className="mt-3  row g-0 text-center">
          <div className="col-6 col-md-3">
            <img src="images/chinapolka.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="images/bmwcapital.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="images/inverse.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="images/labsgroup.png" alt="logo" className={classes.imageWrapper} />
          </div>
        </div>
      </div>
      <div className={classes.listingsWrapper}>
        <div className="mt-3 row g-0 text-center">
          <div className="col-6 col-md-3">
            <img src="images/casper.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="images/mint.png" alt="logo" className={classes.imageWrapper} />
          </div>

          <div className="col-6 col-md-3">
            <img src="images/taraxa.png" alt="logo" className={classes.imageWrapper} />
          </div>
          <div className="col-6 col-md-3">
            <img src="images/deeper.png" alt="logo" className={classes.imageWrapper} />
          </div>
        </div>
      </div>
    </div>
  );
}
