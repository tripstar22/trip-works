/* react imports */
import React from 'react';

/* libray imports */
import useSWR from 'swr';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import RevealOnScroll from '../utilities/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_location.module.scss';

// write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetchData = function fetchWeatherAPIData(url) {
  return fetch(url).then((res) => res.json());
};

function Location() {
  // set up SWR to run the fetchData when calling "/api/weatherForecast"
  // there are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/weatherForecast', fetchData);

  // handle the error state
  if (error)
    return (
      <section className={`section section___paddingSmall ${classes.location}`}>
        <RevealOnScroll>
          <Container maxWidth="lg">
            <Grid alignItems="center" container spacing={0}>
              <Grid item xs={12} sm={7} md={8}>
                <Typography
                  className={classes.location_heading}
                  component="h4"
                  variant="h4"
                >
                  I currently live in the Greater Metro Atlanta area, and am
                  also open to remote work.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={4}>
                <div className={classes.location_weather}>
                  <Typography
                    className={classes.location_weatherText}
                    variant="body2"
                  >
                    Failed to load.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </RevealOnScroll>
      </section>
    );
  // handle the loading state
  if (!data)
    return (
      <section className={`section section___paddingSmall ${classes.location}`}>
        <RevealOnScroll>
          <Container maxWidth="lg">
            <Grid alignItems="center" container spacing={0}>
              <Grid item xs={12} sm={7} md={8}>
                <Typography
                  className={classes.location_heading}
                  component="h4"
                  variant="h4"
                >
                  I currently live in the Greater Metro Atlanta area, and am
                  also open to remote work.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={4}>
                <div className={classes.location_weather}>
                  <Typography
                    className={classes.location_weatherText}
                    variant="body2"
                  >
                    Loading…
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </RevealOnScroll>
      </section>
    );
  // handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <section className={`section section___paddingSmall ${classes.location}`}>
      <RevealOnScroll>
        <Container maxWidth="lg">
          <Grid alignItems="center" container spacing={0}>
            <Grid item xs={12} sm={7} md={8}>
              <Typography
                className={classes.location_heading}
                component="h4"
                variant="h4"
              >
                I currently live in the Greater Metro Atlanta area, and am also
                open to remote work.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <div className={classes.location_weather}>
                <Typography
                  className={classes.location_weatherText}
                  variant="body2"
                >
                  Current Weather Forecast:{' '}
                </Typography>
                <Typography
                  className={classes.location_weatherLocation}
                  gutterBottom
                  variant="body1"
                >
                  {data[0].location}
                </Typography>
                <img
                  src={data[0].icon}
                  alt="current weather icon"
                  className={classes.location_image}
                />
                <div className={classes.location_temp}>{data[0].temp}&deg;</div>
                <Typography
                  className={classes.location_weatherCurrent}
                  gutterBottom
                  variant="body1"
                >
                  {data[0].conditions}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

export default Location;
