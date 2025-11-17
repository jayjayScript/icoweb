// app/ScrollProvider.tsx
'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // ---- Lenis init (ultra‑smooth) ----
    const lenis = new Lenis({
      duration: 1.2,          // feel‑good inertia
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,    // keep native on mobile
    //   normalizeWheel: true,
    });

    lenisRef.current = lenis;

    // ---- RAF loop (required) ----
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafHandle = requestAnimationFrame(raf);

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(rafHandle);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}