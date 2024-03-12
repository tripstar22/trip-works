/*
  # DESCRIPTION: Created to animate scroll if user clicks on specific elements. #
*/

const scrollTarget = function scrollToTargetElement(e, eventTarget, history) {
  const dataTarget = eventTarget.dataset.target;
  const element = document.getElementById(dataTarget);

  e.preventDefault();
  element.scrollIntoView({ behavior: 'smooth' });

  // * update url hash *
  const newHash = `#${dataTarget}`;
  history.pushState({}, '', newHash);
};

function aniScroll(event) {
  scrollTarget(event, event.currentTarget, window.history);
}

export default aniScroll;
