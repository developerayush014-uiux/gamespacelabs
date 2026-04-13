"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.65,
  once = true,
}: FadeUpProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.12 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
