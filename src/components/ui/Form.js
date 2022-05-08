import { makeStyles }from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from "react";
import EstimateButton from "./EstimateButton";



const useStyles = makeStyles(theme => ({
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '2em',
    borderRadius: '5px',
  },
  button: {
    marginTop: '1em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1em',
    },
  },
}));

const Form = ({
  handleChange,
  fullname,
  email,
  phone,
  message,
  handleSubmit,
  noButton,
  type,
  emailHelper,
  phoneHelper,
  disabled,
}) => {
  const classes = useStyles();

  const [Fullname, setFullname] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const onValueChange = e => {
    const { id, value } = e.target;
    handleChange(id, value);
  }

  useEffect(() => {
    setFullname(fullname);
    setPhone(phone);
    setEmail(email);
    setMessage(message);
  }, [fullname, message, email, phone])

  return (
    <form onSubmit={handleSubmit}>
      <Grid item>
        <TextField
          label="Name"
          id="fullname"
          fullWidth
          value={Fullname}
          onChange={onValueChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Email"
          id="email"
          fullWidth
          error={emailHelper.length > 0}
          helperText={emailHelper}
          value={Email}
          onChange={onValueChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Phone"
          fullWidth
          error={phoneHelper.length > 0}
          helperText={phoneHelper}
          id="phone"
          value={Phone}
          onChange={onValueChange}
        />
      </Grid>
      <Grid item >
        <TextField
          InputProps={{
            disableUnderline: true,
          }}
          value={Message}
          fullWidth
          id="message"
          onChange={onValueChange}
          multiline
          rows={10}
          className={classes.message}
        />
      </Grid>
      { !noButton && (
        <Grid item className={classes.button}>
          <EstimateButton
            disabled={disabled}
            variant="contained"
            iconClass="fa fa-plane-departure"
            width={245}
            fontSize='1rem'
            type={type}
          >
            Send Message
          </EstimateButton>
        </Grid>)
      }
    </form>
  );
};

export default Form;
