import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ContactMe() {
  return (
    <section id="contact">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h2" gutterBottom>
            Y‘all ready to code?
          </Typography>
          <Button variant="contained">View Résumé</Button>
          <div>
            Form goes here
          </div>
        </Grid>
      </Grid>
      <div>This is the contact section</div>
    </section>
  );
}

export default ContactMe;
