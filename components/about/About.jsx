/* third party library imports */
import PropTypes from 'prop-types';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import Location from '../location/Location';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_about.module.scss';

function About({ aboutContent, locationContent }) {
  const { heading, content, image } = aboutContent;
  console.log(image.fields.file.url);

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
                  <img className={classes.about_imageImage} src={image.fields.file.url} alt={image.fields.title} />
                </div>
              </Grid>
              <Grid item xs={12} sm={7} md={8}>
                <div className={classes.about_content}>
                  <Typography
                    component="h3"
                    gutterBottom
                    id="aniTextAbout"
                    variant="h3"
                  />
                  {content.content.map((item, index) => (
                    <Typography key={index} className={classes.about_text} gutterBottom variant="body1">
                      {item.content[0].value}
                    </Typography>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </RevealOnScroll>
      <Location locationContent={locationContent} />
    </section>
  );
}

About.propTypes = {
  aboutContent: PropTypes.object.isRequired,
};

export default About;
