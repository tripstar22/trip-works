/* 
  DESCRIPTION: Created to animate fade effect with gsap ScrollTrigger. 
*/

/* react imports */
import { useEffect } from 'react';

/* library imports */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/* must register gsap ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

// end: top 10%
// start: 80% bottom

const aniFade = function handlerAnimateRevealOnScroll(
  aniEnd,
  aniStart,
  aniTarget,
  scopeRef
) {
  useEffect(() => {
    const ctx = gsap.context((self) => {
      const target = self.selector(aniTarget);
      target.forEach((ani) => {
        gsap.to(ani, {
          ease: 'power2.inOut',
          opacity: 1,
          scrollTrigger: {
            duration: 750,
            end: aniEnd,
            markers: true,
            start: aniStart,
            trigger: ani,
          },
          startAt: { opacity: 0 },
        });
      });
    }, scopeRef); // scope
    return () => ctx.revert(); // cleanup
  }, []);
};

export default aniFade;
