import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function AboutMe() {
  return (
    <section id="about">
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <div>Image will go here</div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" component="h3" gutterBottom>
            <span>Trip Pruitt: </span>
            <span>Rotating Text here</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            From inner city Boston to Alabama fraternities, I’ve never found a
            place I wasn’t able to fit in.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Product of being a Navy brat, I guess.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I’m adaptable.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I’ll talk sports and grill anywhere and with anyone.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I approach software engineering the same way.
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            Call to external API here
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutMe;
