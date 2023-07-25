/* react imports */
import React, { useState } from 'react';

/* library imports */
import Slider from 'react-slick';

/* library styles imports */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* mui imports */
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

/* custom component imports */
import AppModal from '../app-modal/AppModal';
import CarouselArrowNext from './CarouselArrowNext';
import CarouselArrowPrev from './CarouselArrowPrev';

/* styles imports */
import classes from './_carousel.module.scss';

function Carousel() {
  const [open, setOpen] = useState(false);

  const toggleModalOpen = function handlerToggleModalOpen() {
    setOpen(true);
  };

  const toggleModalClose = function handlerToggleModalClose() {
    console.log(false);
    setOpen(false);
  };

  var sliderSettings = {
    dots: true,
    dotsClass: 'appCarousel_dots',
    fade: true,
    nextArrow: <CarouselArrowNext />,
    prevArrow: <CarouselArrowPrev />,
    speed: 250,
  };

  return (
    <div className={`${classes.carousel} appCarousel`}>
      <Slider {...sliderSettings} className={classes.carousel_slider}>
        <div className={classes.carousel_slide}>
          <Card className={classes.carousel_card}>
            <CardActionArea
              className={classes.carousel_link}
              onClick={toggleModalOpen}
            >
              <CardMedia
                alt="write description here"
                component="img"
                height="100%"
                image="https://picsum.photos/1800/1013"
              />
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.carousel_slide}>
          <Card className={classes.carousel_card}>
            <CardActionArea className={classes.carousel_link}>
              <CardMedia
                alt="write description here"
                component="img"
                height="100%"
                image="https://picsum.photos/1800/1013"
              />
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.carousel_slide}>
          <Card className={classes.carousel_card}>
            <CardActionArea className={classes.carousel_link}>
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
      {open && <AppModal open={open} modalOff={toggleModalClose} />}
    </div>
  );
}

export default Carousel;
