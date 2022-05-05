 import Button from "@material-ui/core/Button";
 import { makeStyles } from "@material-ui/core";
 
 const useStyles = makeStyles(theme => ({
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },  
  estimateText: {
    marginRight: '10px',
  },
 }));

 const EstimateButton = ({
   height,
   width,
   bRadius,
   fontSize,
   marginRight,
   marginLeft,
 }) => {

  const classes = useStyles();
  return (
  <Button
    variant="outlined"
    className={classes.estimate}
    style={{height:height, width: width, borderRadius: bRadius, fontSize: fontSize, marginRight: marginRight, marginLeft: marginLeft}}
  >
    <span className={classes.estimateText}>Free Estimate</span>
  </Button>
  );
 }
 
 export default EstimateButton;
 
