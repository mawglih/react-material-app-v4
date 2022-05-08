import { Link } from "react-router-dom";
import { makeStyles, useTheme }from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import EstimateButton from "./EstimateButton";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: '5px',
  },
  button: {
    marginTop: '1em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
}));

const Form = ({
  handleSubmit,
  onClick,
  noButton,
  type,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [val, setVal] = useState({ fullname: '', email: '', phone: '', message: '', });
  const [emailHelper, setEmailHelper] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    let valid;
    const { id, value } = e.target;
    switch(id) {
      case 'email':
        setVal({[id]: value});
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setVal({[id]: value});
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
        if (!valid) {
          setPhoneHelper('Invalid phone number');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        setVal({[id]: value});
    }
    console.log('val in process', val)
    setVal({[id]: value});
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('val', val);
    handleSubmit(val);
    setVal( { fullname: '', email: '', phone: '', message: '', });
  }



  return (
    <>
   <form onSubmit={handleFormSubmit}>
    <Grid item>
      <TextField
        label="Name"
        id="name"
        fullWidth
        value={val.fullname}
        onChange={handleChange}
      />
    </Grid>
    <Grid item>
      <TextField
        label="Email"
        id="email"
        fullWidth
        error={emailHelper.length > 0}
        helperText={emailHelper}
        value={val.email}
        onChange={handleChange}
      />
    </Grid>
    <Grid item>
      <TextField
        label="Phone"
        fullWidth
        error={phoneHelper.length > 0}
        helperText={phoneHelper}
        id="phone"
        value={val.phone}
        onChange={handleChange}
      />
    </Grid>
    <Grid item >
      <TextField
        InputProps={{
          disableUnderline: true,
        }}
        value={val.message}
        fullWidth
        id="message"
        onChange={handleChange}
        multiline
        rows={10}
        className={classes.message}
      />
    </Grid>
    { !noButton && (
      <Grid item className={classes.button}>
        <EstimateButton
          disabled={val?.fullname?.length === 0 || val?.message?.length === 0 || phoneHelper?.length > 0 || emailHelper?.length > 0}
          variant="contained"
          iconClass="fa fa-plane-departure"
          width={245}
          fontSize='1rem'
          type={type}
          onClick={e => onClick(setOpen(true))}
        >
          Send Message
        </EstimateButton>
      </Grid>)
    }
   </form>
      <Grid item className={classes.button}>
        <EstimateButton
          disabled={val?.fullname?.length === 0 || val?.message?.length === 0 || phoneHelper?.length > 0 || emailHelper?.length > 0}
          variant="contained"
          iconClass="fa fa-plane-departure"
          width={245}
          fontSize='1rem'
          type={type}
          onClick={e => onClick(setOpen(true))}
        >
          Send Message
        </EstimateButton>
      </Grid>
  <Dialog open={open} onChange={() => setOpen(false)}>
    <DialogContent>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h4" gutterBottom>Confirm Message</Typography>
          
          <Button color="primary" onClick={() => setOpen(false)}>Cancel</Button>
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
  </>
  );
};

export default Form;
