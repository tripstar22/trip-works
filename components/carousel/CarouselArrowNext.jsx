/* react imports */
import React from 'react';

/* mui imports */
import IconButton from '@mui/material/IconButton';

/* styles imports */
import classes from './_carouselArrow.module.scss';

function CarouselArrowNext(props) {
  const { children, onClick } = props;

  return (
    <IconButton
      className={`${classes.carouselArrow} ${classes.carouselArrow___next}`}
      onClick={onClick}
      aria-label="next"
    >
      {children}
    </IconButton>
  );
}

export default CarouselArrowNext;
