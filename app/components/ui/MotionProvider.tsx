"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Applies the visitor's "reduce motion" setting to every animation on the page.
 * This replaces the per-component useReducedMotion() checks, which rendered
 * different HTML on the server vs. the browser for people with that setting on
 * (a hydration mismatch).
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
