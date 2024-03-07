// * react imports *
import { useEffect, useRef } from 'react';

// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import Typography from '@mui/material/Typography';

// * styles imports *
import classes from './_backgroundvideo.module.scss';

function BackgroundVideo(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    /*
      • this component needs this logic due to:
        • react bug for muted attribute on html video tag (https://github.com/facebook/react/issues/10389)
        • safari and iOS lack of support to autoplaying videos
          • tested on safari version 17.2.1 and it works correctly with the logic below
    */
    if (!videoRef.current) {
      return;
    }

    const video = videoRef.current;
    
    if (!video.attributes.muted) {
      video.defaultMuted = true;
      video.muted = true;
      video.setAttribute('muted', '');
    }
  }, []);

  return (
    <div className={classes.backgroundvideo}>
      <video
        className={classes.backgroundvideo_video}
        src={props.src}
        ref={videoRef}
        autoPlay={props.autoPlay}
        loop={props.loop}
        // muted={props.muted}
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
  // muted: PropTypes.string,
  playsInline: PropTypes.bool.isRequired,
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BackgroundVideo;
