import { makeStyles, useTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({

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
}));
const Hero = () => {

  const classes = useStyles();
  const theme = useTheme();
  return (
    
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
  )
}

export default Hero;
