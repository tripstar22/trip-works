/* react imports */
import { useEffect } from 'react';

/* library imports */
import Typed from 'typed.js';

const aniType = function handlerAnimatedText (cursor, delay, element, speed, text) {
  useEffect(() => {
    const animatedElement = document.getElementById(element);
    const animatedOptions = {
      showCursor: cursor,
      startDelay: delay,
      strings: text,
      typeSpeed: speed,
    };
    const newTyped = new Typed(animatedElement, animatedOptions);
    return () => {
      newTyped.destroy();
    };
  });
};

export default aniType;
