/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

/* custom component imports */
import BackgroundVideo from '../../ui/background-video/BackgroundVideo';
import ButtonAction from '../../ui/button-action/ButtonAction';
import ButtonLink from '../../ui/button-link/ButtonLink';

/* styles imports */
import classes from './_contact.module.scss';

function Contact() {
  return (
    <section className={`section ${classes.contact}`} id="contact">
      <BackgroundVideo
        autoPlay="autoplay"
        loop={true}
        muted={true}
        src="/movies/misty-forest.mp4"
        type="video/mp4"
      />
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              className={classes.contact_heading}
              component="h2"
              gutterBottom
              variant="h2"
            >
              Let‘s connect
            </Typography>
            <div
              className={`${classes.contact_buttonContainer} ${classes.contact_buttonContainer___paddingBottom}`}
            >
              <ButtonLink
                className={classes.contact_link}
                href="/files/trip-pruitt-resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Résumé
              </ButtonLink>
            </div>
          </Grid>
        </Grid>
        <Paper className={classes.contact_container} elevation={2}>
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
                  <div className={classes.contact_buttonContainer}>
                    <ButtonAction>Submit</ButtonAction>
                  </div>
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
