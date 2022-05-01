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
import { Link } from 'react-router-dom';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    borderRadius: '50px',
    marginRight: '25px',
    marginLeft: '50px',
    font: 'Roboto',
    color: 'white',
    fontSize: '1rem',
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
}));

const HeaderAppBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const menuOptions = [
    {name: 'Services', link: '/services'},
    {name: 'Custom development', link: '/custom'},
    {name: 'Website development', link: '/websites'},
    {name: 'Mobile development', link: '/mobile'},
  ]

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
    if (pathname === '/' && value !== 0) {
      setValue(0);
    } else if (pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (pathname === '/revs' && value !== 2) {
      setValue(2);
    } else if (pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (pathname === '/estimate' && value !== 5) {
      setValue(5);
    } 
  }, [value]);

  const tabs = (
    <>
      <Tabs value={value} onChange={handleChange} className={classes.tabsContainer}>
        <Tab className={classes.tab} component={Link} to="/" label="Home"/>
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={e => handleClick(e)}
          to="/services"
          label="Services"
        />
        <Tab className={classes.tab} component={Link} to="/revs" label="Revs"/>
        <Tab className={classes.tab} component={Link} to="/about" label="About"/>
        <Tab className={classes.tab} component={Link} to="/contact" label="Contact"/>
      </Tabs>
      <Button variant='contained' color='secondary' className={classes.button} component={Link} to="/estimate">Free Estimate</Button>
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
        {menuOptions.map(({name, link}, index) => {
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
      >
        <List disablePadding>
          {menuOptions.map(({name, link}, index) => {
            return (
              <ListItem 
                key={link}
                component={Link}
                to={link}
                onClick={() => setOpenDrawer(false)}
                disableTypography
                button
                divider
              >
                <ListItemText>{name}</ListItemText>
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
  
  return (
    <>
      <AppBar position="fixed" color="primary">
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
      <div className={classes.toolbarMargin}></div>
    </>
  );
}

export default HeaderAppBar;
