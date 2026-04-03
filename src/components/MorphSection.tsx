import { motion } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface MorphSectionProps {
  children: ReactNode;
}

export default function MorphSection({ children }: MorphSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0.5); // 0 = entering, 0.5 = centered, 1 = leaving

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    const onScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Calculate how far through the scroll container this section is
      const containerHeight = containerRect.height;
      const elTop = elRect.top - containerRect.top;
      const elHeight = elRect.height;

      // progress: 0 when element is fully below, 0.5 when centered, 1 when fully above
      const raw = 1 - (elTop + elHeight / 2) / containerHeight;
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => scrollContainer.removeEventListener("scroll", onScroll);
  }, []);

  // Scale: 0.85 when entering from below, 1.0 when centered, 1.15 when leaving to top
  const scale = progress < 0.5
    ? 0.85 + progress * 0.3       // 0.85 → 1.0 as section enters
    : 1 + (progress - 0.5) * 0.3; // 1.0 → 1.15 as section leaves upward

  // Opacity: fades in when entering, fades out when leaving
  const opacity = progress < 0.1
    ? progress * 10
    : progress > 0.9
    ? (1 - progress) * 10
    : 1;

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full snap-start flex items-center justify-center overflow-hidden"
    >
      <motion.div
        animate={{ scale, opacity }}
        transition={{ duration: 0.05, ease: "linear" }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
