/* react imports */
import React from 'react';

/* mui icon imports */
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

/* styles imports */
import classes from './_carouselArrow.module.scss';

function CarouselArrowNext (props) {
  const { onClick } = props;

  return (
    <button
      aria-label="next"
      className={`${classes.carouselArrow} ${classes.carouselArrow___next}`}
      onClick={onClick}
      type="button"
    >
      <KeyboardArrowRightIcon className={classes.carouselArrow_icon} />
    </button>
  );
}

export default CarouselArrowNext;
