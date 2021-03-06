import Hero from "../ui/Hero";
import Services from "../ui/Services";
import About from '../ui/About';
import Revs from '../ui/Revs';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import CallToActions from "../ui/CallToActions";

const useStyles = makeStyles(theme => ({
    container: {
     marginTop: '10em',
    [theme.breakpoints.down('md')]: {
      marginTop: '6em',
      minHeight: '70vh',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '4em',
    }
  },
}));

const Home = () => {
  const classes = useStyles();
  return (

      <Grid container direction="column" className={classes.container}>
        <Hero />
        <Revs />
        <Services />
        <About />
        <CallToActions />
      </Grid> 

     
  );
};

export default Home;
