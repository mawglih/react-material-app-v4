import Grid from "@material-ui/core/Grid";
import Typography  from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LearnButton from "./LearnButton";
import infoBkg from '../../assets/infoBkg2.png';
import mobileBkg from '../../assets/mobileBkg.png';
import EstimateButton from "./EstimateButton";


const useStyles = makeStyles(theme => ({
  container: {
    height: '60em',
  },
  info: {
    backgroundImage: `url(${infoBkg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    opacity: 1,
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${mobileBkg})`,
      backgroundAttachment: 'inherit',
    }
  }, 
}));

const CallToActions = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
 return (
   <Grid
    container
    className={[`${classes.container} ${classes.info}`]}
    alignItems='center'
    justify={matches ? 'centered' : 'space-between'}
    direction={matches ? 'column' : 'row'}
  >
     <Grid item style={{marginLeft: matches ? 0 : '5em', textAlign: matches ? 'center' : 'inherit'}}>
       <Grid container direction="column">
         <Typography variant="h2">
          Simple Actions <br/> Revolutionary results
         </Typography>
         <Typography variant="subtitle2" style={{fontSize:'1.5rem'}}>
          Take advantage of technology of 21st century
         </Typography>
         <Grid container item justify={matches ? 'center' : 'undefined'}>
          <LearnButton/>
         </Grid>
       </Grid>
     </Grid>
     <Grid item style={{marginTop: '2em', marginLeft: matches ? 0 : '5em',}}>
      <EstimateButton
        height={80}
        width={205}
        fontSize="1.4rem"
        variant='outlined'
        marginRight={matches ? 0 : '5em'}
        marginLeft={matches ? 0 : '2em'}
      />
     </Grid>
   </Grid>
 );
}

export default CallToActions;
