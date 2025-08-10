import { useEffect, useState } from "react";

/**
 * Hook that returns opacity based on scroll position.
 * @param fadeEnd - Distance in pixels to fully fade out (default: 300)
 * @param initialOpacity - Starting opacity (default: 1)
 */
export function useScrollFade(fadeEnd = 300, initialOpacity = 1): number {
  const [opacity, setOpacity] = useState(initialOpacity);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / fadeEnd, 1);
      setOpacity(1 - progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fadeEnd]);

  return opacity;
}
