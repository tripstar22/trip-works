/* react imports */
import React from 'react';

/* mui imports */
import IconButton from '@mui/material/IconButton';

/* styles imports */
import classes from './_carousel.module.scss';

function CarouselArrowNext(props) {
  const { children, onClick } = props;

  return (
    <IconButton
      className={`${classes.carousel_arrow} ${classes.carousel_arrow___next}`}
      onClick={onClick}
      aria-label="next"
    >
      {children}
    </IconButton>
  );
}

export default CarouselArrowNext;
