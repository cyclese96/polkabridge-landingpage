import { makeStyles } from '@material-ui/core/styles';
import { AccountTree, CompareArrows, HowToVote, LocalFlorist, Receipt, ShutterSpeed } from '@material-ui/icons';
import Pulse from 'react-reveal/Pulse';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    backgroundColor: '#f7f8fb',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      paddingBottom: 50,
      paddingTop: 50,
      textAlign: 'center',
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    width: '50rem',
  },
  container: {
    paddingLeft: 80,
    paddingTop: 80,
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  imageContainer: {
    boxShadow: '5px 5px 4px 5px #888888',
    borderRadius: '7px',
  },
  featureHeading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
  },
  featureText: {
    fontWeight: 400,
    verticalAlign: 'middle',
    letterSpacing: '-0.8px',
    wordSpacing: '0px',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  cicle: {
    height: '50px',
    width: '50px',
    backgroundColor: '#000000',
    color: 'yellow',
    fontSize: 48,
    size: 212,
  },
  column: {
    // marginRight: 15,
    flex: '33%',

    [theme.breakpoints.down('md')]: {
      flex: ' 50%',
    },
  },
  featureWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export default function Features() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      {' '}
      <div>
        <h6 className={classes.heading}>
          <strong className={classes.highlight}>POLKABRIDGE</strong> features
        </h6>
        <div className="d-flex justify-content-center ">
          <p className={classes.para}>
            With PolkaBridge, you can swap tokens on DOT platform to tokens on other chains and vice versa. Users will
            be able to earn by adding liquidity, lending, farming and more other ways simply.
          </p>
        </div>{' '}
      </div>
      <Pulse>
        <div className="mt-5">
          <div className="row g-0">
            <div className="col-md-4 col-sm-12 text-center">
              <div>
                <CompareArrows className={classes.circle} color="secondary" fontSize="large" />
              </div>

              <h6 className={classes.featureHeading}>AMM</h6>
              <p className={classes.featureText}>
                A cutting-edge AMM, which redistributes earnings to pools and capitalizes on user slippages.
              </p>
            </div>

            <div className="col-md-4 col-sm-12 text-center">
              <div className="text-center">
                <LocalFlorist className={classes.circle} color="secondary" fontSize="large" />
              </div>

              <h6 className={classes.featureHeading}>Farming</h6>
              <p className={classes.featureText}>
                Earn 90% of transaction fees by providing liquidity to liquidity pools.
              </p>
            </div>

            <div className="col-md-4 col-sm-12 text-center">
              <div className="text-center">
                <ShutterSpeed className={classes.circle} color="secondary" fontSize="large" />
              </div>

              <h6 className={classes.featureHeading}>Launchpad</h6>
              <p className={classes.featureText}>Participate in IDOs of good and fundamentally strong projects.</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row g-0">
            <div className="col-md-4 col-sm-12 text-center">
              <div className="text-center">
                <Receipt className={classes.circle} color="secondary" fontSize="large" />
              </div>

              <h6 className={classes.featureHeading}>Lending</h6>
              <p className={classes.featureText}>Borrowing and depositing funds is made simple and easy</p>
            </div>

            <div className="col-md-4 col-sm-12 text-center">
              <div className="text-center">
                <AccountTree className={classes.circle} color="secondary" fontSize="large" />
              </div>

              <h6 className={classes.featureHeading}>Prediction</h6>
              <p className={classes.featureText}>Participate in predicting the market and receive rewards for being correct</p>
            </div>

            <div className="col-md-4 col-sm-12 text-center">
              <div className="text-center">
                <HowToVote className={classes.circle} color="secondary" fontSize="large" />
              </div>

              <h6 className={classes.featureHeading}>Governance</h6>
              <p className={classes.featureText}>Reserve tokens and participate in voting for our future projects.</p>
            </div>
          </div>
        </div>
      </Pulse>
    </div>
  );
}
