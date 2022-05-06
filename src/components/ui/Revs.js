import { makeStyles, useTheme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import Typography from "@material-ui/core/Typography";
import revBack from '../../assets/169.png';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
cardContent: {
    textAlign: 'center',
  },
  card: {
    height: '50em',
    marginTop: '10em',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      height: '16em',
      marginBottom: '1em',
    },
  },
  override: {
    marginTop: 0,
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
      borderRadius: 0,
      marginTop: 0,
      marginBottom: 0,
      padding: '3em',
    },
  },
    learnButtonAbout: {
    borderColor: 'white',
    color: 'white',
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'RobocardContent',
    textAlign: 'center',
  },
}));

const Revs = () => {

  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const override = pathname === '/revs';

  return (
   <Grid item>
      <Grid container justify="center" className={override ? [`${classes.card} ${classes.override}`] : classes.override}>
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
    </Grid>
  );
};

export default Revs;
