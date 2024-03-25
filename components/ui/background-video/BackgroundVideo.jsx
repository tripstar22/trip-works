// * react imports *
import { useEffect, useRef } from 'react';

// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import Typography from '@mui/material/Typography';

// * styles imports *
import classes from './backgroundvideo.module.scss';

// * disable media has caption warning in this case since backround videos will not have audio *
/* eslint-disable jsx-a11y/media-has-caption */
function BackgroundVideo(props) {
  const {
    poster,
    src,
  } = props;

  const videoRef = useRef(null);

  useEffect(() => {
    /*
      • check userAgent to see which type of device is being used
      • if this component is in the view and iPhone, iPad, or Android is being used then hide video element and display static image
      • these devices have very limited capability for autoplay and I don't want mobile users to have to involuntarily use excess data
    */
    const { userAgent } = navigator;

    const userAgentVideo = function userAgentBgVideoFunctionality(image, video) {
      image.forEach((imageItem) => {
        imageItem.classList.add('bgVideo_elementShow');
      });
      video.forEach((videoItem) => {
        videoItem.classList.add('bgVideo_elementHide');
      });
    };

    if (
      userAgent.indexOf('iPhone') >= 0
      || userAgent.indexOf('iPad') >= 0
      || userAgent.indexOf('Android') >= 0
    ) {
      const bgVideoImage = document.querySelectorAll('.bgVideo_image');
      const bgVideo = document.querySelectorAll('.bgVideo_video');
      userAgentVideo(bgVideoImage, bgVideo);
    }
  }, []);

  useEffect(() => {
    /*
      • this component needs this logic due to:
        • react bug for muted attribute on html video tag (https://github.com/facebook/react/issues/10389)
        • safari and iOS lack of support to autoplaying videos
          • tested on safari version 17.4 and it works correctly with the logic below
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
    <div className={`bgVideo ${classes.backgroundvideo}`}>
      <img src={poster} className={`bgVideo_image ${classes.backgroundvideo_image}`} alt="" />
      <video
        className={`bgVideo_video ${classes.backgroundvideo_video}`}
        ref={videoRef}
        autoPlay="autoplay"
        crossOrigin=""
        loop
        playsInline
        type="video/mp4"
        src={src}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
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
/* eslint-enable jsx-a11y/media-has-caption */

BackgroundVideo.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
};

BackgroundVideo.defaultProps = {
  poster: null,
};

export default BackgroundVideo;
