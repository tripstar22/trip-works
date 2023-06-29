/* 
  DESCRIPTION: Created to animate scroll, as well as handle logic of scrolling, or not scrolling based on current route. 
*/

const linkTo = function handlerLinkToDestination (e, eventTarget) {

  let currentLocationLength = window.location.pathname.length;
  let targetFunctionality = eventTarget.dataset.functionality;
  let dataTarget = eventTarget.dataset.target;
  let targetElement = document.getElementById(dataTarget);

  const scrollAnimation = function smoothScrollToTargetElement () {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(true);
  };

  switch (currentLocationLength && targetFunctionality) {

    case (currentLocationLength <= 1 && 'scroll-on-homepage') :
      // functionality for main nav items on homepage
      console.log('scroll on homepage');
      e.preventDefault();
      scrollAnimation();
      break;
    case (currentLocationLength >= 1 && 'scroll-top') :
      // functionality for scroll-to-top
      console.log('scroll to top');
      e.preventDefault();
      scrollAnimation();
      break;
    default : 
      // standard Next.js navigation
      console.log('standard link');
      break;
  }
};

export default linkTo;
