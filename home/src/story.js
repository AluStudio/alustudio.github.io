import { useEffect, useState } from "react";

// Plays a scene's story as a loop of timed steps. Step 0 is the resting frame
// (the finished design): it renders first and the loop returns to it, so
// prerendered HTML and reduced motion both show it. Time only advances while
// the scene is on screen, and `delay` offsets scenes so they never act in
// unison.
export function useStory(ref, steps, delay = 0) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = 0;
    let remaining = delay + steps[0].ms;
    let timer = null;
    let startedAt = 0;

    const run = () => {
      startedAt = performance.now();
      timer = setTimeout(() => {
        current = (current + 1) % steps.length;
        setIndex(current);
        remaining = steps[current].ms;
        run();
      }, remaining);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && timer === null) {
          run();
        } else if (!entry.isIntersecting && timer !== null) {
          clearTimeout(timer);
          timer = null;
          remaining = Math.max(0, remaining - (performance.now() - startedAt));
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [ref, steps, delay]);

  return steps[index] ?? steps[0];
}
