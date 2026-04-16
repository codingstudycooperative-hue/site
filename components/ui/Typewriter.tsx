"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  hideCursorOnComplete?: boolean;
}

export default function Typewriter({
  text,
  delay = 0,
  speed = 100,
  className = "",
  showCursor = true,
  hideCursorOnComplete = false,
}: TypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          setFinished(true);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span className={className}>
      <span>{text.slice(0, currentIndex)}</span>
      {showCursor && (!finished || !hideCursorOnComplete) && (
        <span
          className={`inline-block w-[3px] h-[1em] bg-current align-middle ml-1 -mr-2 ${
            finished ? "animate-blink-cursor" : "opacity-100"
          } ${!started ? "!opacity-0" : ""}`}
        />
      )}
      <span className="opacity-0">{text.slice(currentIndex)}</span>
    </span>
  );
}
