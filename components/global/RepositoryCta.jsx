import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function RepositoryCta() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" gutterBottom>
              Interested in how I built my portfolio site?
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can <a href="https://github.com/tripstar22/trip-works" target="_blank">view my repo on GitHub</a> to learn more about the tech stack, and logic that I used to create it!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default RepositoryCta;
