// * react imports *
import { useEffect, useState } from 'react';

// * mui imports *
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports *
import AppLink from '../../ui/app-link/AppLink';

// * styles imports *
import classes from './tradingcard.module.scss';

function TradingCard() {
  // * state *
  const [cardFlip, setCardFlip] = useState(false);

  // * handlers *
  const toggleCardFlip = function handlerToggleCardFlip() {
    setCardFlip((previousValue) => !previousValue);
  };

  const getDeviceType = function handlerGetDeviceType() {
    // * change helper text based off of userAgent *
    const helperText = document.getElementById('tradingCardHelperText');
    const userAgent = navigator.userAgent.toLowerCase();
    // * check if the user agent corresponds to a mobile or tablet device *
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
      userAgent,
    );

    if (isMobile) {
      helperText.textContent = 'Tap';
    } else {
      helperText.textContent = 'Click';
    }
  };

  useEffect(() => {
    getDeviceType();
  }, []);

  return (
    <div className={classes.tradingcard}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              className={classes.tradingcard_helpertext}
              gutterBottom
              variant="body2"
            >
              <span id="tradingCardHelperText" />
              {' '}
              on card to flip it 👌
            </Typography>
            <div className={classes.tradingcard_container}>
              <AppLink
                href="#"
                ariaLabel="flip card"
                className={`${classes.tradingcard_link} ${
                  cardFlip ? classes.tradingcard_link___flipped : ''
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  toggleCardFlip();
                }}
              >
                <Card className={classes.tradingcard_card}>
                  <CardActionArea
                    className={classes.tradingcard_side}
                    component="div"
                    tabIndex={-1}
                  >
                    <div>Front</div>
                  </CardActionArea>
                  <CardActionArea
                    className={`${classes.tradingcard_side} ${classes.tradingcard_side___back}`}
                    component="div"
                    tabIndex={-1}
                  >
                    <div>Back</div>
                  </CardActionArea>
                </Card>
              </AppLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TradingCard;
