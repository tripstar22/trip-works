/* third party library imports */
import PropTypes from 'prop-types';

/* mui imports */
import Typography from '@mui/material/Typography';

/* styles imports */
import classes from './_backgroundvideo.module.scss';

function BackgroundVideo(props) {
  return (
    <div className={classes.backgroundvideo}>
      <video
        className={classes.backgroundvideo_video}
        autoPlay={props.autoPlay}
        loop={props.loop}
        muted={props.muted}
        playsinline={props.playsInline}
      >
        <source src={props.src} type={props.type} />
        <Typography
          className={classes.backgroundvideo_heading}
          component="h6"
          gutterBottom
          variant="h6"
        >
          Your browser does not support HTML5 video.
        </Typography>
      </video>
    </div>
  );
}

BackgroundVideo.propTypes = {
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool.isRequired,
  playsInline: PropTypes.bool.isRequired,
};

export default BackgroundVideo;
