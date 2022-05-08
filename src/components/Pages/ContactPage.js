import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import Contact from '../ui/Contact';

const ContactPage = () => {
  const handleSubmit = data => {
    console.log("data CP", data)
    setData(data);
  }
  const [data, setData] = useState({});

  return (
    <Grid container>
      <Contact handleSubmit={data => handleSubmit(data)}/>
      <Grid item container direction="column"sm>
        {data && (
          <Grid item>
          <Typography variant='subtitle1'>
            <p>{data.fullname}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </Typography>
          <Typography variant='body1'>
            {data.message}
          </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default ContactPage;
