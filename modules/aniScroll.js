/* 
  DESCRIPTION: Created to animate scroll if user clicks on specific elements. 
*/

const scrollTarget = function scrollToTargetElement (e, eventTarget) {

  let dataTarget = eventTarget.dataset.target;
  let targetElement = document.getElementById(dataTarget);

  e.preventDefault();
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const aniScroll = function handlerAnimatePageScroll (event) {
  scrollTarget(event, event.currentTarget);
};

export default aniScroll;
