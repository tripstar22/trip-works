import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ButtonAction from '../ui/buttons/ButtonAction';
import ButtonLink from '../ui/buttons/ButtonLink';

function Contact() {
  return (
    <section id="contact" className="contact-me">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography component="h2" gutterBottom variant="h2">
              Y‘all ready to code?
            </Typography>
            <ButtonLink href="/">View Résumé</ButtonLink>
          </Grid>
        </Grid>
        <Paper elevation={2}>
          <Container maxWidth="md">
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="contact-me__textfield"
                    fullWidth
                    helperText="First Name is required"
                    label="First Name"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="contact-me__textfield"
                    fullWidth
                    helperText="Last Name is required"
                    label="Last Name"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="contact-me__textfield"
                    fullWidth
                    helperText="Email address is required"
                    label="Email"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                    className="contact-me__textfield"
                    fullWidth
                    helperText="Company name is required" 
                    label="Company"
                    required 
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className="contact-me__textfield"
                    fullWidth
                    helperText="A description is required"
                    label="How may I help you?"
                    multiline
                    required
                    rows={8}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonAction>Submit</ButtonAction>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Paper>
      </Container>
    </section>
  );
}

export default Contact;
