// * third party library imports *
import Slider from 'react-slick';

// * library styles imports *
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// * mui icon imports *
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// * mui imports *
import Typography from '@mui/material/Typography';

// * custom component imports *
import CarouselArrowNext from './CarouselArrowNext';
import CarouselArrowPrev from './CarouselArrowPrev';

// * styles imports *
import classes from './_carousel.module.scss';

function Carousel({ media }) {
  // * carousel settings *
  const sliderSettings = {
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
        {media.map((item, index) => (
          <div key={index}>
            {item.fields.file.contentType.startsWith('image/') ? (
              <img src={item.fields.file.url} className={classes.carousel_image} alt={item.fields.title} />
            ) : item.fields.file.contentType.startsWith('video/') ? (
              <video className={classes.carousel_video} controls>
                <source src={item.fields.file.url} type="video/mp4" />
                <Typography
                  className={classes.carousel_notSupported}
                  variant="body1"
                >
                  Your browser does not support the video tag.
                </Typography>
              </video>
            ) : (
              <Typography
                className={classes.carousel_notSupported}
                variant="body1"
              >
                Unsupported media type.
              </Typography>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
