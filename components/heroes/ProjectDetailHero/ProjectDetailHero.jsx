import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ProjectDetailHero() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography component="h1" gutterBottom variant="h1">
              Project Title Here
            </Typography>
            <Typography component="h2" gutterBottom variant="h4">
              My Role: <span>Front End Engineer</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ProjectDetailHero;
