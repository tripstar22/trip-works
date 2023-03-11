import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function HomeHero() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" gutterBottom>
              Trip Pruitt
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              Front End Engineer
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default HomeHero;
