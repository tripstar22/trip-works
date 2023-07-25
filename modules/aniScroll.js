/* 
  DESCRIPTION: Created to animate scroll if user clicks on specific elements. 
*/

const scrollTarget = function scrollToTargetElement(e, eventTarget) {
  let dataTarget = eventTarget.dataset.target;
  let element = document.getElementById(dataTarget);

  e.preventDefault();
  element.scrollIntoView({ behavior: 'smooth' });

  // update url hash
  let newHash = '#' + dataTarget;
  history.pushState({}, '', newHash);
};

const aniScroll = function handlerAnimatePageScroll(event) {
  scrollTarget(event, event.currentTarget);
};

export default aniScroll;
