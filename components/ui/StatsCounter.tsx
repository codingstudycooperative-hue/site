"use client";

import { useEffect, useRef, useState } from "react";

const ITEM_H = 56;
const DURATION = 2000;
const CYCLES = 4;

export interface StatConfig {
  value?: number;
  suffix?: string;
  textDisplay?: string;
  label: string;
}

const DEFAULT_STATS: StatConfig[] = [
  { value: 500, suffix: "+", label: "누적 수업 시간" },
  { value: 30, suffix: "+", label: "협력 학교·기관" },
  { value: 10, suffix: "+", label: "보유 교구 종류" },
  { value: 100, suffix: "%", label: "전문 자격 보유" },
];

function SlotDigit({
  digit,
  started,
  delay,
}: {
  digit: number;
  started: boolean;
  delay: number;
}) {
  const stripRef = useRef<HTMLDivElement>(null);

  const items: number[] = [];
  for (let c = 0; c < CYCLES; c++) {
    for (let n = 0; n <= 9; n++) items.push(n);
  }
  items.push(digit);

  const finalOffset = -(items.length - 1) * ITEM_H;

  useEffect(() => {
    const el = stripRef.current;
    if (!el || !started) return;
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        el.style.transition = `transform ${DURATION}ms cubic-bezier(0.12, 0, 0.08, 1)`;
        el.style.transform = `translateY(${finalOffset}px)`;
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [started, finalOffset, delay]);

  return (
    <div style={{ height: ITEM_H, overflow: "hidden" }}>
      <div ref={stripRef} className="flex flex-col will-change-transform">
        {items.map((n, i) => (
          <div
            key={i}
            className="flex items-center justify-center font-bold text-primary-600"
            style={{ height: ITEM_H, fontSize: "3rem", lineHeight: 1 }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

function SlotNumber({ value, suffix }: { value: number; suffix: string }) {
  const [started, setStarted] = useState(false);
  const [showSuffix, setShowSuffix] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const digits = String(value).split("").map(Number);
  const STAGGER = 120;
  const totalDuration = DURATION + (digits.length - 1) * STAGGER;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          setTimeout(() => setShowSuffix(true), totalDuration);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started, totalDuration]);

  return (
    <div
      ref={containerRef}
      className="flex items-center"
      style={{ height: ITEM_H }}
    >
      {digits.map((d, i) => (
        <SlotDigit key={i} digit={d} started={started} delay={i * STAGGER} />
      ))}
      <span
        className="font-bold text-primary-600 transition-opacity duration-500"
        style={{
          fontSize: "3rem",
          lineHeight: 1,
          opacity: showSuffix ? 1 : 0,
        }}
      >
        {suffix}
      </span>
    </div>
  );
}

function FadeText({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center transition-opacity duration-700"
      style={{ height: ITEM_H, opacity: visible ? 1 : 0 }}
    >
      {text.split("\n").map((line, i) => (
        <span
          key={i}
          className="font-bold text-primary-600 leading-tight"
          style={{ fontSize: "1.6rem" }}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

export default function StatsCounter({
  stats,
  className,
}: {
  stats?: StatConfig[];
  className?: string;
}) {
  const items = stats ?? DEFAULT_STATS;

  return (
    <div
      className={
        className ??
        "mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100"
      }
    >
      {items.map((stat) => (
        <div key={stat.label}>
          {stat.value !== undefined && stat.suffix !== undefined ? (
            <SlotNumber value={stat.value} suffix={stat.suffix} />
          ) : stat.textDisplay !== undefined ? (
            <FadeText text={stat.textDisplay} />
          ) : null}
          <div className="text-sm text-slate-400 font-medium mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
