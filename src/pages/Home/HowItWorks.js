import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 10,
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'left',
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
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  title: {
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    textAlign: 'left',
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  imageContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
  focusContainer: {
    border: '1px solid #888888',
    padding: 10,
    borderRadius: '7px',
    marginBottom: 10,
  },
}));
export default function HowItWorks() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row g-0 mt-3">
        <div className="col-md-6">
          <Fade left>
            <div className="mb-3">
              <h4 className={classes.heading}>
                How It <strong className={classes.highlight}>Works</strong>
              </h4>
              <p className={classes.para}>
                With PolkaBridge, you can swap tokens on DOT platform to tokens on other chains and vice versa. Users
                will be able to earn by adding liquidity, lending, farming and more other ways simply.
              </p>
            </div>
            <div className={classes.focusContainer}>
              <h6 className={classes.title}>Swapping</h6>
              <p className={classes.para}>
                Each swap action includes 2 transactions on 2 platforms of swapped tokens through pools.
              </p>
            </div>
            <div className={classes.focusContainer}>
              <h6 className={classes.title}>Farming</h6>

              <ul className={classes.para}>
                <li>90% shared for farmers (liquidity providers on our dApp).</li>
                <li>10% burned</li>
              </ul>
            </div>
          </Fade>{' '}
        </div>
        <div className="col-md-6">
          <Fade right>
            <div className="mt-3">
              <img src="images/HowItWorks.png" alt="working" className={classes.imageContainer} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
