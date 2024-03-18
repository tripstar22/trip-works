// * third party library imports *
import PropTypes from 'prop-types';

// * mui icon imports *
import Close from '@mui/icons-material/Close';

// * mui imports *
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

// * custom component imports *
import Carousel from '../carousel/Carousel';

// * styles imports *
import classes from './appmodal.module.scss';

function AppModal({
  activeSlideIndex,
  media,
  open,
  setCurrentSlide,
  toggleModalClose,
  videoPause,
}) {
  return (
    <Modal
      onClose={toggleModalClose}
      open={open}
      aria-label="project modal carousel"
    >
      <div className={classes.appmodal}>
        <div className={classes.appmodal_container}>
          <Carousel
            activeSlideIndex={activeSlideIndex}
            media={media}
            setCurrentSlide={setCurrentSlide}
            videoPause={videoPause}
          />
        </div>
        <IconButton
          className={classes.appmodal_close}
          onClick={toggleModalClose}
          aria-label="close modal"
          tabIndex={0}
        >
          <Close className={classes.appmodal_closeIcon} />
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
