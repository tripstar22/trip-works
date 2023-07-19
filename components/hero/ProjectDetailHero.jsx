/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* styles imports */
import classes from './_hero.module.scss';

function ProjectDetailHero() {
  return (
    <section className={`${classes.hero} ${classes.hero___project}`}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              className={`${classes.hero_heading} ${classes.hero_heading___project}`}
              component="h1"
              gutterBottom
              variant="h1"
            >
              Georgia Tech Scheller College of Business
            </Typography>
            <Typography
              className={`${classes.hero_subheading} ${classes.hero_subheading___project}`}
              component="h2"
              gutterBottom
              variant="h4"
            >
              My Role:{' '}
              <span className={classes.hero_subheadingJob}>
                Lead Front End Engineer
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ProjectDetailHero;
