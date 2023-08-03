/* react imports */
import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/* custom module imports */
import aniFade from '../../../modules/aniFade';

function RevealOnScroll(props) {
  const aniSection = useRef(null);
  const { children } = props;

  useLayoutEffect(() => {
    // get window width and call gsap ScrollTrigger animations if user is in desktop view
    const browserWindowWidth = window.innerWidth;

    if (browserWindowWidth > 899) {
      aniFade('.revealonscroll_target', aniSection);
    }
  }, []);

  return (
    <div className="revealonscroll" ref={aniSection}>
      <div
        className="revealonscroll_target"
        data-end={props.dataEnd}
        data-start={props.dataStart}
      >
        {children}
      </div>
    </div>
  );
}

RevealOnScroll.propTypes = {
  children: PropTypes.any.isRequired,
};

export default RevealOnScroll;
