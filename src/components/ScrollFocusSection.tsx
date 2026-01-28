"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollFocusSection({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // Starts when top of section hits bottom of screen, ends at center
  });

  // Map scroll progress (0 to 1) to Blur (20px to 0px) and Opacity (0 to 1)
  const blurValue = useTransform(scrollYProgress, [0, 1], ["blur(20px)", "blur(0px)"]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        filter: blurValue,
        opacity: opacityValue,
        scale: scaleValue,
      }}
      className="transition-all duration-300 ease-out"
    >
      {children}
    </motion.div>
  );
}