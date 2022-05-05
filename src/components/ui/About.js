import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import aboutBkg from '../../assets/aboutbkg.png';
import { makeStyles } from "@material-ui/core";
import LearnButton from "./LearnButton";

const useStyles = makeStyles(theme => ({
  about: {
    height: '40em',
    marginTop: '5em',
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
      marginTop: 0,
    },
  },
  info: {
    backgroundImage: `url(${aboutBkg})`,
    backgroundPosition: 'center',
    backgroundSize: '400px auto',
    backgroundRepeat: 'repeat',
    height: '100%',
    width: '100%',
  }, 
  learnButtonAbout: {
    borderColor: 'white',
    color: 'white',
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '1rem',
    height: 45,
    width: 145,
  },

  textContainer: {
    position: "absolute",
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid container direction="row" className={classes.about} alignItems='center'> 
        <Grid container direction="row" justifyContent="space-between" className={classes.textContainer}>
          <Grid sm item style={{ marginLeft: '5em'}}>
            <Grid container direction="column" alignItems='flex-start' justifyContent="flex-start">
              <Typography variant="h2" style={{ color: 'white' }}>
                About us
              </Typography>
              <Typography variant="subtitle2">
                Let's get personal
              </Typography>
              <LearnButton
                color="white"
                bkgColor="white"
                fillArr="white"
              />
            </Grid>
          </Grid>
          <Grid item sm style={{ marginRight: '5em'}}>
            <Grid container direction="column" alignItems='flex-end' justifyContent="flex-end">
              <Typography variant="h2" style={{ color: 'white' }}>
                Contact us
              </Typography>
              <Typography variant="subtitle2">
                Say hello!
              </Typography>
              <LearnButton
                color="white"
                bkgColor="white"
                fillArr="white"
              />
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.info}/>
      </Grid>
    </Grid>
  );
};

export default About;
