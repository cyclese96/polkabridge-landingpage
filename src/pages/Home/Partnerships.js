import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  spacing: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
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
    // marginRight: 15,
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
}));
export default function Partnerships() {
  const classes = useStyles();
  return (
    <div className="mb-5">
      <p className={classes.para}>Our Proud Partners</p>
      <div className="mt-3 row text-center">
        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/chinapolka.png" alt="logo" className={classes.imageWrapper} />
        </div>
        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/bmwcapital.png" alt="logo" className={classes.imageWrapper} />
        </div>
        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/inverse.png" alt="logo" className={classes.imageWrapper} />
        </div>
        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/labsgroup.png" alt="logo" className={classes.imageWrapper} />
        </div>
      </div>

      <div className="mt-3 row text-center">
        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/casper.png" alt="logo" className={classes.imageWrapper} />
        </div>
        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/mint.png" alt="logo" className={classes.imageWrapper} />
        </div>

        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/taraxa.png" alt="logo" className={classes.imageWrapper} />
        </div>
        <div className="col-6 col-md-3">
          <img src="https://polkabridge.org/assets/img/deeper.png" alt="logo" className={classes.imageWrapper} />
        </div>
      </div>
    </div>
  );
}
