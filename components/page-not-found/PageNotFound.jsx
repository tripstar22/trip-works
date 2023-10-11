/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/* custom component imports */
import AppLink from '../ui/app-link/AppLink';
import BackgroundVideo from '../ui/background-video/BackgroundVideo';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_pagenotfound.module.scss';

function PageNotFound() {
  return (
    <section className={classes.pagenotfound}>
      <BackgroundVideo
        autoPlay="autoplay"
        loop={true}
        muted={true}
        src="/movies/misty-flythrough.mp4"
        type="video/mp4"
      />
      <RevealOnScroll end="top 10%" start="30% bottom">
        <div className={classes.pagenotfound_container}>
          <Container maxWidth="lg">
            <Paper className={classes.pagenotfound_inner} elevation={2}>
              <Container maxWidth="md">
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography component="h1" gutterBottom variant="h1">
                      Sorry, this page does not exist, or has been removed.
                    </Typography>
                    <Typography component="h6" gutterBottom variant="h6">
                      Feel free to visit the{' '}
                      <AppLink className={classes.pagenotfound_link} href="/">
                        home page
                      </AppLink>
                      .
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Paper>
          </Container>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default PageNotFound;
