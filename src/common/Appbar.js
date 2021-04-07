import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import dotCircle from '../components/DotCircle';
import DotCircle from '../components/DotCircle';
import { Button } from '@material-ui/core';
import CustomButton from './CustomButton';

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
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
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
              <CustomButton title={'Read Whitepaper'}></CustomButton>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <div>
              <img src="logo.png" alt="logo" height="50px" />
            </div>

            <IconButton
              aria-label="Menu"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              className={classes.menuIcon}
              onClick={handleMobileMenuOpen}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
