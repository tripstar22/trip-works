/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import Location from '../location/Location';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_about.module.scss';

function About() {
  return (
    <section
      className={`section section___noPaddingBottom ${classes.about}`}
      id="about"
    >
      <RevealOnScroll
        aniTyped={true}
        end="top 10%"
        speed={1.25}
        start="75% bottom"
        text="Who I am"
        textElement="#aniTextAbout"
      >
        <div className={classes.about_container}>
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={5} md={4}>
                <div className={classes.about_image}>
                  <div className={classes.about_imageImage} />
                </div>
              </Grid>
              <Grid item xs={12} sm={7} md={8}>
                <div className={classes.about_content}>
                  <Typography
                    className={classes.about_name}
                    component="h3"
                    gutterBottom
                    id="aniTextAbout"
                    variant="h3"
                  />
                  <Typography gutterBottom variant="body1">
                    From inner city Boston to Alabama fraternities, I’ve never found a place I wasn’t able to fit in.
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    Product of being a Navy brat, I guess.
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    I’m adaptable.
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    I’ll talk sports and grill anywhere and with anyone.
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    I approach software engineering the same way.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </RevealOnScroll>
      <Location />
    </section>
  );
}

export default About;
