/* react imports */
import { useEffect } from 'react';

/* library imports */
import Typed from 'typed.js';

const aniType = function handlerAnimatedText (
  backspace, 
  backspaceSpeed, 
  cursor, 
  delay, 
  element, 
  infinite, 
  speed, 
  text
  ) {
  useEffect(() => {
    const animatedElement = document.getElementById(element);
    const animatedOptions = {
      backSpeed: backspaceSpeed,
      loop: infinite,
      showCursor: cursor,
      smartBackspace: backspace,
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
