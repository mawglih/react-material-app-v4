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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
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
    '& img': {
      width: '70%',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '-150px',
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
}));

const HeaderAppBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    const { target } = e;
    setAnchorEl(target);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    const { pathname } = window.location;
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
            open={open}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            classes={{
              paper: classes.menu,
            }}
            elevation={0}
          >
            <MenuItem
              onClick={() => {handleClose(); setValue(1)}}
              component={Link}
              to="/services"
              classes={{
                root: classes.menuItem,
              }}
            >
              Services
            </MenuItem>
            <MenuItem
              onClick={() => {handleClose(); setValue(1)}}
              component={Link}
              to="/custom"
              classes={{
                root: classes.menuItem,
              }}
            >
              Custom Development
            </MenuItem>
            <MenuItem
              onClick={() => {handleClose(); setValue(1)}}
              component={Link}
              to="/mobile"
              classes={{
                root: classes.menuItem,
              }}
            >
              MobileApp Development
            </MenuItem>
            <MenuItem
              onClick={() => {handleClose(); setValue(1)}}
              component={Link}
              to="/websites"
              classes={{
                root: classes.menuItem,
              }}
            >
              Website Development
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}

export default HeaderAppBar;
