"use client";

import React, { useEffect, useRef } from "react";

export default function Hello() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container h-screen flex justify-center items-center px-4 sm:px-0">
      <article
        ref={ref}
        className="
          space-y-4
          animate-fadeBlur
          max-w-md
          text-center
          sm:max-w-none
        "
      >
        <h4
          className="
            font-bold
            text-xl
            leading-relaxed
            sm:text-3xl
          "
        >
         “LUX LAB”は
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />

          <span className="block mt-4 sm:mt-0">
          学びと実践が循環するスクール。
          </span>
        </h4>
      </article>
    </section>
  );
}
