// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports *
import ButtonLink from '../../ui/button-link/ButtonLink';
import RevealOnScroll from '../../ui/reveal-on-scroll/RevealOnScroll';

// * styles imports *
import classes from './repositoryCta.module.scss';

function RepositoryCta({ repositoryCta }) {
  // * cms content
  const { content, cta, heading } = repositoryCta;
  const { ctaHref, ctaTarget, ctaText } = cta;

  return (
    <section
      className={`section section___paddingSmall ${classes.repositoryCta}`}
    >
      <RevealOnScroll end="top 60%" start="bottom 60%">
        <Container maxWidth="lg">
          <Grid justifyContent="center" container spacing={0}>
            <Grid item xs={12}>
              <Typography component="h5" gutterBottom variant="h5">
                {heading}
              </Typography>
              <div className={classes.repositoryCta_content}>
                <Typography gutterBottom variant="body1">
                  {content}
                </Typography>
              </div>
              <ButtonLink href={ctaHref} target={ctaTarget}>
                {ctaText}
              </ButtonLink>
            </Grid>
          </Grid>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

RepositoryCta.propTypes = {
  repositoryCta: PropTypes.object.isRequired,
};

export default RepositoryCta;
