/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* styles imports */
import classes from './_location.module.scss';

function Location() {

  // const weatherData = function handlerLoadWeatherData() {
  //   fetch('/api/weatherForecast')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setWeatherItems(data.feedback);
  //     });
  // };

  return (
    <section
      className={`section section___paddingSmall ${classes.location}`}
      onLoad={weatherData()}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container spacing={0}>
          <Grid item xs={12} sm={7} md={8}>
            <Typography
              className={classes.location_heading}
              component="h5"
              variant="h5"
            >
              I currently live in the Greater Metro Atlanta area, and am also
              open to remote work!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <div className={classes.location_weather}>
              <Typography
                className={classes.location_weatherText}
                gutterBottom
                variant="body1"
              >
                Current Weather Forecast:{' '}
                <span className={classes.location_weatherLocation}>
                  City, Region
                </span>
              </Typography>
              <img
                src=""
                alt="current weather icon"
                className={classes.location_image}
              />
              <div className={classes.location_temp}>00&deg;</div>
              <Typography gutterBottom variant="body1">
                00&#37; Humidity
              </Typography>
              <Typography gutterBottom variant="body2">
                Current Conditions
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Location;
