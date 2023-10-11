/* react imports */
import React from 'react';

/* library imports */
import TextTruncate from 'react-text-truncate';
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
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_projects.module.scss';

function Projects() {
  return (
    <section id="work" className={`section ${classes.projects}`}>
      <RevealOnScroll
        aniTyped={true}
        end="top 10%"
        speed={1.25}
        start="25% bottom"
        text="Look what I can do!"
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
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 599: 2, 899: 3 }}
          >
            <Masonry gutter="30px">
              <div>
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
                          textTruncateChild={
                            <span className={classes.projects_more}>
                              Learn More
                            </span>
                          }
                          truncateText="…"
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
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
                          textTruncateChild={
                            <span className={classes.projects_more}>
                              Learn More
                            </span>
                          }
                          truncateText="…"
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
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
                          textTruncateChild={
                            <span className={classes.projects_more}>
                              Learn More
                            </span>
                          }
                          truncateText="…"
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
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
                        Aptos
                      </Typography>
                      <Typography component="h6" gutterBottom variant="h6">
                        My Role: <span>Lead Front End Engineer</span>
                      </Typography>
                      <Typography gutterBottom variant="body1">
                        <TextTruncate
                          element="span"
                          line={5}
                          text="Orci a scelerisque purus semper eget duis at. Cras adipiscing enim eu turpis egestas pretium aenean. Tincidunt ornare massa eget egestas purus viverra accumsan. Lacus sed viverra tellus in hac. A erat nam at lectus urna duis convallis convallis tellus. Enim tortor at auctor urna nunc id cursus metus. Erat velit scelerisque in dictum non consectetur a erat. Vel pretium lectus quam id leo in vitae turpis. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Ut venenatis tellus in metus. Arcu odio ut sem nulla pharetra diam sit amet nisl. Id neque aliquam vestibulum morbi blandit cursus. In ante metus dictum at tempor. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. At auctor urna nunc id cursus metus. Arcu risus quis varius quam. Massa enim nec dui nunc mattis. Amet dictum sit amet justo donec enim diam."
                          textTruncateChild={
                            <span className={classes.projects_more}>
                              Learn More
                            </span>
                          }
                          truncateText="…"
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
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
                        Count Covid
                      </Typography>
                      <Typography component="h6" gutterBottom variant="h6">
                        My Role: <span>Front End Engineer</span>
                      </Typography>
                      <Typography gutterBottom variant="body1">
                        <TextTruncate
                          element="span"
                          line={5}
                          text="Eu feugiat pretium nibh ipsum. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Amet est placerat in egestas erat. Aenean vel elit scelerisque mauris pellentesque. Sodales ut eu sem integer vitae justo eget. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Erat nam at lectus urna duis convallis. Nam at lectus urna duis convallis convallis tellus id interdum. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Eget sit amet tellus cras adipiscing enim eu turpis. Odio ut sem nulla pharetra. Mauris nunc congue nisi vitae."
                          textTruncateChild={
                            <span className={classes.projects_more}>
                              Learn More
                            </span>
                          }
                          truncateText="…"
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
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
                          text="Ac felis donec et odio pellentesque diam volutpat. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Sit amet justo donec enim. Egestas integer eget aliquet nibh praesent tristique magna. Id nibh tortor id aliquet lectus. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa sed elementum tempus egestas sed sed risus pretium. Elit duis tristique sollicitudin nibh sit. Ornare massa eget egestas purus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Non blandit massa enim nec dui nunc mattis enim. Odio euismod lacinia at quis risus sed. Faucibus a pellentesque sit amet porttitor eget. Scelerisque varius morbi enim nunc faucibus a. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Elit ut aliquam purus sit amet luctus venenatis."
                          textTruncateChild={
                            <span className={classes.projects_more}>
                              Learn More
                            </span>
                          }
                          truncateText="…"
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
