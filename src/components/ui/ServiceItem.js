import { makeStyles } from "@material-ui/styles";
import Icon from '@material-ui/core/Icon';
import LearnButton from "./LearnButton";

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
  overrideClass1: {
    gridColumnStart: 3,
    gridRowStart: 1,
    [theme.breakpoints.down('sm')]: {
      gridColumnStart: 1,
    },
  },
  overrideClass2: {
    gridColumn: '1 / span 2',
    gridRowStart: 2,
  },
  overrideClass3: {
    gridColumnStart: 3,
    gridRowStart: 3,
    [theme.breakpoints.down('sm')]: {
      gridColumnStart: 1,
    },
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
  overrideClass,
}) => {


  const classes = useStyles();
  let myClass = {};

  if (overrideClass) {
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
  } else {
    switch(order) {
      case 1:
        myClass = classes.overrideClass1;
        break;
      case 2:
        myClass = classes.overrideClass2;
        break;
      case 3:
        myClass = classes.overrideClass3;
        break;
      default:
        break;
    };
  };
  return (
    
      <div className={[`${classes.itemContainer} ${myClass}`]} >
        <div className={classes.textContainer}>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        <p>{text}</p>
        <LearnButton 
          bkgColor="white"
          fillArr="white"
          color="white"
        />
      </div>
      <div className={classes.imageContainer}>
        <Icon className={imageIcon} fontSize='large' classes={{ root: classes.icon }}/>
      </div>  

    </div>
    
    
  )
}

export default ServiceItem;
