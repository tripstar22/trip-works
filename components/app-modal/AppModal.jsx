/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* library imports */
import Slider from 'react-slick';

/* mui icon imports */
import Close from '@mui/icons-material/Close';

/* mui imports */
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

/* custom component imports */
import Carousel from '../carousel/Carousel';

/* styles imports */
import classes from './_appModal.module.scss';
import classesArrow from '../carousel/_carouselArrow.module.scss';
import classesCarousel from '../carousel/_carousel.module.scss';

function AppModal({ open, toggleModalClose }) {

  return (
    <Modal
      onClose={toggleModalClose}
      open={open}
      aria-label="project modal carousel"
    >
      <div className={classes.appModal}>
        <div className={classes.appModal_container}>
          <div
            className={`${classesCarousel.carousel} ${classesCarousel.carousel___modal} appCarousel appCarousel___modal`}
          >
            <Carousel />
          </div>
        </div>
        <IconButton
          className={classes.appModal_close}
          onClick={toggleModalClose}
          aria-label="close modal"
        >
          <Close className={classes.appModal_closeIcon} />
        </IconButton>
      </div>
    </Modal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModalClose: PropTypes.func,
};

export default AppModal;
