/* react imports */
import React from 'react';

/* mui icon imports */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom module imports */
import aniType from '../../modules/aniType';
import aniScroll from '../../modules/aniScroll';

/* custom component imports */
import AppLink from '../ui/app-link/AppLink';
import BackgroundVideo from '../ui/background-video/BackgroundVideo';
import RevealOnScroll from '../utilities/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_hero.module.scss';

function HeroHome() {
  return (
    <section className={`${classes.hero} ${classes.hero___home}`}>
      <BackgroundVideo
        autoPlay="autoplay"
        loop={true}
        muted={true}
        src="/movies/forest-path.mp4"
        type="video/mp4"
      />
      <RevealOnScroll dataEnd="top top" dataStart="bottom bottom">
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <div className={classes.hero_content}>
                <Typography
                  className={`${classes.hero_heading} ${classes.hero_heading___home}`}
                  component="h1"
                  gutterBottom
                  variant="h1"
                >
                  Trip Pruitt
                </Typography>
                <Typography
                  className={`${classes.hero_subheading} ${classes.hero_subheading___home}`}
                  component="h2"
                  id="aniHeroHeading"
                  gutterBottom
                  onLoad={aniType(
                    false,
                    0,
                    false,
                    200,
                    'aniHeroHeading',
                    false,
                    50,
                    ['Frontend ^200 Engineer']
                  )}
                  variant="h4"
                />
              </div>
              <AppLink
                href="#about"
                className={classes.hero_scrollLink}
                dataTarget="about"
                onClick={aniScroll}
              >
                <KeyboardArrowDownIcon className={classes.hero_arrow} />
              </AppLink>
            </Grid>
          </Grid>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

export default HeroHome;
