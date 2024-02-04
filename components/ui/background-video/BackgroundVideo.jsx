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
        src={props.src}
        autoPlay={props.autoPlay}
        loop={props.loop}
        muted={props.muted}
        playsInline={props.playsInline}
        poster={props.poster}
        type={props.type}
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
  autoPlay: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool.isRequired,
  playsInline: PropTypes.bool.isRequired,
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BackgroundVideo;
