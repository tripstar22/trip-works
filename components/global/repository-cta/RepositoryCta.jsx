/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import RevealOnScroll from '../../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_repositoryCta.module.scss';

function RepositoryCta() {
  return (
    <section
      className={`section section___paddingSmall ${classes.repositoryCta}`}
    >
      <RevealOnScroll end="top top" start="bottom bottom">
        <Container maxWidth="lg">
          <Grid justifyContent="center" container spacing={0}>
            <Grid item xs={12}>
              <Typography component="h5" gutterBottom variant="h5">
                Interested in how I built my portfolio site?
              </Typography>
              <Typography gutterBottom variant="body1">
                You can{' '}
                <a
                  href="https://github.com/tripstar22/trip-works"
                  target="_blank"
                >
                  view my repo on GitHub
                </a>{' '}
                to learn more about the tech stack, and logic that I used to
                create it!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

export default RepositoryCta;
