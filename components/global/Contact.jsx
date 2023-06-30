/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

/* custom component imports */
import ButtonAction from '../ui/ButtonAction';
import ButtonLink from '../ui/ButtonLink';

/* custom module imports */
import aniType from '../../modules/aniType';

/* styles imports */
import classes from './_contact.module.scss';

function Contact() {
  return (
    <section className={`section ${classes.contact}`} id="contact">
      <video 
        autoPlay="autoplay"
        className={classes.contact_video} 
        loop={true}
        muted={true}
      >
        <source src="/movies/misty-forest-2.mp4" type="video/mp4" />
        <p>Your browser does not support HTML5 video.</p>
      </video>
      <div className={classes.contact_background} />
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography 
              className={classes.contact_heading}
              component="h2" 
              gutterBottom 
              id="aniContactHeading"
              onLoad={aniType(
                false, 
                0,
                false, 
                200, 
                'aniContactHeading', 
                false, 
                50, 
                ['Y‘all ready ^100 to code?']
              )}
              variant="h2"
            />
            <div className={`${classes.contact_buttonContainer} ${classes.contact_buttonContainer___paddingBottom}`}>
              <ButtonLink href="/" className={classes.contact_link}>View Résumé</ButtonLink>
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
