import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Twitter, Facebook, YouTube } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingLeft: 50,
    paddingTop: 150,
    height: 500,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  circle: {
    width: 7,
    height: 7,
    padding: 5,
    margin: 6,
    borderRadius: '50%',
    backgroundColor: theme.palette.pbr.primary,
  },
  header: {
    height: '45rem',
    width: 'auto',
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(233, 233, 233, 0.99) ),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl2T6kWLUzalYEALVytfVGJPuyw9eQ_wYHrvHv1r5xQrn8qebMgwudwpZNsQyXrtJM_M&usqp=CAU")`,
    backgroundSize: 'contain',
  },
  notice: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 15,
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    width: 'auto',
    textAlign: 'left',
    fontSize: '44px',
    fontWeight: 600,

    verticalAlign: 'middle',
    wordSpacing: '0px',
  },
  subheading: {
    textAlign: 'left',
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
    marginTop: 25,
  },
  icon: {
    fontSize: 20,
    marginBottom: 25,
    color: '#616161',
  },
}));

export default function Home2() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.spacing}>
          <div className="row">
            <div className="col-md-1">
              <div className="d-flex flex-column justify-content-center mt-5 pt-4">
                <Twitter className={classes.icon} />
                <Facebook className={classes.icon} />

                <YouTube className={classes.icon} />
                <Facebook className={classes.icon} />

                <Twitter className={classes.icon} />
              </div>
            </div>
            <div className="col-md-7">
              {' '}
              <div>
                <div className="d-flex flex-row justify-content-start mt-5">
                  <div className={classes.circle} />
                  <p className={classes.notice}>PBR Deflationary Farming will be launching soon</p>
                </div>

                <h1 className={classes.heading}>
                  {/* THE FIRST DECENTRALIZED BRIDGE BETWEEN POLKADOT PLATFORM AND OTHER BLOCKCHAINS */}
                  1st Decentralized Bridge Between Polkadot Platform & Other Blockchains
                </h1>
                <p className={classes.subheading}>
                  <strong>Powered by </strong>{' '}
                  <Typography className={classes.title} variant="h6" noWrap>
                    <img
                      src="https://polkadot.network/assets/img/logo-polkadot.svg?v=c1f8875403"
                      alt="logo"
                      height="44px"
                    />
                  </Typography>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://bit2me.com/assets/img/buy/the-app/phone.webp"
                height="500px"
                style={{ marginLeft: -200, marginTop: 40 }}
              />
              <Typography className={classes.notice} variant="p" noWrap>
                Built using Moonbeam parachain solution
              </Typography>
            </div>
          </div>
        </div>{' '}
      </div>
    </Fragment>
  );
}
