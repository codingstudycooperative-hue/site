"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  end: number;
  suffix: string;
  label: string;
  duration: number;
}

const STATS: StatItem[] = [
  { end: 500, suffix: "+", label: "누적 수업 시간", duration: 1800 },
  { end: 30, suffix: "+", label: "협력 학교·기관", duration: 1200 },
  { end: 10, suffix: "+", label: "보유 교구 종류", duration: 900 },
  { end: 100, suffix: "%", label: "전문 자격 보유", duration: 1500 },
];

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function CountUpNumber({ end, suffix, duration }: Omit<StatItem, "label">) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * end));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-5xl font-bold text-primary-600 mb-1">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <CountUpNumber
            end={stat.end}
            suffix={stat.suffix}
            duration={stat.duration}
          />
          <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
