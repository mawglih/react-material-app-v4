import { makeStyles } from "@material-ui/core";
import ServiceItem from "./ui/ServiceItem";

const useStyles = makeStyles(theme => ({
  serviceContainer: {
    marginTop: '5vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 2fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridColumnGap: '10px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '100%',
      gridTemplateRows: 'auto',
      gridRowGap: '1rem',
    },
    '& a':{
      textDecoration: 'none',
    },
  },

}));

const serviceItems = [
  { title: 'Custom Software Development', subTitle: 'Save', text: 'Complete digital solutions from investigation to finish.', imageIcon : 'fa-solid fa-window-restore', order: 1, to: '/custom'},
  { title: 'Mobile Development', subTitle: 'Save', text: 'Complete digital solutions from investigation to finish.', imageIcon : 'fa-brands fa-dribbble', order: 2, to: '/mobile'},
  { title: 'Web Development', subTitle: 'Save', text: 'Complete digital solutions from investigation to finish.', imageIcon : 'fa-brands fa-safari', order: 3, to: '/websites'},
];

const Services = () => {
const classes = useStyles();
  return (
    <div className={classes.serviceContainer}>
      {serviceItems.map(({ title, subTitle, text, imageIcon, order, to }) => (
        <ServiceItem
          title={title}
          text={text}
          imageIcon={imageIcon}
          subTitle={subTitle}
          order={order}
          to={to}
        />
      ))}
    </div>
  );
};

export default Services;
