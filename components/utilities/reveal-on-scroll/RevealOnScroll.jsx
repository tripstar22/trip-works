/* react imports */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/* custom module imports */
import aniFade from '../../../modules/aniFade';

function RevealOnScroll(props) {
  const aniSection = useRef(null);
  const { children } = props;

  // define props here, so they can be referenced in aniFade call
  const aniEnd = {
    end: props.aniEnd,
  };
  const aniStart = {
    start: props.aniStart,
  };

  aniFade(aniEnd.end, aniStart.start, '.aniFade', aniSection);

  return (
    <div aniEnd aniStart ref={aniSection}>
      <div className="aniFade">{children}</div>
    </div>
  );
}

RevealOnScroll.propTypes = {
  aniEnd: PropTypes.string,
  aniStart: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default RevealOnScroll;
