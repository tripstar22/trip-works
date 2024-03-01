// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import IconButton from '@mui/material/IconButton';

// * styles imports *
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

CarouselArrowPrev.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CarouselArrowPrev;
