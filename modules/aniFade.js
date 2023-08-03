/* 
  DESCRIPTION: Created to animate fade effect with gsap ScrollTrigger. 
*/

/* library imports */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/* must register gsap ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

const aniFade = function handlerAnimateRevealOnScroll(aniTarget, scopeRef) {
  const ctx = gsap.context((self) => {
    const target = self.selector(aniTarget);

    target.forEach((ani) => {
      // get start and end data-attributes from each target element
      let aniEnd = ani.dataset.end;
      let aniStart = ani.dataset.start;

      gsap.to(ani, {
        ease: 'power2.inOut',
        opacity: 1,
        scrollTrigger: {
          duration: 750,
          end: aniEnd,
          // markers: true, // *** great for debugging
          start: aniStart,
          trigger: ani,
        },
        startAt: { opacity: 0 },
      });
    });
  }, scopeRef); // scope
  return () => ctx.revert(); // cleanup
};

export default aniFade;
