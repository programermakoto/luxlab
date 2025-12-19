"use client";

import { useEffect, useRef } from "react";

export default function useInViewAnimation(options = { threshold: 0.2 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("appear");
      obs.unobserve(entry.target); // 1回だけ発火
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
