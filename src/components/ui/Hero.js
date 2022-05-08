import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LearnButton from "./LearnButton";
import EstimateButton from "./EstimateButton";

const useStyles = makeStyles(theme => ({
  buttons: {
    marginTop: '5em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5em',
    },
  },
}));
const Hero = () => {

  const classes = useStyles();
  return (
    
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography align="center" variant="h2"> Bringing West Coast Technology<br />to the Midwest</Typography>
            <Grid container direction="row" justify='center' className={classes.buttons}>
              <Grid item>
                <EstimateButton 
                  marginRight={40}
                  variant="outlined"
                  width={145}
                  height={45}
                  fontSize='.9em'
                />
              </Grid>
              <Grid item>
                <LearnButton />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Hero;
