import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs  from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Logo from '../../assets/pic1a.svg';
import Button  from '@material-ui/core/Button';
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
}));

const HeaderAppBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  }

  return (
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
          <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
          <Tab className={classes.tab} component={Link} to="/revs" label="Revs"/>
          <Tab className={classes.tab} component={Link} to="/about" label="About"/>
          <Tab className={classes.tab} component={Link} to="/contact" label="Contact"/>
        </Tabs>
        <Button variant='contained' color='secondary' className={classes.button}>Free Estimate</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderAppBar;
