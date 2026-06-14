"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observedElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
            observedElements.delete(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    const updateObservations = () => {
      const revealElements = document.querySelectorAll(".animate-on-scroll");
      revealElements.forEach((el) => {
        if (!observedElements.has(el) && !el.classList.contains("is-visible")) {
          observer.observe(el);
          observedElements.add(el);
        }
      });
    };

    // Run initial observation
    updateObservations();

    // Observe body mutations to detect dynamically loaded or re-rendered elements
    const mutationObserver = new MutationObserver(() => {
      updateObservations();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const timer = setTimeout(updateObservations, 200);

    return () => {
      clearTimeout(timer);
      mutationObserver.disconnect();
      observedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
