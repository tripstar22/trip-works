/* react imports */
import React from 'react';

/* library imports */
import TextTruncate from 'react-text-truncate';

/* mui imports */
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* styles imports */
import classes from './_projects.module.scss';

function Projects() {
  return (
    <section id="work" className={`section ${classes.projects}`}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography 
              className={classes.projects_heading}
              component="h4" 
              gutterBottom 
              variant="h3"
            >
              Work
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.projects_card}>
              <CardActionArea className={classes.projects_link}>
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
                  <Typography gutterBottom variant="body1">
                    <TextTruncate
                      element="span"
                      line={5}
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur. Cursus sit amet dictum sit amet justo donec. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Lacinia quis vel eros donec ac odio tempor orci. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dictum varius duis at consectetur lorem donec massa sapien. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Dui nunc mattis enim ut tellus elementum sagittis vitae. Nisl nisi scelerisque eu ultrices vitae. Augue mauris augue neque gravida in fermentum. Volutpat maecenas volutpat blandit aliquam etiam erat. Non tellus orci ac auctor augue mauris augue neque gravida. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Urna neque viverra justo nec ultrices dui. Varius duis at consectetur lorem donec. Tincidunt ornare massa eget egestas purus viverra accumsan in. Nibh venenatis cras sed felis eget velit aliquet sagittis."
                      textTruncateChild={<span className={classes.projects_more}>Learn More</span>}
                      truncateText="…"
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.projects_card}>
              <CardActionArea className={classes.projects_link}>
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
                  <Typography gutterBottom variant="body1">
                    <TextTruncate
                      element="span"
                      line={5}
                      text="Tincidunt arcu non sodales neque sodales ut etiam sit. Hendrerit dolor magna eget est lorem ipsum dolor sit. Pretium quam vulputate dignissim suspendisse in est ante. Dolor magna eget est lorem ipsum. Quisque id diam vel quam elementum pulvinar etiam non quam. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Diam vel quam elementum pulvinar. Posuere urna nec tincidunt praesent semper feugiat. Sed id semper risus in hendrerit gravida rutrum quisque. Sagittis nisl rhoncus mattis rhoncus urna neque. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Elementum sagittis vitae et leo duis ut diam quam nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit turpis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Diam vel quam elementum pulvinar. Mi proin sed libero enim sed faucibus turpis in. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Dui nunc mattis enim ut tellus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis."
                      textTruncateChild={<span className={classes.projects_more}>Learn More</span>}
                      truncateText="…"
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.projects_card}>
              <CardActionArea className={classes.projects_link}>
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
                  <Typography gutterBottom variant="body1">
                    <TextTruncate
                      element="span"
                      line={5}
                      text="Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id venenatis a condimentum vitae sapien pellentesque. Lorem mollis aliquam ut porttitor leo a. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Erat pellentesque adipiscing commodo elit at imperdiet dui. Tortor consequat id porta nibh venenatis cras. Nulla facilisi cras fermentum odio. Lacus viverra vitae congue eu consequat ac felis donec. Urna id volutpat lacus laoreet non curabitur gravida arcu. Amet volutpat consequat mauris nunc congue nisi. Quam elementum pulvinar etiam non quam. Sit amet aliquam id diam maecenas ultricies. Hac habitasse platea dictumst quisque sagittis purus. Velit sed ullamcorper morbi tincidunt ornare massa. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ullamcorper eget nulla facilisi etiam dignissim diam. Sit amet mauris commodo quis. Faucibus purus in massa tempor nec."
                      textTruncateChild={<span className={classes.projects_more}>Learn More</span>}
                      truncateText="…"
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Projects;
