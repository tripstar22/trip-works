// * third party library imports *
import JotformEmbed from 'react-jotform-embed';
import PropTypes from 'prop-types';

// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// * custom component imports *
import BackgroundVideo from '../../ui/background-video/BackgroundVideo';
import ButtonLink from '../../ui/button-link/ButtonLink';
import RevealOnScroll from '../../ui/reveal-on-scroll/RevealOnScroll';

// * styles imports *
import classes from './_contact.module.scss';

function Contact({ contactContent }) {
  // * cms content *
  const {
    backgroundVideo,
    backgroundVideoImage,
    cta,
    heading,
  } = contactContent;
  const imageUrl = backgroundVideoImage.fields.file.url;
  const videoUrl = backgroundVideo.fields.file.url;
  const {
    ctaHref,
    ctaRel,
    ctaTarget,
    ctaText,
  } = cta;

  return (
    <section className={`section ${classes.contact}`} id="contact">
      <BackgroundVideo
        autoPlay="autoplay"
        loop
        playsInline
        poster={imageUrl}
        src={videoUrl}
        type="video/mp4"
      />
      <RevealOnScroll
        aniTyped
        end="top top"
        speed={1.5}
        start="55% bottom"
        text={heading}
        textElement="#aniTextContact"
      >
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                className={classes.contact_heading}
                aria-label={heading}
                component="h2"
                gutterBottom
                id="aniTextContact"
                variant="h2"
              />
              <div
                className={`${classes.contact_buttonContainer} ${classes.contact_buttonContainer___paddingBottom}`}
              >
                <ButtonLink
                  className={classes.contact_link}
                  href={ctaHref}
                  rel={ctaRel}
                  target={ctaTarget}
                >
                  {ctaText}
                </ButtonLink>
              </div>
            </Grid>
          </Grid>
          <Paper className={classes.contact_container} elevation={2}>
            <Container maxWidth="md">
              <div id="contactForm">
                <JotformEmbed src="https://form.jotformeu.com/240076360593052" />
              </div>
            </Container>
          </Paper>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

Contact.propTypes = {
  contactContent: PropTypes.object.isRequired,
};

export default Contact;
