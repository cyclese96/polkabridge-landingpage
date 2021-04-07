import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Cached } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 100,

    [theme.breakpoints.down('sm')]: {
      paddingTop: 5,
      textAlign: 'center',
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
    height: '80vh',
    width: 'auto',
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(233, 233, 233, 0.99) ),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl2T6kWLUzalYEALVytfVGJPuyw9eQ_wYHrvHv1r5xQrn8qebMgwudwpZNsQyXrtJM_M&usqp=CAU")`,
    backgroundSize: 'contain',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
    },
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
    textAlign: 'center',
    fontSize: '52px',

    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    margin: '0px 0px 12px',
    padding: '0px 12px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
  },
  subheading: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
    marginTop: 25,
  },
  button: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    marginTop: 15,
    color: '#ffffff',
    padding: '15px 30px 15px 30px',
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <section>
        {' '}
        <div className={classes.header}>
          <div className={classes.spacing}>
            <div className="d-flex flex-row justify-content-center mt-5">
              <div className={classes.circle} />
              <p className={classes.notice}>PBR Launchpad starting soon.</p>
            </div>

            <h1 className={classes.heading}>
              {/* THE FIRST DECENTRALIZED BRIDGE BETWEEN POLKADOT PLATFORM AND OTHER BLOCKCHAINS */}
              1st Decentralized Bridge Between <br />
              Polkadot Platform & Other Blockchains
            </h1>
            <p className={classes.subheading}>
              <strong>Powered by </strong>{' '}
              <Typography className={classes.title} variant="h6" noWrap>
                <img
                  src="https://polkadot.network/assets/img/logo-polkadot.svg?v=c1f8875403"
                  alt="logo"
                  height="40px"
                />
              </Typography>
            </p>
            <div className="text-center mt-3">
              <Button variant="contained" color="primary" className={classes.button}>
                <Cached className={classes.icon} /> Launch Exchange
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
