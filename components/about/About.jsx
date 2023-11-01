/* react imports */
import React from 'react';

/* third party library imports */
import RichText from '@madebyconnor/rich-text-to-jsx';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_about.module.scss';

function About({ aboutContent }) {
  const { content, heading } = aboutContent;

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
        text={heading}
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
                  {content.map((item, index) => (
                    <Typography key={index} gutterBottom variant="body1">
                      {item.item}
                    </Typography>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
