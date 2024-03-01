// * third party library imports *
import PropTypes from 'prop-types';
import useSWR from 'swr';

// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports *
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

// * styles imports *
import classes from './_location.module.scss';

// * write a fetcher function to wrap the native fetch function and return the result of a call to url in json format *
const fetchData = function fetchWeatherAPIData(url) {
  return fetch(url).then((res) => res.json());
};

function Location({ locationContent }) {
  // * cms content *
  const { heading } = locationContent;

  /* 
    • set up SWR to run the fetchData when calling "/api/weatherForecast"
    • there are three possible states: 
      • 1) error when there was an error fetching the data
      • 2) loading when data is null
      • 3) ready when the data is returned
  */

  const { data, error } = useSWR(
    '/api/weather-forecast/weatherForecast',
    fetchData
  );

  // * handle the error state *
  if (error)
    return (
      <section className={`section section___paddingSmall ${classes.location}`}>
        <RevealOnScroll end="top top" start="bottom bottom">
          <Container maxWidth="lg">
            <Grid alignItems="center" container spacing={0}>
              <Grid item xs={12} sm={7} md={8}>
                <Typography
                  className={classes.location_heading}
                  component="h4"
                  variant="h4"
                >
                  {heading}
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
  // * handle the loading state *
  if (!data)
    return (
      <section className={`section section___paddingSmall ${classes.location}`}>
        <RevealOnScroll end="top top" start="bottom bottom">
          <Container maxWidth="lg">
            <Grid alignItems="center" container spacing={0}>
              <Grid item xs={12} sm={7} md={8}>
                <Typography
                  className={classes.location_heading}
                  component="h4"
                  variant="h4"
                >
                  {heading}
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
  // * handle the ready state and display the result contained in the data object mapped to the structure of the json file *
  return (
    <section className={`section section___paddingSmall ${classes.location}`}>
      <RevealOnScroll end="top top" start="bottom bottom">
        <Container maxWidth="lg">
          <Grid alignItems="center" container spacing={0}>
            <Grid item xs={12} sm={7} md={8}>
              <Typography
                className={classes.location_heading}
                component="h4"
                variant="h4"
              >
                {heading}
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

Location.propTypes = {
  locationContent: PropTypes.object.isRequired,
};

export default Location;
