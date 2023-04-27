import React, { useEffect } from 'react';

import Typed from 'typed.js';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function HomeHero() {
  function animateTypeHandler() {
    useEffect(() => {
      const animateElement = document.getElementById('jsAnimateType');
      const options = {
        startDelay: 200,
        strings: ['Front End ^300 Engineer'],
        typeSpeed: 50,
      };

      const animateType = new Typed(animateElement, options);

      return () => {
        animateType.destroy();
      };
    });
  }

  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography component="h1" gutterBottom variant="h1">
              Trip Pruitt
            </Typography>
            <Typography
              component="h2"
              id="jsAnimateType"
              gutterBottom
              onLoad={animateTypeHandler()}
              variant="h4"
            ></Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default HomeHero;
