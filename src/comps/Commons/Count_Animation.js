import { useState, useEffect, useRef } from "react";

export const Count_Animation = (
  targetNumber,
  duration = 2000,
  threshold = 0.5
) => {
  const [hasCounted, setHasCounted] = useState(false);
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasCounted, threshold]);

  useEffect(() => {
    if (hasCounted) {
      let start = 0;
      const increment = targetNumber / (duration / 10);
      const interval = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [hasCounted, targetNumber, duration]);

  return { count, elementRef };
};
