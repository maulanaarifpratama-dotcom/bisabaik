import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface HeroParallaxProps {
  src: string;
  alt?: string;
  className?: string;
  /** Maximum vertical translation in pixels as the section scrolls past */
  intensity?: number;
  /** Optional overlay nodes (gradients) rendered above the image */
  overlay?: React.ReactNode;
  priority?: boolean;
}

/**
 * Subtle scroll-driven parallax for hero images.
 * - Image translates by ~`intensity` px as the section moves through the viewport.
 * - Image scales gently (1.08 → 1.0) so edges never reveal during translation.
 * - Honors prefers-reduced-motion.
 */
const HeroParallax = ({
  src,
  alt = "",
  className = "",
  intensity = 60,
  overlay,
  priority = false,
}: HeroParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <div ref={ref} className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        width={1920}
        height={1080}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        style={reduce ? undefined : { y, scale }}
      />
      {overlay}
    </div>
  );
};

export default HeroParallax;
