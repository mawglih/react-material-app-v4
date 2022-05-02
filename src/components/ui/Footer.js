import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    height: '15em',
    padding: 0,
    [theme.breakpoints.down('md')]: {
      height: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '7em',
    },
  },
  adorn: {
    height: '100%',
    width: '50%',
    backgroundColor: 'black',
    transform: 'perspective(10px) rotateX(-1deg) translate(-20%, 25px)',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      transform: 'perspective(10px) rotateX(-1deg) translate(-20%, 10px)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'perspective(10px) rotateX(-1deg) translate(-20%, 5px)',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.adorn}>
        footer
      </div>
    </footer>
  )
};

export default Footer;
