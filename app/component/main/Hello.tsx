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
          LUXLABは学校が生徒にお金を支払う珍しいスクール。
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />

          <span className="block mt-4 sm:mt-0">
            もう一度言います。
            <br className="sm:hidden" />
            「LUXLABが支払います」
          </span>
        </h4>
      </article>
    </section>
  );
}
