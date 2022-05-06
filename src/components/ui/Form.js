import { Link } from "react-router-dom";
import { makeStyles, useTheme }from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import infoBkg from '../../assets/infoBkg2.png';


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
}));

const Form = ({
  handleSubmit,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        lg={3}
        justify="center"
      >
        <Grid item >ss
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
        <Grid item container>
          <Grid item>
            <Icon className="fa fa-phone-volume" classes={{ root: classes.icon }}/>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.body}>
              (201) 638-7297
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <Icon className="fa fa-envelope-open" classes={{ root: classes.icon }}/>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.body}>
                olivanov@hotmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
};

export default Form;
