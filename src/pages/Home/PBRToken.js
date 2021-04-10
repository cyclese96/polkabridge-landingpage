import { makeStyles } from '@material-ui/core/styles';
import { AttachMoney, Gavel, GroupWork, LocalOffer, Whatshot } from '@material-ui/icons';
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

  highlight: {
    color: theme.palette.pbr.primary,
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

  icon: {
    fontSize: 16,
    color: theme.palette.pbr.primary,
    marginRight: 5,
    marginTop: -5,
  },

  title: {
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    textAlign: 'left',
    fontSize: 16,
  },
  blockSpacing: {
    paddingLeft: 10,
    marginTop: 15,
  },
  imageContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
  pointer: { paddingBottom: 10 },
}));
export default function PBRToken() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row g-0 flex-column-reverse flex-md-row">
        <div className="col-md-6 col-sm-12 col-sm-push-4">
          <Fade left>
            <div>
              <img src="images/pbrtoken.png" alt="logo" className={classes.imageContainer} />
            </div>
          </Fade>
        </div>
        <div className="col-md-6 col-sm-12 col-sm-pull-4">
          <Fade right>
            <h6 className={classes.heading}>
              <strong className={classes.highlight}>$PBR</strong> Token
            </h6>
            <p className={classes.para}>
              Holding PBR tokens will help you in getting more rewards through liquidity pools, lending, farming etc.
            </p>
            <div className={classes.blockSpacing}>

              <div className={classes.pointer}>
                <h6 className={classes.title}>
                  <AttachMoney className={classes.icon} /> <strong>Farming Rewards</strong>
                </h6>
                <p className={classes.para}>Earn farming rewards from trading fees on PolkaBridge.</p>
              </div>

              <div className={classes.pointer}>
                <h6 className={classes.title}>
                  <GroupWork className={classes.icon} /> <strong>Lending Fee</strong>
                </h6>
                <p className={classes.para}>Pay lending fees in PBR.</p>
              </div>

              <div className={classes.pointer}>
                <h6 className={classes.title}>
                  <Gavel className={classes.icon} /> <strong>Fund Raising</strong>
                </h6>
                <p className={classes.para}>Participate in IDOs of projects by holding PBR Tokens.</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
