import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs  from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Logo from '../../assets/pic1a.svg';
import Button  from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { servicesOptions } from './constants';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    },
  },
  smallMargin: {
    ...theme.mixins.toolbar,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logoContainer: {
    height: 60,
    width: 60,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('md')]: {
      height: 40,
      width: 40,
      alignSelf: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      height: 30,
      width: 30,
    },
    '& img': {
      width: '70%',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      fontSize: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '60%',
      marginLeft: '10px',
    },
  },
  tabsContainer: {
    marginLeft: 150,
  },
  tab: {
    ...theme.typography.tab,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginRight: '25px',
    marginLeft: '50px',
    color: 'white',
    fontSize: '1.2rem',
    height: 45,
    width: 145,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  title: {
    marginRight: 50,
    [theme.breakpoints.down('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 10,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    marginLeft: 0,
    opacity: .7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: ' transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    marginLeft: 0,
    opacity: .7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const HeaderAppBar = ({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) => {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  
  const theme = useTheme();
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
    
  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    const { target } = e;
    setAnchorEl(target);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    const { target } = e;
    setAnchorEl(target);
    setOpenMenu(true);
    setSelectedIndex(i);
  }

  const menusOptions = [
    {name: 'Home', link: '/', itemValue: 0, popup: false},
    {name: 'Services', link: '/services', itemValue: 1, popup: true, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaHaspopup: anchorEl ? "true" : undefined, mouseover: (e) => handleClick(e)},
    {name: 'Revs', link: '/revs', itemValue: 2,popup: false },
    {name: 'About us', link: '/about', itemValue: 3, popup: false},
    {name: 'Contact us', link: '/contact', itemValue: 4, popup: false},
    {name: 'Free estimate', link: '/estimate', itemValue: 5, popup: false},
  ];

  useEffect(() => {
    const { pathname } = window.location;
    switch (pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        };
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        };
        break;
      case '/custom':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        };
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
          };
          break;
      case '/mobile':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        };
        break;
      case '/revs':
        if (value !== 2) {
          setValue(2);
        };
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        };
        break;
      case '/contact':
      if (value !== 4) {
        setValue(4);
      };
        break;
      case '/estimate':
      if (value !== 5) {
        setValue(5);
      };
        break;
      default:
        break;
    }
  }, [setSelectedIndex, setValue, value]);

  const tabs = (
    <>
      <Tabs value={value} onChange={handleChange} className={classes.tabsContainer}>
        {menusOptions.map(({name, link, itemValue, ariaOwns, ariaHaspopup, mouseover}) => {
         if (name === 'Free estimate') {
            return (
              <Button
                key={link}
                variant='contained'
                color='secondary'
                className={classes.button}
                component={Link}
                to={link}
              >
                {name}
              </Button>);
          } else {
            return (
              <Tab
                key={itemValue}
                aria-owns={ariaOwns}
                aria-haspopup={ariaHaspopup}
                className={classes.tab}
                component={Link}
                onMouseOver={mouseover}
                to={link}
                label={name}
              />);
          }
        })}
      </Tabs>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{
          paper: classes.menu,
        }}
        elevation={0}
      >
        {servicesOptions.map(({name, link}, index) => {
          return (
          <MenuItem
            key={link}
            onClick={(e) => {handleMenuItemClick(e, index); setValue(1); handleClose()}}
            selected={index === selectedIndex && value === 1}
            component={Link}
            to={link}
            classes={{
              root: classes.menuItem,
            }}
          >
          {name}
          </MenuItem>
          )
        })}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {menusOptions.map(({name, link, itemValue}, index) => {
            return (
              <ListItem 
                key={link}
                component={Link}
                to={link}
                onClick={() => {setOpenDrawer(false); setValue(itemValue);}}
                button
                divider
                className={name==='Free estimate' ? [`${classes.drawerItemEstimate}`] : null}
                selected={value === itemValue}
                classes={{
                  selected: classes.drawerItemSelected,
                }}
              >
                <ListItemText className={classes.drawerItem}>{name}</ListItemText>
              </ListItem>
            )
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  const { pathname } = useLocation();
  const override = (pathname === '/' || pathname === '/revs');
  
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <div className={classes.titleContainer}>
            <h2 className={classes.title}>Design and perfection</h2>
            <div className={classes.logoContainer}>
              <img alt="company logl" src={Logo}/>
            </div>
          </div>
          {mobile ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={override ? classes.toolbarMargin : classes.smallMargin}></div>
    </>
  );
}

export default HeaderAppBar;
