// * mui icon imports *
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

// * mui imports *
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// * custom js animation imports *
import aniScroll from '../../../src/js/ani-scroll/aniScroll';

// * custom component imports *
import AppLink from '../app-link/AppLink';

// * styles imports *
import classes from './backtotop.module.scss';

function BackToTop() {
  // * scroll trigger settings *
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <div>
        <AppLink
          ariaLabel="back to top"
          href="#pageTop"
          className={classes.backToTop}
          dataTarget="pageTop"
          onClick={aniScroll}
        >
          <Fab aria-label="scroll back to top" size="small">
            <KeyboardArrowUp className={classes.backToTop_icon} />
          </Fab>
        </AppLink>
      </div>
    </Fade>
  );
}

export default BackToTop;
