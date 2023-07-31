/* react imports */
import React from 'react';

/* mui imports */
import IconButton from '@mui/material/IconButton';

/* styles imports */
import classes from './_carouselArrow.module.scss';

function CarouselArrowPrev(props) {
  const { children, onClick } = props;

  return (
    <IconButton
      className={`${classes.carouselArrow} ${classes.carouselArrow___prev}`}
      onClick={onClick}
      aria-label="previous"
    >
      {children}
    </IconButton>
  );
}

export default CarouselArrowPrev;
