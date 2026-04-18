"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDE_ITEMS = [
  {
    slug: "microbit-extension-pack",
    name: "마이크로비트 & 확장팩",
    label: "피지컬 컴퓨팅",
    image: "/assets/teachingtools/001.webp",
  },
  {
    slug: "microbit-genius-kit",
    name: "지니어스 스마트 키트",
    label: "피지컬 컴퓨팅",
    image: "/assets/teachingtools/002.webp",
  },
  {
    slug: "microbit-retro-arcade",
    name: "레트로 아케이드 키트",
    label: "피지컬 컴퓨팅",
    image: "/assets/teachingtools/003.webp",
  },
  {
    slug: "ozobot",
    name: "오조봇 (Ozobot)",
    label: "로봇 코딩 / 유아·초등",
    image: "/assets/teachingtools/017.webp",
  },
  {
    slug: "kamibot",
    name: "카미봇 (Kamibot)",
    label: "AI 로봇 코딩",
    image: "/assets/teachingtools/004.webp",
  },
  {
    slug: "sphero",
    name: "스피로 볼 (Sphero)",
    label: "모션 & 로봇 코딩",
    image: "/assets/teachingtools/018.webp",
  },
  {
    slug: "arduino",
    name: "아두이노 센서 키트",
    label: "IOT / 메이커 교육",
    image: "/assets/teachingtools/019.webp",
  },
  {
    slug: "educational-drone",
    name: "텔로(Tello) 에듀 자율주행 드론",
    label: "AI 자율주행 / 드론 수학",
    image: "/assets/teachingtools/009.webp",
  },
  {
    slug: "vr-meta",
    name: "메타 퀘스트 (Meta Quest)",
    label: "가상현실(VR) / 코스페이시스",
    image: "/assets/teachingtools/020.webp",
  },
  {
    slug: "makeymakey",
    name: "메이키메이키 (Makey Makey)",
    label: "발명 / 융합 코딩",
    image: "/assets/teachingtools/021.webp",
  },
];

interface PopupState {
  slug: string;
  x: number;
  y: number;
  above: boolean;
}

export default function EquipmentSlider() {
  const [popup, setPopup] = useState<PopupState | null>(null);

  const showPopup = useCallback((slug: string, x: number, y: number) => {
    setPopup({ slug, x, y, above: y > 220 });
  }, []);

  const hidePopup = useCallback(() => setPopup(null), []);

  const popupItem = popup
    ? SLIDE_ITEMS.find((e) => e.slug === popup.slug)
    : null;

  return (
    <>
      <div className="overflow-hidden relative w-full -mx-6 px-6 sm:mx-0 sm:px-0">
        <div className="flex gap-5 w-max animate-infinite-scroll hover:[animation-play-state:paused] pb-6 pt-1">
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-5" aria-hidden={group === 2}>
              {SLIDE_ITEMS.map((item) => (
                <Link
                  key={item.slug}
                  href={`/equipment/${item.slug}`}
                  className="flex-none w-[280px] group bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all block"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    showPopup(
                      item.slug,
                      rect.left + rect.width / 2,
                      rect.top + window.scrollY,
                    );
                  }}
                  onMouseLeave={hidePopup}
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    showPopup(
                      item.slug,
                      touch.clientX,
                      touch.clientY + window.scrollY,
                    );
                  }}
                  onTouchEnd={hidePopup}
                >
                  <h3 className="font-bold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors text-base">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-400">{item.label}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {popup && popupItem && (
        <div
          className="fixed z-50 pointer-events-none rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden"
          style={{
            left: popup.x,
            top: popup.above
              ? popup.y - window.scrollY - 210
              : popup.y - window.scrollY + 12,
            transform: "translateX(-50%)",
            width: 200,
          }}
        >
          <Image
            src={popupItem.image}
            alt={popupItem.name}
            width={200}
            height={160}
            className="w-full object-contain p-3"
          />
          <div className="px-3 pb-3 text-center text-xs font-medium text-slate-600">
            {popupItem.name}
          </div>
        </div>
      )}
    </>
  );
}
