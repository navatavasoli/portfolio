"use client";

import { Component, ReactNode, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// The Spline runtime is a WebGL bundle that touches `window` on import, so it
// is client-only and pulled in its own chunk (next/dynamic, `ssr: false`).
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SceneLoader />,
});

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    // Spline's orbit controls read the wheel as zoom, so scrolling the page
    // with the pointer over the scene warps the camera instead of moving on.
    // Swallow wheel events in the capture phase, before they reach the
    // runtime's canvas listener — the page still scrolls normally because
    // nothing here calls preventDefault.
    const swallow = (e: WheelEvent) => e.stopPropagation();
    el.addEventListener("wheel", swallow, { capture: true, passive: true });
    return () => el.removeEventListener("wheel", swallow, { capture: true });
  }, []);

  return (
    <div ref={hostRef} className="h-full w-full">
      <SceneBoundary>
        <Spline
          scene={scene}
          // `touch-pan-y` leaves vertical panning to the browser, so dragging
          // the scene on a phone orbits without hijacking page scroll.
          className={cn("h-full w-full [&_canvas]:touch-pan-y", className)}
          onLoad={() => onLoad?.()}
        >
          {/* react-spline renders children until the scene finishes loading. */}
          <SceneLoader />
        </Spline>
      </SceneBoundary>
    </div>
  );
}

/** Boot-sequence placeholder, styled to match the datasheet theme. */
function SceneLoader() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <div className="h-px w-32 overflow-hidden bg-border">
        <div className="h-full w-1/3 animate-[scan_1.4s_ease-in-out_infinite] bg-primary" />
      </div>
      <span className="font-tech text-[10px] tracking-[0.2em] text-muted-foreground/70">
        INITIALIZING SCENE
      </span>
    </div>
  );
}

/**
 * react-spline rethrows load failures during render, which would take the whole
 * page down if the scene CDN is unreachable. Contain it to this panel.
 */
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-tech text-[10px] tracking-[0.2em] text-muted-foreground/60">
            SCENE UNAVAILABLE · OFFLINE
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}
