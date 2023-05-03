/* react imports */
import React, { useEffect } from 'react';

/* library imports */
import { Link } from 'react-scroll';
import Typed from 'typed.js';

/* mui icon imports */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* styles imports */
import classes from '../styles/_hero.module.scss';

function HomeHero() {
  function animateTypeHandler() {
    useEffect(() => {
      const animateElement = document.getElementById('animateType');
      const options = {
        showCursor: false,
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
    <section className={`${classes.hero} ${classes.hero___home}`}>
      <div className={classes.hero_background} />
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.hero_content}>
              <Typography 
                className={classes.hero_heading}
                component="h1" 
                gutterBottom 
                variant="h1"
              >
                Trip Pruitt
              </Typography>
              <Typography
                className={classes.hero_subheading}
                component="h2"
                id="animateType"
                gutterBottom
                onLoad={animateTypeHandler()}
                variant="h4"
              ></Typography>
            </div>
            <Link 
              className={classes.hero_scroll_link}
              duration={250}
              smooth={true}
              spy={true}
              tabIndex="0"
              to="about"
            >
              <KeyboardArrowDownIcon 
                className={classes.hero_arrow}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default HomeHero;
