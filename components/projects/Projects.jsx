/* react imports */
import React from 'react';

/* mui imports */
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <section id="work">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography component="h4" gutterBottom variant="h3">
              Work
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  alt="write description here"
                  component="img"
                  height="220"
                  image="https://picsum.photos/300/200"
                />
                <CardContent>
                  <Typography component="h5" gutterBottom variant="h5">
                    Lorem ipsum dolor
                  </Typography>
                  <Typography component="h6" gutterBottom variant="h6">
                    My Role: <span>Front End Engineer</span>
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Faucibus nisl tincidunt eget nullam non nisi est.
                    Elementum facilisis leo vel fringilla est ullamcorper eget
                    nulla facilisi.
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    Learn More
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  alt="write description here"
                  component="img"
                  height="220"
                  image="https://picsum.photos/300/200"
                />
                <CardContent>
                  <Typography component="h5" gutterBottom variant="h5">
                    Vestibulum mattis ullamcorper
                  </Typography>
                  <Typography component="h6" gutterBottom variant="h6">
                    My Role: <span>Front End Engineer</span>
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    Faucibus nisl tincidunt eget nullam non nisi est. Elementum
                    facilisis leo vel fringilla est ullamcorper eget nulla
                    facilisi. Laoreet suspendisse interdum consectetur libero id
                    faucibus nisl tincidunt. Urna cursus eget nunc scelerisque.
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    Learn More
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  alt="write description here"
                  component="img"
                  height="220"
                  image="https://picsum.photos/300/200"
                />
                <CardContent>
                  <Typography component="h5" gutterBottom variant="h5">
                    Quis eleifend quam
                  </Typography>
                  <Typography component="h6" gutterBottom variant="h6">
                    My Role: <span>Front End Engineer</span>
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    Fermentum leo vel orci porta non pulvinar. Feugiat in
                    fermentum posuere urna nec tincidunt praesent. Viverra
                    accumsan in nisl nisi scelerisque eu. Phasellus faucibus
                    scelerisque eleifend donec. In est ante in nibh mauris
                    cursus. Diam ut venenatis tellus in metus vulputate eu.
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    Learn More
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
