import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    backgroundColor: '#F7F8FB',
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
    fontSize: 16,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  focusContainer: {
    border: '1px solid #888888',
    padding: 10,
    borderRadius: '7px',
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
}));
export default function Tokenomics() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <Fade left>
              <div className="mt-1">
                <img src="images/tokenomics.png" alt="tokenomics" className={classes.imageContainer} />
              </div>
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade right>
              <div className="mb-5">
                <h4 className={classes.heading}>
                  <strong className={classes.highlight}>Tokenomics</strong> & Locking
                </h4>
              </div>
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>Smart Contract</h6>
                <p className={classes.para}>0x298d492e8c1 d909d3f63bc4a36c66c64acb3d695</p>
              </div>
              {/* <div className={classes.focusContainer}>
              <h6 className={classes.title}>NFT Standard</h6>

              <p className={classes.para}>The ultimate cross-chain NFT standard based on Substrate coming soon.</p>
            </div> */}
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>Unlock Schedule</h6>

                <div className={classes.para}>
                  <ul>
                    <li>
                      <strong>Ecosystem :</strong> 1,000,000 PBR every month.
                    </li>
                    <li>
                      <strong>Marketing :</strong> 1,000,000 PBR every month
                    </li>
                    <li>
                      <strong>Team :</strong> 5,000,000 PBR every 6 months
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
