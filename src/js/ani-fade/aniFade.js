/*
  # DESCRIPTION: Created to animate fade effect with gsap ScrollTrigger. #
*/

// * third party library imports *
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

// * must register gsap plugins *
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function aniFade(aniTarget, scopeRef) {
  const ctx = gsap.context((self) => {
    const target = self.selector(aniTarget);

    target.forEach((ani) => {
      // * get start and end data-attributes from each target element  *
      const aniEnd = ani.dataset.end;
      const aniStart = ani.dataset.start;

      if (!ani.dataset.aniTyped) {
        // * no aniType functionality *

        gsap.to(ani, {
          ease: 'power2.inOut',
          opacity: 1,
          scrollTrigger: {
            duration: 750,
            end: aniEnd,
            // markers: true, // * great for debugging *
            once: true,
            start: aniStart,
            trigger: ani,
          },
          startAt: { opacity: 0 },
        });
      } else {
        // * has aniType functionality *

        // * check to see if specified element exists in current template  *
        // if (ani.dataset.textElement) {
        const aniType = function animateTextTyping() {
          // * get required data for aniType parameters *
          const { textElement } = ani.dataset;
          let { speed } = ani.dataset;
          const { text } = ani.dataset;

          // * convert speed value to integer *
          speed = parseFloat(speed);

          if (textElement) {
            gsap.to(textElement, {
              duration: speed,
              text: text,
            });
          }
        };

        gsap.to(ani, {
          ease: 'power2.inOut',
          opacity: 1,
          scrollTrigger: {
            duration: 750,
            end: aniEnd,
            // markers: true, // * great for debugging *
            once: true,
            onEnter: aniType,
            start: aniStart,
            trigger: ani,
          },
          startAt: { opacity: 0 },
        });
        // }
      }
    });
  }, scopeRef); // * scope *
  return () => ctx.revert(); // * cleanup *
}

export default aniFade;
