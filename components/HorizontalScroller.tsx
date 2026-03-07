"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  items: React.ReactNode[];
  bgColor?: string;
}

export default function HorizontalScroller({ items, bgColor = "#EAEFEF" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);

  const hasLoop = items.length > 1;
  const duplicated = hasLoop ? [...items, ...items] : items;
  const SPEED = 40;

  const wrapPosition = (value: number) => {
    if (!hasLoop || trackWidth <= 0) return value;

    if (value <= -trackWidth) {
      return value + trackWidth;
    }

    if (value > 0) {
      return value - trackWidth;
    }

    return value;
  };

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const measureWidth = () => {
      const fullWidth = element.scrollWidth;
      const measured = hasLoop ? fullWidth / 2 : fullWidth;
      setTrackWidth(measured);

      if (!hasLoop) {
        x.set(0);
      } else {
        x.set(wrapPosition(x.get()));
      }
    };

    measureWidth();

    const observer = new ResizeObserver(measureWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, [hasLoop, items, x]);

  useAnimationFrame((_, delta) => {
    if (isPausedRef.current || !hasLoop || trackWidth <= 0) return;

    const next = x.get() - (SPEED * delta) / 1000;
    x.set(wrapPosition(next));
  });

  const manualShift = (direction: "left" | "right") => {
    if (!hasLoop || trackWidth <= 0) return;

    const shiftAmount = 300;
    const current = x.get();
    const next = direction === "left" ? current + shiftAmount : current - shiftAmount;
    x.set(wrapPosition(next));
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {hasLoop && (
        <button
          onClick={() => manualShift("left")}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#25343F] text-white p-2.5 rounded-full shadow-lg hover:bg-[#FF9B51] transition md:left-4 md:p-3"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {hasLoop && (
        <button
          onClick={() => manualShift("right")}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#25343F] text-white p-2.5 rounded-full shadow-lg hover:bg-[#FF9B51] transition md:right-4 md:p-3"
        >
          <ChevronRight size={20} />
        </button>
      )}

      <motion.div ref={containerRef} style={{ x }} className="flex gap-8">
        {duplicated.map((item, index) => (
          <div key={index} className="w-[280px] flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>

      <div
        style={{
          background: `linear-gradient(to right, ${bgColor}, transparent)`,
        }}
        className="pointer-events-none absolute left-0 top-0 h-full w-20"
      />
      <div
        style={{
          background: `linear-gradient(to left, ${bgColor}, transparent)`,
        }}
        className="pointer-events-none absolute right-0 top-0 h-full w-20"
      />
    </div>
  );
}
