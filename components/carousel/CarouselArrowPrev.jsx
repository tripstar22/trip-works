/* react imports */
import React from 'react';

/* mui imports */
import IconButton from '@mui/material/IconButton';

/* styles imports */
import classes from './_carousel.module.scss';

function CarouselArrowPrev(props) {
  const { children, onClick } = props;

  return (
    <IconButton
      className={`${classes.carousel_arrow} ${classes.carousel_arrow___prev}`}
      onClick={onClick}
      aria-label="previous"
    >
      {children}
    </IconButton>
  );
}

export default CarouselArrowPrev;
