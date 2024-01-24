/* third party library imports */
import Slider from 'react-slick';

/* library styles imports */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* mui icon imports */
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

/* mui imports */
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

/* custom component imports */
import CarouselArrowNext from './CarouselArrowNext';
import CarouselArrowPrev from './CarouselArrowPrev';

/* styles imports */
import classes from './_carousel.module.scss';

function Carousel() {
  var sliderSettings = {
    dots: true,
    dotsClass: 'appCarousel_dots',
    fade: true,
    nextArrow: (
      <CarouselArrowNext>
        <ArrowForwardIosIcon className={classes.carousel_arrowIcon} />
      </CarouselArrowNext>
    ),
    prevArrow: (
      <CarouselArrowPrev>
        <ArrowBackIosIcon className={classes.carousel_arrowIcon} />
      </CarouselArrowPrev>
    ),
    speed: 250,
  };

  return (
    <div className={`${classes.carousel} appCarousel`}>
      <Slider {...sliderSettings} className="appCarousel_sliderModal">
        <div>
          <Card>
            <CardMedia
              alt="write description here"
              component="img"
              height="100%"
              image="https://picsum.photos/1800/1013"
            />
          </Card>
        </div>
        <div>
          <Card>
            <CardMedia
              alt="write description here"
              component="img"
              height="100%"
              image="https://picsum.photos/1800/1013"
            />
          </Card>
        </div>
        <div>
          <Card>
            <CardMedia
              alt="write description here"
              component="img"
              height="100%"
              image="https://picsum.photos/1800/1013"
            />
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
