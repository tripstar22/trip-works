// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports *
import Gallery from '../gallery/Gallery';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

// * styles imports *
import classes from './_projectdetail.module.scss';

function ProjectDetail({ project }) {
  return (
    <div className={classes.projectdetail}>
      <RevealOnScroll
        aniTyped={true}
        end="top top"
        speed={1.75}
        start="30% bottom"
        text={project.fields.role}
        textElement="#aniJobTitle"
      >
        <section className={classes.projectdetail_titleSection}>
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography
                  className={classes.projectdetail_heading}
                  component="h1"
                  gutterBottom
                  variant="h1"
                >
                  {project.fields.title}
                </Typography>
                <Typography
                  className={classes.projectdetail_subheading}
                  component="h2"
                  gutterBottom
                  variant="h4"
                >
                  My Role:{' '}
                  <span
                    className={classes.projectdetail_subheadingJob}
                    id="aniJobTitle"
                  />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Gallery project={project} />
      </RevealOnScroll>
    </div>
  );
}

export default ProjectDetail;
