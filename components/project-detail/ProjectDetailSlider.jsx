/* react imports */
import React from 'react';

/* library imports */
import Slider from 'react-slick';

/* library styles imports */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* mui imports */
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

/* styles imports */
import classes from './_projectDetailSlider.module.scss';

function ProjectDetailSlider() {
  var sliderSettings = {
    dots: true,
    dotsClass: 'appSlider_dots',
    speed: 250,
  };

  return (
    <div className={`${classes.projectDetailSlider} appSlider`}>
      <Slider {...sliderSettings} className={classes.projectDetailSlider_slider}>
        <div className={classes.projectDetailSlider_slide}>
          <Card className={classes.projectDetailSlider_card}>
            <CardActionArea className={classes.projectDetailSlider_link}>
              <CardMedia
                alt="write description here"
                component="img"
                height="100%"
                image="https://picsum.photos/1800/1013"
              />
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.projectDetailSlider_slide}>
          <Card className={classes.projectDetailSlider_card}>
            <CardActionArea className={classes.projectDetailSlider_link}>
              <CardMedia
                alt="write description here"
                component="img"
                height="100%"
                image="https://picsum.photos/1800/1013"
              />
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.projectDetailSlider_slide}>
          <Card className={classes.projectDetailSlider_card}>
            <CardActionArea className={classes.projectDetailSlider_link}>
              <CardMedia
                alt="write description here"
                component="img"
                height="100%"
                image="https://picsum.photos/1800/1013"
              />
            </CardActionArea>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectDetailSlider;
