/* react imports */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* custom js animation imports */
import aniFade from '../../../src/js/ani-fade/aniFade';

function RevealOnScroll(props) {
  const aniSection = useRef(null);
  const { children } = props;
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // update state once component has been rendered
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (isRendered) {
      aniFade('.revealonscroll_target', aniSection.current);
    }
  }, [isRendered]);

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
