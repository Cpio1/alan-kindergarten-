"use client";

import { motion, MotionConfig, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Жүйелік prefers-reduced-motion параметрін құрметтейді. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Ығысу қашықтығы (px). Мобильді нұсқаларда кішірек мән беріңіз. */
  y?: number;
  x?: number;
  scale?: number;
  as?: "div" | "li" | "article" | "span";
};

export function Reveal({ children, className, delay = 0, y = 24, x = 0, scale = 1, as = "div" }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerItemSoft: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  soft,
  as = "div",
  hover,
}: {
  children: ReactNode;
  className?: string;
  soft?: boolean;
  as?: "div" | "li" | "article";
  /** Desktop hover-эффект (көтерілу). */
  hover?: boolean;
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={soft ? staggerItemSoft : staggerItem}
      whileHover={hover ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } } : undefined}
    >
      {children}
    </Comp>
  );
}
