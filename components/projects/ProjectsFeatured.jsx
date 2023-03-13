import React from 'react';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ProjectsFeatured() {
  return (
    <section id="work">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h3" gutterBottom>
              Work
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image="https://picsum.photos/300/200"
                  alt="write description here"
                />
                <CardContent>
                  <Typography variant="h5" component="h4" gutterBottom>
                    Lorem ipsum dolor
                  </Typography>
                  <Typography variant="h6" component="h5" gutterBottom>
                    Front End Engineer
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Faucibus nisl tincidunt eget nullam non nisi est.
                    Elementum facilisis leo vel fringilla est ullamcorper eget
                    nulla facilisi.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image="https://picsum.photos/300/200"
                  alt="write description here"
                />
                <CardContent>
                  <Typography variant="h5" component="h4" gutterBottom>
                    Vestibulum mattis ullamcorper
                  </Typography>
                  <Typography variant="h6" component="h5" gutterBottom>
                    Front End Engineer
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Faucibus nisl tincidunt eget nullam non nisi est. Elementum
                    facilisis leo vel fringilla est ullamcorper eget nulla
                    facilisi. Laoreet suspendisse interdum consectetur libero id
                    faucibus nisl tincidunt. Urna cursus eget nunc scelerisque.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image="https://picsum.photos/300/200"
                  alt="write description here"
                />
                <CardContent>
                  <Typography variant="h5" component="h4" gutterBottom>
                    Quis eleifend quam
                  </Typography>
                  <Typography variant="h6" component="h5" gutterBottom>
                    Front End Engineer
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Fermentum leo vel orci porta non pulvinar. Feugiat in
                    fermentum posuere urna nec tincidunt praesent. Viverra
                    accumsan in nisl nisi scelerisque eu. Phasellus faucibus
                    scelerisque eleifend donec. In est ante in nibh mauris
                    cursus. Diam ut venenatis tellus in metus vulputate eu.
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

export default ProjectsFeatured;
