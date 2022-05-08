import { makeStyles, useTheme }from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import infoBkg from '../../assets/infoBkg2.png';
import CallToActions from "./CallToActions";
import { useMediaQuery } from "@material-ui/core";
import FormWithDialog from "./FormWithDialog";


const useStyles = makeStyles(theme => ({
  title: {
    lineHeight: 2,
  },
  body: {
    color: theme.palette.common.blue,
  },
  background: {
    backgroundImage: `url(${infoBkg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
  },
  icon: {
    color: theme.palette.common.blue,
    padding: '8px 10px 0 2px',
  },
  contacts: {
    marginLeft: '1rem',
  },
  form: {
    padding: '0 1rem 0 1rem',
  },
}));

const Contact = ({
  handleSubmit,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Grid container direction="row">
      <Grid 
        item
        container
        direction="column"
        lg={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item >
              <Typography
                variant="h2"
                className={classes.title}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                className={classes.body}
              >
                We are wayting
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Grid item>
                <Icon className="fa fa-phone-volume" classes={{ root: classes.icon }}/>
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.body}>
                  (201) 638-7297
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center">
              <Grid item>
                <Icon className="fa fa-envelope-open" classes={{ root: classes.icon }}/>
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.body}>
                    olivanov@hotmail.com
                </Typography>
              </Grid>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                className={classes.form}
              >
                <FormWithDialog handleSubmit={handleSubmit} noButton/>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      {matchesMd ? null : (
      <Grid item container className={classes.background} lg={9}>
        <CallToActions />
      </Grid>
      )}
    </Grid>
  );
};

export default Contact;
