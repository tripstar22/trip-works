// * third party library imports *
import PropTypes from 'prop-types';
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
import classes from './carousel.module.scss';

// * disable jsx-props-no-spreading due to recommended structure of slick-carousel sliderSettings *
/* eslint-disable react/jsx-props-no-spreading */
function Carousel({ activeSlideIndex, media, videoPause }) {
  /*
    • define the following:
      • carousel next arrow
      • carousel prev arrow
      • carousel dot items
  */
  const arrowNext = (
    <CarouselArrowNext>
      <ArrowForwardIosIcon className={classes.carousel_arrowIcon} />
    </CarouselArrowNext>
  );
  const arrowPrev = (
    <CarouselArrowPrev>
      <ArrowBackIosIcon
        className={`${classes.carousel_arrowIcon} ${classes.carousel_arrowIcon___prev}`}
      />
    </CarouselArrowPrev>
  );
  const carouselDots = function createCustomDots(index) {
    const dotIndex = index + 1;

    return (
      <button aria-label={`slide ${dotIndex}`} type="button">
        {dotIndex}
      </button>
    );
  };

  // * carousel settings *
  const sliderSettings = {
    beforeChange: () => {
      videoPause();
    },
    customPaging: carouselDots,
    dots: true,
    dotsClass: 'appCarousel_dots', // * Referenced in src/styles/scss/global/appCarousel.scss *
    fade: true,
    initialSlide: activeSlideIndex,
    nextArrow: arrowNext,
    prevArrow: arrowPrev,
    speed: 250,
  };

  return (
    <div className={`${classes.carousel} appCarousel`}>
      <Slider {...sliderSettings}>
        {media.map((item) => (
          <div key={item.fields.file.fileName}>
            {item.fields.file.contentType.startsWith('image/') ? (
              <img
                src={item.fields.file.url}
                className={classes.carousel_image}
                alt={item.fields.title}
              />
            ) : item.fields.file.contentType.startsWith('video/') ? (
              <video
                className={classes.carousel_video}
                controls
                controlsList="disablepictureinpicture"
                muted
                playsInline
                preload="auto"
              >
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
/* eslint-enable react/jsx-props-no-spreading */

Carousel.propTypes = {
  activeSlideIndex: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
  videoPause: PropTypes.func.isRequired,
};

export default Carousel;
