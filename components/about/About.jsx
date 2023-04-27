import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Location from '../location/Location';

function About() {
  return (
    <section id="about">
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <div>Image will go here</div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography component="h3" gutterBottom variant="h3">
            <span>Trip Pruitt: </span>
            <span>Rotating Text here</span>
          </Typography>
          <Typography gutterBottom variant="body1">
            From inner city Boston to Alabama fraternities, I’ve never found a
            place I wasn’t able to fit in.
          </Typography>
          <Typography gutterBottom variant="body1">
            Product of being a Navy brat, I guess.
          </Typography>
          <Typography gutterBottom variant="body1">
            I’m adaptable.
          </Typography>
          <Typography gutterBottom variant="body1">
            I’ll talk sports and grill anywhere and with anyone.
          </Typography>
          <Typography gutterBottom variant="body1">
            I approach software engineering the same way.
          </Typography>
        </Grid>
      </Grid>
      <Location />
    </section>
  );
}

export default About;
