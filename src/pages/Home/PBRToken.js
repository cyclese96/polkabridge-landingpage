import { makeStyles } from '@material-ui/core/styles';
import { AttachMoney, Gavel, GroupWork, LocalOffer, Whatshot } from '@material-ui/icons';

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
      <div className="container row flex-column-reverse flex-md-row">
        <div className="col-md-6 col-sm-12 col-sm-push-4">
          <div>
            <img src="https://polkabridge.org/assets/img/pbrtoken.png" alt="logo" className={classes.imageContainer} />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-sm-pull-4">
          <h6 className={classes.heading}>
            <strong className={classes.highlight}>$PBR</strong> Token
          </h6>
          <p className={classes.para}>
            Holding PBR tokens will help you in getting more rewards through liquidity pools, lending, farming etc.
          </p>
          <div className={classes.blockSpacing}>
            <div className={classes.pointer}>
              <h6 className={classes.title}>
                <Whatshot className={classes.icon} /> <strong>Token Burn</strong>
              </h6>
              <p className={classes.para}>10% of every transaction fees will be burned.</p>
            </div>
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
                <LocalOffer className={classes.icon} /> <strong>Fees Discount</strong>
              </h6>
              <p className={classes.para}>Get discount in transaction fees at our DEX.</p>
            </div>
            <div className={classes.pointer}>
              <h6 className={classes.title}>
                <Gavel className={classes.icon} /> <strong>Fund Raising</strong>
              </h6>
              <p className={classes.para}>Participate in IDOs of projects by holding PBR Tokens.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
