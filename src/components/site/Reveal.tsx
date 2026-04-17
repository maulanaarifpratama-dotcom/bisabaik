import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition"> {
  delay?: number;
  /** Translation distance in pixels (default 18) */
  y?: number;
  /** Animation duration in seconds (default 0.7) */
  duration?: number;
  as?: "div" | "section" | "article" | "header" | "li";
}

/**
 * Lightweight scroll-triggered fade-up reveal for section content.
 * Honors prefers-reduced-motion and only fires once per element.
 */
const Reveal = ({
  delay = 0,
  y = 18,
  duration = 0.7,
  children,
  className,
  as = "div",
  ...rest
}: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
