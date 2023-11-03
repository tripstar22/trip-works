/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_skills.module.scss';

function Skills({ skillsHeading, skillsItems }) {
  const { heading } = skillsHeading;

  return (
    <section className={`section ${classes.skills}`} id="skills">
      <RevealOnScroll
        aniTyped={true}
        end="top 10%"
        speed={1.5}
        start="90% bottom"
        text={heading}
        textElement="#aniTextSkills"
      >
        <Container maxWidth="lg">
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Typography
                className={classes.skills_heading}
                component="h3"
                gutterBottom
                id="aniTextSkills"
                variant="h3"
              />
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            {skillsItems.map((item, index) => (
              <Grid key={index} item xs={6} md={3}>
                <div className={classes.skills_section}>
                  <div className={classes.skills_icon}>
                    <img src={'https:' + item.fields.image.fields.file.url} fill={true} alt="" />
                  </div>
                  <Typography component="h5" gutterBottom variant="h5">
                    {item.fields.title}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

export default Skills;
