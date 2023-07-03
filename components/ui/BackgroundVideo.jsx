/* react imports */
import React from 'react';

/* mui imports */
import Typography from '@mui/material/Typography';

/* styles imports */
import classes from './_backgroundvideo.module.scss';

function BackgroundVideo(props) {
  return (
    <div className={classes.backgroundvideo}>
      <video
        autoPlay={props.autoPlay}
        className={classes.backgroundvideo_video}
        loop={props.loop}
        muted={props.muted}
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

export default BackgroundVideo;
