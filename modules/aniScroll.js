/* 
  DESCRIPTION: Created to animate scroll, as well as handle logic of scrolling, or not scrolling based on current route. 
*/

import linkTo from './linkTo';

const aniScroll = function handlerAnimatePageScroll (event) {
  linkTo(event, event.currentTarget);
};

export default aniScroll;
