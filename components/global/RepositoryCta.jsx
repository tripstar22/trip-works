import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ButtonLink from '../ui/buttons/ButtonLink';

function RepositoryCta() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" gutterBottom>
              Like what you see??
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can view my repo on GitHub to learn more about the tech stack, and logic that I used to create this site!
            </Typography>
            <ButtonLink href="https://github.com/tripstar22/trip-works">View on GitHub</ButtonLink>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default RepositoryCta;
