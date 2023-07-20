/* react imports */
import React from 'react';

/* mui icon imports */
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

/* styles imports */
import classes from './_carouselArrow.module.scss';

function CarouselArrowPrev (props) {
  const { onClick } = props;

  return (
    <button
      aria-label="previous"
      className={`${classes.carouselArrow} ${classes.carouselArrow___prev}`}
      onClick={onClick}
      type="button"
    >
      <KeyboardArrowLeftIcon className={classes.carouselArrow_icon} />
    </button>
  );
}

export default CarouselArrowPrev;
