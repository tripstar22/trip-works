// * react imports *
import { useEffect, useRef, useState } from 'react';

// * third party library imports *
import PropTypes from 'prop-types';

// * custom js animation imports *
import aniFade from '../../../src/js/ani-fade/aniFade';

function RevealOnScroll(props) {
  const aniSection = useRef(null);
  const { children } = props;

  // * state *
  const [contactIframeLoaded, setContactIframeLoaded] = useState(false);
  const [documentIsReady, setDocumentIsReady] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    let allReady;
    let contactIframe;
    let hasContactSection = false; // * Needed in order to properly calculate aniFade if contact iframe is in the view *

    if (document.querySelector('#contactForm iframe')) {
      hasContactSection = true;
      contactIframe = document.querySelector('#contactForm iframe');
    }

    // * handlers *
    const onDocReady = function handlerOnDocumentReady() {
      setDocumentIsReady(true);
    };
    const displayAnimatedContent = function handlerDisplayAnimatedContent(element) {
      element.classList.remove('visibilityHidden');
    };

    // * events *
    document.addEventListener('DOMContentLoaded', onDocReady());
    if (hasContactSection) {
      contactIframe.addEventListener('load', function() {
        setContactIframeLoaded(true);
      });
    }

    // * update state for isRendered once component has been rendered *
    setIsRendered(true);

    if (hasContactSection) {
      // * document ready, component rendered, and contact iframe loaded *
      allReady = documentIsReady && isRendered && contactIframeLoaded;
    } else {
      // * document ready and component rendered *
      allReady = documentIsReady && isRendered;
    }

    if (allReady) {
      aniFade('.revealonscroll_target', aniSection.current);
      displayAnimatedContent(aniSection.current);
    }
  }, [contactIframeLoaded, documentIsReady, isRendered]);

  return (
    <div className="revealonscroll visibilityHidden" ref={aniSection}>
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
  aniTyped: PropTypes.bool,
  children: PropTypes.any.isRequired,
  end: PropTypes.string.isRequired,
  speed: PropTypes.number,
  start: PropTypes.string.isRequired,
  text: PropTypes.any,
  textElement: PropTypes.string,
};

export default RevealOnScroll;
