import { makeStyles }from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useState } from "react";
import EstimateButton from "./EstimateButton";
import MyDialog from "./Dialog";
import Form from "./Form";

const useStyle = makeStyles(theme => ({
  button: {
    marginTop: '1em',
  },
}));

const FormWithDialog = ({
  handleSubmit,

}) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [fullname, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [data, setData] = useState({ fullname: '', email: '', phone: '', messsage: '', })
  const handleChange = (id, value) => {
    let valid;
    switch(id) {
      case 'fullname':
        setFullName(value);
        break;
      case 'phone':
        setPhone(value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
        if (!valid) {
          setPhoneHelper('Invalid phone number');
        } else {
          setPhoneHelper('');
        }
        break;
      case 'email':
        setEmail(value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const clearData = () => {
    setData({ fullname: '', email: '', phone: '', messsage: '', });
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setEmailHelper('');
    setPhoneHelper('');
  }

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = (val) => {
    setOpen(val);
  }
  
  const handleFormSubmit = e => {
    e.preventDefault();
    setData({fullname, email, phone, message});
    handleSubmit(data);
    setOpen(false);
    clearData();
    // setData( { fullname: '', email: '', phone: '', message: '', });
  }

  const disabled= fullname?.length === 0 || message?.length === 0 || phoneHelper?.length > 0 || emailHelper?.length > 0;
  
  console.log('result', data);

  return (
    <>
      <Form 
        noButton
        handleChange={handleChange}
        fullname={fullname}
        email={email}
        phone={phone}
        message={message}
        emailHelper={emailHelper}
        phoneHelper={phoneHelper}
      />
      <MyDialog
        outsideOpen={open}
        closeDialog={handleClose}
      >
        <Form
          type="submit"
          handleChange={handleChange}
          fullname={fullname}
          email={email}
          phone={phone}
          message={message}
          handleSubmit={e => handleFormSubmit(e)}
          emailHelper={emailHelper}
          phoneHelper={phoneHelper}
          disabled={disabled}
        />
      </MyDialog>
      <Grid item className={classes.button}>
        <EstimateButton
          disabled={disabled}
          variant="contained"
          iconClass="fa fa-plane-departure"
          width={245}
          fontSize='1rem'
          type="button"
          onClick={handleOpen}
        >
          Send Message
        </EstimateButton>
      </Grid>
    </>
  )
}

export default FormWithDialog; 
