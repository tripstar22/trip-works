import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function ContactMe() {
  return (
    <section id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h2" gutterBottom>
              Y‘all ready to code?
            </Typography>
            <Button variant="contained">View Résumé</Button>
          </Grid>
        </Grid>
        <Paper elevation={2}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              Form goes here
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  );
}

export default ContactMe;
