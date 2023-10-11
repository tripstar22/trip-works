/* react imports */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/* custom module imports */
import aniFade from '../../utilities/ani-fade/aniFade';

function RevealOnScroll(props) {
  const aniSection = useRef(null);
  const { children } = props;

  useEffect(() => {
    // get window width and call gsap ScrollTrigger animations if user is in desktop view

    aniFade('.revealonscroll_target', aniSection);
  }, []);

  return (
    <div className="revealonscroll" ref={aniSection}>
      <div
        className="revealonscroll_target"
        data-ani-typed={props.aniTyped}
        data-end={props.end}
        data-speed={props.speed}
        data-start={props.start}
        data-text={props.text}
        data-text-element={props.textElement}
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
