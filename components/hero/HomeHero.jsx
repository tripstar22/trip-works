/* react imports */
import React from 'react';

/* mui icon imports */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import AppLink from '../ui/AppLink';

/* custom module imports */
import aniType from '../../modules/aniType';
import aniScroll from '../../modules/aniScroll';

/* styles imports */
import classes from './_hero.module.scss';

function HomeHero() {
  return (
    <section className={`${classes.hero} ${classes.hero___home}`}>
      <div className={classes.hero_background} />
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
                  ['Front-End ^300 Engineer']
                )}
                variant="h4"
              ></Typography>
            </div>
            <AppLink
              href="#about" 
              className={classes.hero_scrollLink}
              dataFunctionality="scroll-on-homepage" 
              dataTarget="about" 
              onClick={aniScroll}
            >
              <KeyboardArrowDownIcon className={classes.hero_arrow} />
            </AppLink>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default HomeHero;
