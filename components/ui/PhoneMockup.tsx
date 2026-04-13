"use client";
import { motion } from "framer-motion";

interface PhoneMockupProps {
  className?: string;
  children?: React.ReactNode;
  color?: string;
}

export default function PhoneMockup({ className = "", children, color = "#DE6B48" }: PhoneMockupProps) {
  return (
    <motion.div
      animate={{ y: [0, -14, -6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={`relative mx-auto ${className}`}
      style={{ width: 220 }}
    >
      {/* Phone outer frame */}
      <div className="relative rounded-[42px] bg-[#2F4858] p-[9px] shadow-[0_32px_80px_rgba(47,72,88,0.25),0_8px_24px_rgba(47,72,88,0.15)]">
        {/* Screen */}
        <div className="rounded-[34px] overflow-hidden bg-white relative" style={{ minHeight: 420 }}>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#2F4858] rounded-b-2xl z-10" />

          {/* App content */}
          <div className="flex flex-col h-full" style={{ background: `linear-gradient(180deg, ${color}15 0%, white 40%)` }}>
            {/* Status bar spacer */}
            <div className="h-8" />

            {/* App header */}
            <div className="px-4 py-3">
              <p className="font-display font-black text-[#2F4858] text-xs tracking-widest uppercase opacity-60">GameSpace Lab</p>
              <p className="font-display font-bold text-[#2F4858] text-base mt-0.5">Launch Your App</p>
            </div>

            {/* Service cards inside phone */}
            <div className="px-3 space-y-2 flex-1">
              {[
                { emoji: "🤖", label: "Android App", price: "From ₹50k", color: "#DE6B48" },
                { emoji: "🍎", label: "iOS App", price: "From ₹100k", color: "#2F4858" },
                { emoji: "🚀", label: "MVP Sprint", price: "8–12 weeks", color: "#EAB24A" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 shadow-[0_2px_8px_rgba(47,72,88,0.08)]">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: `${item.color}15` }}>
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-[#2F4858] text-xs">{item.label}</p>
                    <p className="text-[10px] text-[#8FA3B0]">{item.price}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: item.color }}>
                    <span className="text-white text-[10px] font-bold">→</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button in phone */}
            <div className="px-3 pb-4 pt-3">
              <div className="w-full rounded-xl py-3 text-center font-display font-bold text-white text-xs"
                style={{ background: color }}>
                Book a Discovery Call
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute right-[-4px] top-24 w-[4px] h-10 bg-[#1e3040] rounded-r-sm" />
      <div className="absolute left-[-4px] top-20 w-[4px] h-7 bg-[#1e3040] rounded-l-sm" />
      <div className="absolute left-[-4px] top-32 w-[4px] h-7 bg-[#1e3040] rounded-l-sm" />

      {children}
    </motion.div>
  );
}
