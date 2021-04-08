import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import DotCircle from '../components/DotCircle';
import CustomButton from './CustomButton';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  tabs: {
    color: theme.palette.pbr.textSecondary,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    paddingRight: 15,
    fontWeight: 400,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    padding: '9px 18px 0px',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    backgroundColor: 'transparent',
  },
  menuIcon: {
    color: '#212121',
  },
  list: {
    width: '250px',
    borderLeft: '5px solid pink',
    borderColor: theme.palette.pbr.primary,
    height: '100%',
    backgroundColor: 'transparent',
  },
  fullList: {
    width: 'auto',
  },
  menuTitle: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    textAlign: 'left',
    fontSize: 16,
  },
  menuTitlePink: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    textAlign: 'left',
    fontSize: 16,
    color: theme.palette.pbr.primary,
  },
  mobileButton: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    color: '#ffffff',
    padding: '5px 15px 5px 15px',
    fontWeight: 600,
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Solution', 'How It Works', 'PBR Token', 'Team', 'Roadmap'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} className={classes.menuTitle} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Exchange', 'Farming'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} className={classes.menuTitle} />
          </ListItem>
        ))}
        <ListItem button>
          <a href="https://polkabridge.org/assets/docs/whitepaper.pdf" style={{ textDecoration: 'none' }}>
            <ListItemText primary={'Read Whitepaper'} className={classes.menuTitlePink} />
          </a>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar className="d-flex justify-content-evenly">
          <Typography className={classes.title} variant="h6" noWrap>
            <img src="logo.png" alt="logo" height="60px" />
          </Typography>
          <div className="d-flex justify-content-end">
            <Typography className={classes.tabs} variant="p" noWrap>
              Migrate
              <DotCircle />
            </Typography>
            <Typography className={classes.tabs} variant="p" noWrap>
              Solution <DotCircle />
            </Typography>
            <Typography className={classes.tabs} variant="p" noWrap>
              How It Works <DotCircle />
            </Typography>
            <Typography className={classes.tabs} variant="p">
              PBR Token <DotCircle />
            </Typography>
            <Typography className={classes.tabs} variant="p">
              Roadmap <DotCircle />
            </Typography>
            <Typography className={classes.tabs} variant="p">
              Exchange <DotCircle />
            </Typography>
            <div className={classes.sectionDesktop}>
              <CustomButton
                title={'Read Whitepaper'}
                link={'https://polkabridge.org/assets/docs/whitepaper.pdf'}></CustomButton>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <div>
              <img src="logo.png" alt="logo" height="50px" />
            </div>

            <div>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="Menu"
                    aria-haspopup="true"
                    className={classes.menuIcon}
                    onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
