/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* mui icon imports */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom js animation imports */
import aniScroll from '../../../src/js/ani-scroll/aniScroll';

/* custom component imports */
import AppLink from '../../ui/app-link/AppLink';
import BackgroundVideo from '../../ui/background-video/BackgroundVideo';
import RevealOnScroll from '../../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_hero.module.scss';

function HeroHome({ homeHeroContent }) {
  const { backgroundVideo, heading, subheading } = homeHeroContent;
  const videoUrl = backgroundVideo.fields.file.url;

  return (
    <section className={`${classes.hero} ${classes.hero___home}`}>
      <BackgroundVideo
        autoPlay="autoplay"
        loop={true}
        muted={true}
        src={videoUrl}
        type="video/mp4"
      />
      <RevealOnScroll
        aniTyped={true}
        end="top top"
        speed={1.25}
        start="bottom bottom"
        text={subheading}
        textElement="#aniHeroHeading"
      >
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
                  {heading}
                </Typography>
                <Typography
                  className={`${classes.hero_subheading} ${classes.hero_subheading___home}`}
                  component="h2"
                  id="aniHeroHeading"
                  gutterBottom
                  variant="h4"
                />
              </div>
              <AppLink
                href="#about"
                className={classes.hero_scrollLink}
                ariaLabel="scroll to about"
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

HeroHome.propTypes = {
  homeHeroContent: PropTypes.object.isRequired,
};

export default HeroHome;