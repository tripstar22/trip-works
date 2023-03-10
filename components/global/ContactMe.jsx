import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
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
          <Container maxWidth="md">
            <form>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    helperText="First Name is required"
                    label="First Name"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    helperText="Last Name is required"
                    label="Last Name"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Company" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    helperText="A description is required"
                    label="How may I help you?"
                    multiline
                    required
                    rows={8}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained">Submit</Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Paper>
      </Container>
    </section>
  );
}

export default ContactMe;
