/* third party library imports */
import PropTypes from 'prop-types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

/* mui imports */
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import AppLink from '../ui/app-link/AppLink';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_projects.module.scss';

function Projects({ workHeading }) {
  const { heading } = workHeading;

  return (
    <section id="work" className={`section ${classes.projects}`}>
      <RevealOnScroll
        aniTyped={true}
        end="top 10%"
        speed={1.25}
        start="25% bottom"
        text={heading}
        textElement="#aniTextWork"
      >
        <Container maxWidth="lg">
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Typography
                className={classes.projects_heading}
                component="h3"
                gutterBottom
                id="aniTextWork"
                variant="h3"
              />
            </Grid>
          </Grid>
          <div className={classes.projects_container}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 599: 2, 899: 3 }}
            >
              <Masonry gutter="30px">
                <div>
                  <AppLink
                    href="/projects/georgia-tech-scheller-college-of-business"
                    className={classes.projects_link}
                  >
                    <Card className={classes.projects_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt="write description here"
                          component="img"
                          height="220"
                          image="https://picsum.photos/300/200"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Georgia Tech Scheller College of Business
                          </Typography>
                          <Typography component="h6" gutterBottom variant="h6">
                            My Role: <span>Lead Front End Engineer</span>
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
                <div>
                  <AppLink
                    href="/projects/contec-professional"
                    className={classes.projects_link}
                  >
                    <Card className={classes.projects_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt="write description here"
                          component="img"
                          height="220"
                          image="https://picsum.photos/300/200"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Contec Professional
                          </Typography>
                          <Typography component="h6" gutterBottom variant="h6">
                            My Role: <span>Front End Engineer</span>
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
                <div>
                  <AppLink
                    href="/projects/contec-healthcare"
                    className={classes.projects_link}
                  >
                    <Card className={classes.projects_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt="write description here"
                          component="img"
                          height="220"
                          image="https://picsum.photos/300/200"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Contec Healthcare
                          </Typography>
                          <Typography component="h6" gutterBottom variant="h6">
                            My Role: <span>Front End Engineer</span>
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
                <div>
                  <AppLink
                    href="/projects/aptos"
                    className={classes.projects_link}
                  >
                    <Card className={classes.projects_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt="write description here"
                          component="img"
                          height="220"
                          image="https://picsum.photos/300/200"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Aptos
                          </Typography>
                          <Typography component="h6" gutterBottom variant="h6">
                            My Role: <span>Lead Front End Engineer</span>
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
                <div>
                  <AppLink
                    href="/projects/count-covid"
                    className={classes.projects_link}
                  >
                    <Card className={classes.projects_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt="write description here"
                          component="img"
                          height="220"
                          image="https://picsum.photos/300/200"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Count Covid
                          </Typography>
                          <Typography component="h6" gutterBottom variant="h6">
                            My Role: <span>Front End Engineer</span>
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
                <div>
                  <AppLink
                    href="/projects/contec-professional"
                    className={classes.projects_link}
                  >
                    <Card className={classes.projects_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt="write description here"
                          component="img"
                          height="220"
                          image="https://picsum.photos/300/200"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Contec Professional
                          </Typography>
                          <Typography component="h6" gutterBottom variant="h6">
                            My Role: <span>Front End Engineer</span>
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

Projects.propTypes = {
  workHeading: PropTypes.object.isRequired,
};

export default Projects;
