// * next.js imports *
import dynamic from 'next/dynamic';

// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports *
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

// * styles imports *
import classes from './labdetail.module.scss';

// * separate functions for loading and error states *
const LoadingMessage = function dynamicComponentLoading() {
  return (
    <Typography gutterBottom variant="body2">
      Loading…
    </Typography>
  );
};
const ErrorMessage = function dynamicComponentError() {
  return (
    <Typography gutterBottom variant="body2">
      Component not found
    </Typography>
  );
};

function LabDetail({ lab }) {
  // * cms content *
  const { componentName } = lab.fields;
  const { componentNameSlug } = lab.fields;
  const { description } = lab.fields;
  const { featuredImage } = lab.fields;
  const { title } = lab.fields;

  // * import dynamic component if componentName provided *
  let DynamicComponent = null;
  if (componentName) {
    // * ensure we are returning the correct component *
    try {
      DynamicComponent = dynamic(
        () => import(`../lab-items/${componentNameSlug}`).then(
          (mod) => mod.default || mod,
        ),
        {
          loading: () => LoadingMessage,
          ssr: false, // * disable SSR for this component *
        },
      );
    } catch (error) {
      console.error(`Failed to load ${componentName}`, error);
      DynamicComponent = () => ErrorMessage;
    }
  }

  return (
    <div className={classes.labdetail}>
      <RevealOnScroll end="top top" speed={1.75} start="top bottom">
        <section className={`section ${classes.labdetail_section}`}>
          <div className={classes.labdetail_hero}>
            <div
              className={classes.labdetail_heroBg}
              style={{
                backgroundImage: `url(${featuredImage.fields.file.url})`,
              }}
            />
            <div className={classes.labdetail_heroGradient} />
            <div className={classes.labdetail_heroContainer}>
              <Container maxWidth="lg">
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.labdetail_heading}
                      component="h1"
                      gutterBottom
                      variant="h1"
                    >
                      {title}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.labdetail_description}>
            <Container maxWidth="lg">
              <Grid justifyContent="center" container spacing={0}>
                <Grid item xs={12} md={10}>
                  {description.content.map((item) => (
                    <Typography
                      key={item.content[0].value}
                      className={classes.tradingcard_text}
                      gutterBottom
                      variant="body1"
                    >
                      {item.content[0].value}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </div>
        </section>
        <section className="section section___noPaddingTop">
          <div className={classes.labdetail_item}>
            {DynamicComponent && <DynamicComponent />}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}

LabDetail.propTypes = {
  lab: PropTypes.object.isRequired,
};

export default LabDetail;
