import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import About from '../ui/About';

const useStyles = makeStyles(theme => ({
 container: {
   marginTop: 0,
 },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column' className={classes.container}>
      <About />
    </Grid>
  )
}

export default AboutPage;
