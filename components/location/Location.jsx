// * react imports *
import { useEffect, useState } from 'react';

// * third party library imports *
import axios from 'axios';
import PropTypes from 'prop-types';

// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports *
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

// * styles imports *
import classes from './location.module.scss';

function Location({ locationContent }) {
  // * cms content *
  const { heading } = locationContent;

  // * state *
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async function fetchWeatherData() {
      try {
        const response = await axios.get('/api/weatherForecast');
        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
                {weather && (
                  <>
                    <Typography
                      className={classes.location_weatherText}
                      variant="body2"
                    >
                      Current Weather Forecast:
                      {' '}
                    </Typography>
                    <Typography
                      className={classes.location_weatherLocation}
                      gutterBottom
                      variant="body1"
                    >
                      {weather[0].location}
                    </Typography>
                    <img
                      src={weather[0].icon}
                      alt="current weather icon"
                      className={classes.location_image}
                    />
                    <div className={classes.location_temp}>
                      {weather[0].temp}
                      &deg;
                    </div>
                    <Typography
                      className={classes.location_weatherCurrent}
                      gutterBottom
                      variant="body1"
                    >
                      {weather[0].conditions}
                    </Typography>
                  </>
                )}
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
