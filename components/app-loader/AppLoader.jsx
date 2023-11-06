/* react imports */
import React from 'react';

/* mui imports */
import CircularProgress from '@mui/material/CircularProgress';

/* styles imports */
import classes from './_apploader.module.scss';

function AppLoader() {
  return (
    <section className={classes.apploader}>
      <div className={classes.apploader_container}>
        <CircularProgress size={60} className={classes.apploader_loader} />
      </div>
    </section>
  );
}

export default AppLoader;
