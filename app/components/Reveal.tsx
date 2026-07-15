"use client";

import { useEffect, useState, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "article";
  className?: string;
  children: ReactNode;
};

export default function Reveal({ as = "div", className = "", children }: RevealProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  const classes = `reveal ${visible ? "is-visible" : ""} ${className}`.trim();
  if (as === "article") return <article ref={setNode} className={classes}>{children}</article>;
  return <div ref={setNode} className={classes}>{children}</div>;
}
