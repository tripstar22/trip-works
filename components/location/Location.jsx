/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* styles imports */
import classes from './_location.module.scss';

// User-Agent: (localhost:8080, trip.pruitt.works@gmail.com)
// https://api.weather.gov/points/33.753746,-84.386330
// https://api.weather.gov/gridpoints/FFC/51,87/forecast/hourly

function Location() {
  return (
    <section className={`section section___paddingSmall ${classes.location}`}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} md={4}>
            <div>Weather icon here</div>
            <div>Weather info here</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography component="h5" gutterBottom variant="h5">
              I currently live in the Metro Atlanta area, and am open to remote
              work!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Location;
