import { makeStyles } from "@material-ui/styles";
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  itemContainer: {
    width: '100%',
    height: '200px',
    backgroundColor: theme.palette.secondary.light,
    color: 'white',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '&h2': {
    fontWeight: "bolder",
  },
  order1: {
    gridColumnStart: 1,
    gridRowStart: 1,
  },
    order2: {
    gridColumn: '2 / span 2',
    gridRowStart: 2,
    [theme.breakpoints.down('sm')]: {
      gridColumnStart: 1,
    },
  },
    order3: {
    gridColumnStart: 1,
    gridRowStart: 3,
  },
  imageContainer: {
    padding: '40px',
  },
  textContainer: {
    paddingLeft: '30px',
    textAlign: 'center',
  },
  icon: {
    color: 'red',

  }
}));

const ServiceItem = ({
  title,
  subTitle,
  imageIcon,
  text,
  to,
  order,
}) => {

  const classes = useStyles();
  let myClass = {};
  switch(order) {
    case 1:
      myClass = classes.order1;
      break;
    case 2:
      myClass = classes.order2;
      break;
    case 3:
      myClass = classes.order3;
      break;
    default:
      break;
  };
    
  return (
    <Grid component={Link} to={to}>
      <div className={[`${classes.itemContainer} ${myClass} `]} >
      <div className={classes.textContainer}>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        <p>{text}</p>
      </div>
      <div className={classes.imageContainer}>
        <Icon className={imageIcon} fontSize='large' classes={{ root: classes.icon }}/>
      </div>  
    </div>
    </Grid>
    
  )
}

export default ServiceItem;
