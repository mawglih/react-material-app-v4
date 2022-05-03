import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '50vh',
    marginTop: '10em',
  },
}));
const Hero = () => {

  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid sm item>
            <Typography align="center" variant="h2"> Bringing West Coast Technology<br />to the Midwest</Typography>
            <Grid container direction="row" justify='flex-end'>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                >
                  Learn More
                  <ButtonArrow width={15} height={15} fill='red'/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hero;
