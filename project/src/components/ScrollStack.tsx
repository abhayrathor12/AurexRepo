"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import { LucideIcon } from "lucide-react";

interface Card {
  title: string;
  subtitle: string;
  points: string[];
  highlight: string;
  icons?: LucideIcon[]; // 👈 NEW
}


interface Props {
  sectionNumber: string;
  heading: string;
  description: string;
  cards?: Card[];
}

export default function ScrollStackSection({
  sectionNumber,
  heading,
  description,
  cards = [],
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stackCards = gsap.utils.toArray<HTMLElement>(".stack-card");

      gsap.set(stackCards, {
        y: 80,
        scale: 0.94,
        opacity: 0,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${stackCards.length * 220}`, // ⬅ more scroll distance
          pin: true,
          scrub: 2.5, // ⬅ adds smooth resistance
        },
    
      }).to(stackCards, {
        y: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.35,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* ================= SECTION HEADER ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <span className="text-xs font-semibold tracking-widest text-[#a8042b]">
          {sectionNumber}
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#223258] mt-2">
          {heading}
        </h2>

        <p className="text-lg text-slate-600 mt-3 max-w-3xl">
          {description}
        </p>
      </div>

      {/* ================= CARD STACK ================= */}
      <div className="relative h-[70vh] flex items-center justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className="stack-card absolute w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl bg-white"
            style={{ zIndex: i + 1 }}
          >
            <div className="grid md:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#223258]">
                  {card.title}
                </h3>

                <p className="text-slate-600 mt-2">
                  {card.subtitle}
                </p>

                <ul className="mt-6 space-y-3">
                  {(card.points ?? []).map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-[#a8042b] font-bold leading-none">
                        ●
                      </span>
                      <span className="text-slate-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT HIGHLIGHT */}
              <div className="relative flex items-center bg-gradient-to-br from-[#223258] to-[#1a2747] p-8 overflow-hidden">
  {/* Background Icons */}
 
<div className="absolute inset-0 z-0 pointer-events-none">
  {(card.icons ?? []).map((Icon, idx) => (
    <Icon
      key={idx}
      size={idx === 0 ? 140 : idx === 1 ? 120 : 100}
      className={`absolute text-white/5
        ${idx === 0 ? "top-6 right-6 rotate-12" : ""}
        ${idx === 1 ? "bottom-10 left-6 -rotate-12" : ""}
        ${idx === 2 ? "bottom-6 right-20 rotate-6" : ""}
      `}
    />
  ))}
</div>

  {/* Foreground Content */}
  <div className="relative z-10">
    <p className="text-xs uppercase tracking-widest text-[#a8042b]">
      Key Focus
    </p>

    <h4 className="text-3xl font-bold text-white mt-3 leading-tight">
      {card.highlight}
    </h4>
  </div>

  {/* Accent Glow */}
  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#a8042b]/20 blur-3xl rounded-full z-0" />
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
