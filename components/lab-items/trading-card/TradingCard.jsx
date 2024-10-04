// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * styles imports *
import classes from './tradingcard.module.scss';

function TradingCard() {
  return (
    <div className={classes.tradingcard}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              className={classes.tradingcard_helpertext}
              variant="body2"
            >
              Helper text here
            </Typography>
            <div className={classes.tradingcard_container}>
              <div className={classes.tradingcard_card}>
                <div className={classes.tradingcard_front}>Front</div>
                <div className={classes.tradingcard_back}>Back</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TradingCard;
