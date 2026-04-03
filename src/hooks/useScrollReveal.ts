import { useEffect } from "react";

/**
 * Hook to handle scroll reveal animations using Intersection Observer.
 * It searches for elements with the .reveal-on-scroll class and adds
 * the .active class when they enter the viewport.
 */
export function useScrollReveal() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15, // Trigger when 15% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Once revealed, we can stop observing this element
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll(".reveal-on-scroll");
        revealElements.forEach((el) => observer.observe(el));

        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);
}
