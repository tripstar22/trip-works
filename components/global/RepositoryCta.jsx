/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function RepositoryCta() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography component="h5" gutterBottom variant="h5">
              Interested in how I built my portfolio site?
            </Typography>
            <Typography gutterBottom variant="body1">
              You can <a href="https://github.com/tripstar22/trip-works" target="_blank">view my repo on GitHub</a> to learn more about the tech stack, and logic that I used to create it!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default RepositoryCta;
