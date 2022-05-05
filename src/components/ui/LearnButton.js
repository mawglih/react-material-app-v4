 import Button from "@material-ui/core/Button";
 import { makeStyles, useTheme } from "@material-ui/core";
 import ButtonArrow from "./ButtonArrow";
 
 const useStyles = makeStyles(theme => ({
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
 }));

 const LearnButton = ({
   color,
   bkgColor,
   fontOvrd,
   fillArr,
 }) => {

  const classes = useStyles();
  const theme = useTheme();
  return (
  <Button
    variant="outlined"
    className={classes.learnButton}
    style={{color: color, borderColor: bkgColor, fontFamily: fontOvrd}}
  >
    <span className={classes.learnText}>Learn More</span>
    <ButtonArrow width={15} height={15} fill={fillArr ? fillArr : theme.palette.common.blue}/>
  </Button>
  );
 }
 
 export default LearnButton;
 
