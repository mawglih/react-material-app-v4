import { Card, CardContent, makeStyles, useTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import Typography from "@material-ui/core/Typography";
import revBack from '../../assets/169.png';
import aboutBkg from '../../assets/aboutbkg.png';

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
  buttons: {
    marginTop: '5em',
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '1rem',
    height: 45,
    width: 145,

  },
  learnText: {
    marginRight: '10px',
  },
  cardContent: {
    textAlign: 'center',
  },
  card: {
    height: '50em',
    marginTop: '10em',
    position: 'relative',
  },
  revolutionBackground: {
    backgroundImage: `url(${revBack})`,
    backgroundPosition: 'center',
    backgroundSize: '100px auto',
    backgroundRepeat: 'repeat',
    height: '100%',
    width: '100%'
  },
  revCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0 8em 0',
      borderRadius: 0,
    },
  },
  about: {
    height: '80em'
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
  }
}));
const Hero = () => {

  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography align="center" variant="h2"> Bringing West Coast Technology<br />to the Midwest</Typography>
            <Grid container direction="row" justify='center' className={classes.buttons}>
              <Grid item>
                <Button
                  className={classes.estimate}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                >
                  <span className={classes.learnText}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" className={classes.card}>
          <Card className={classes.revCard}>
          <CardContent>
            <Grid container direction="column" className={classes.cardContent}>
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                >
                  <span className={classes.learnText}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.revolutionBackground}/>
        </Grid>
        <Grid item>
          <Grid container direction="row" className={classes.about} alignItems='center'> 
            <Grid item container style={{position: 'absolute'}}>
              <Grid sm item style={{ marginLeft: '5em'}}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>
                  About us
                </Typography>
                <Typography variant="subtitle2">
                  Let's get personal
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.learnButtonAbout}
                >
                  <span className={classes.learnText}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={'white'}/>
                </Button>
              </Grid>
            </Grid>
            <Grid item sm style={{ marginRight: '5em', textAlign: 'right'}}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>
                  Contact us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.learnButtonAbout}
                >
                  <span className={classes.learnText}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={'white'}/>
                </Button>
              </Grid>
            </Grid>
            </Grid>
            <div className={classes.info}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hero;
