/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Skills() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography component="h4" gutterBottom variant="h3">Skills</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                HTML5
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                JavaScript
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                React
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                Next.js
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                Node.js
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                CSS3
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                SCSS
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                Git
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <div>Skill Icon Here</div>
              <Typography component="h5" gutterBottom variant="h5">
                Adobe Creative Cloud
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Skills;
