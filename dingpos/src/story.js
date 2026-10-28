import { useEffect, useState } from "react";

// Copy of home/src/story.js (sotto/src/story.js is another): change all three
// together.
//
// Plays a scene's story as a loop of timed steps. Step 0 is the resting frame
// (the finished design): it renders first and the loop returns to it, so
// prerendered HTML and reduced motion both show it. Once the scene is half in
// view the story jumps to step `entry` (where its action reads as a beginning),
// holds it for `delay` ms instead of that step's own time, then plays on; the
// rest of step 0 is skipped so a visitor never arrives to a frame that is just
// waiting, and `delay` offsets scenes so they never act in unison. Leaving the
// view entirely rewinds it, so every arrival plays from the start.
const START_RATIO = 0.5;

export function useStory(ref, steps, delay = 0, entry = 0) {
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
      ([record]) => {
        if (record.intersectionRatio >= START_RATIO && timer === null) {
          current = entry;
          setIndex(entry);
          run(delay);
        } else if (!record.isIntersecting && timer !== null) {
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
  }, [ref, steps, delay, entry]);

  return steps[index] ?? steps[0];
}
