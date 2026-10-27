import { useEffect, useState } from "react";

// Plays a scene's story as a loop of timed steps. Step 0 is the resting frame
// (the finished design): it renders first and the loop returns to it, so
// prerendered HTML and reduced motion both show it. The story starts once the
// scene is half in view and acts `delay` ms later, skipping step 0's rest so a
// visitor never arrives to a frame that is just waiting; `delay` also offsets
// scenes so they never act in unison. Leaving the view entirely rewinds it, so
// every arrival plays from the start.
const START_RATIO = 0.5;

export function useStory(ref, steps, delay = 0) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = 0;
    let timer = null;

    const run = (remaining) => {
      timer = setTimeout(() => {
        current = (current + 1) % steps.length;
        setIndex(current);
        run(steps[current].ms);
      }, remaining);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= START_RATIO && timer === null) {
          run(delay);
        } else if (!entry.isIntersecting && timer !== null) {
          clearTimeout(timer);
          timer = null;
          current = 0;
          setIndex(0);
        }
      },
      { threshold: [0, START_RATIO] }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [ref, steps, delay]);

  return steps[index] ?? steps[0];
}
