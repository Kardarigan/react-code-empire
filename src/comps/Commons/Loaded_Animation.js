import { useState, useEffect, useRef } from "react";

export const Loaded_Animation = (
  initialClass = "opacity-0",
  animateClass = "opacity-100",
  threshold = 0.5
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  return {
    ref: elementRef,
    className:
      "transition-all duration-1000 " +
      (isVisible ? animateClass : initialClass),
  };
};
