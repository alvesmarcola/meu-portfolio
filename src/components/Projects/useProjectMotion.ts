import { useEffect, useRef, useState } from "react";

export function useProjectMotion() {
  const rootRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const scene = root.querySelector<HTMLElement>("[data-project-scene]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer?.unobserve(root);
              }
            },
            { threshold: 0.08 },
          )
        : null;

    if (observer) {
      observer.observe(root);
    } else {
      setIsVisible(true);
    }

    if (!scene || reducedMotion) {
      return () => observer?.disconnect();
    }

    const resetTilt = () => {
      scene.style.setProperty("--rotate-x", "0deg");
      scene.style.setProperty("--rotate-y", "0deg");
      scene.style.setProperty("--parallax-x", "0px");
      scene.style.setProperty("--parallax-y", "0px");
      scene.style.setProperty("--window-x", "0px");
      scene.style.setProperty("--window-y", "0px");
      scene.style.setProperty("--phone-x", "0px");
      scene.style.setProperty("--phone-y", "0px");
      scene.style.setProperty("--detail-x", "0px");
      scene.style.setProperty("--detail-y", "0px");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const bounds = scene.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      scene.style.setProperty("--rotate-x", `${-y * 3}deg`);
      scene.style.setProperty("--rotate-y", `${x * 4}deg`);
      scene.style.setProperty("--parallax-x", `${x * 8}px`);
      scene.style.setProperty("--parallax-y", `${y * 8}px`);
      scene.style.setProperty("--window-x", `${x * 9}px`);
      scene.style.setProperty("--window-y", `${y * 7}px`);
      scene.style.setProperty("--phone-x", `${-x * 18}px`);
      scene.style.setProperty("--phone-y", `${-y * 14}px`);
      scene.style.setProperty("--detail-x", `${x * 22}px`);
      scene.style.setProperty("--detail-y", `${y * 16}px`);
    };

    scene.addEventListener("pointermove", handlePointerMove, { passive: true });
    scene.addEventListener("pointerleave", resetTilt);

    return () => {
      observer?.disconnect();
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerleave", resetTilt);
    };
  }, []);

  return { rootRef, isVisible };
}
