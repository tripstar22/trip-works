import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function HomeHero() {
  return (
    <section>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h1" component="h1" gutterBottom>
            Trip Pruitt
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Front End Engineer
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default HomeHero;
