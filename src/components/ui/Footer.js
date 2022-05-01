import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>Here we are</footer>
  )
};

export default Footer;
