"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Check, Phone } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import PhoneMockup from "@/components/ui/PhoneMockup";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  services, howItWorks, stats, niches, faqs, siteConfig, pressLogos
} from "@/data/content";

// ─── Stat counter ──────────────────────────────────────────────────
function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-black text-4xl md:text-5xl text-[#2F4858] mb-1">
        {inView ? <CountUp end={value} duration={2.2} delay={delay} suffix={suffix} /> : `0${suffix}`}
      </div>
      <p className="text-[#8FA3B0] text-sm font-medium">{label}</p>
    </div>
  );
}

// ─── FAQ item ─────────────────────────────────────────────────────
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question">
        <span>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[rgba(47,72,88,0.15)] flex items-center justify-center">
          <ChevronDown className="w-4 h-4 text-[#8FA3B0]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-[#4A6580] text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F7F5F0]">
        {/* Subtle decorative elements */}
        <div className="absolute top-32 left-12 w-3 h-3 text-[#DE6B48] opacity-50 text-2xl select-none">✦</div>
        <div className="absolute top-48 right-20 w-3 h-3 text-[#EAB24A] opacity-40 text-xl select-none">✦</div>
        <div className="absolute bottom-40 left-32 w-2 h-2 rounded-full bg-[#DE6B48] opacity-30" />
        <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-[#EAB24A] opacity-40" />

        <div className="container-xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100vh-5rem)]">
            {/* Left — copy */}
            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="py-16 lg:py-24">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 badge badge-terra mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#DE6B48] animate-pulse" />
                Netflix × Google Engineers
              </motion.div>

              {/* Headline — Snabbit-style bold caps */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="heading-xl text-5xl sm:text-6xl lg:text-7xl mb-6"
              >
                INDIA&apos;S FASTEST<br />
                <span className="text-[#DE6B48] italic">MVP LAUNCH</span><br />
                PARTNER
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-[#4A6580] text-lg leading-relaxed mb-8 max-w-lg"
              >
                We help startup founders ship <strong className="text-[#2F4858]">Android, iOS, and Web products</strong> at startup speed —
                without sacrificing quality. From idea to investor demo in 8–12 weeks.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/contact" className="btn-primary text-base">
                  Start Your MVP <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${siteConfig.phone}`}
                  className="btn-outline text-base group">
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                  Call Us Now
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                {["40+ Projects", "Ex-Netflix & Google", "8–12 Week MVP"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-[#4A6580]">
                    <Check className="w-4 h-4 text-[#DE6B48]" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — phone mockup + floating widgets */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center items-center py-16 lg:py-24"
            >
              {/* Background circle */}
              <div className="absolute w-80 h-80 rounded-full bg-[rgba(222,107,72,0.06)] blur-3xl" />
              <div className="absolute w-64 h-64 rounded-full bg-[rgba(234,178,74,0.08)] blur-2xl translate-x-20" />

              <PhoneMockup />

              {/* Floating widget — top left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-4 top-24 lg:left-0 xl:-left-8 widget-card flex items-center gap-2.5 max-w-[160px]"
              >
                <div className="w-8 h-8 rounded-xl bg-[rgba(234,178,74,0.15)] flex items-center justify-center text-base flex-shrink-0">⚡</div>
                <div>
                  <p className="font-display font-bold text-[#2F4858] text-xs">Fast Delivery</p>
                  <p className="text-[10px] text-[#8FA3B0]">8–12 week MVPs</p>
                </div>
              </motion.div>

              {/* Floating widget — bottom right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-4 bottom-24 lg:right-0 xl:-right-4 widget-card flex items-center gap-2.5 max-w-[170px]"
              >
                <div className="w-8 h-8 rounded-xl bg-[rgba(222,107,72,0.1)] flex items-center justify-center text-base flex-shrink-0">🚀</div>
                <div>
                  <p className="font-display font-bold text-[#2F4858] text-xs">40+ Projects</p>
                  <p className="text-[10px] text-[#8FA3B0]">Shipped globally</p>
                </div>
              </motion.div>

              {/* Floating widget — top right */}
              <motion.div
                animate={{ y: [0, -6, 4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute right-2 top-32 widget-card text-center px-3 py-2"
              >
                <p className="font-display font-black text-[#2F4858] text-lg leading-none">4.9</p>
                <div className="flex gap-0.5 mt-0.5">{"★★★★★".split("").map((s, i) => <span key={i} className="text-[#EAB24A] text-xs">{s}</span>)}</div>
                <p className="text-[#8FA3B0] text-[9px] mt-0.5 font-medium">Client Rating</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-[#8FA3B0]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────── */}
      <section className="bg-[#2F4858] py-14">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="section-py bg-[#F7F5F0]">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <span className="badge badge-terra mb-4">What We Build</span>
            <h2 className="heading-lg text-4xl md:text-5xl mb-4">
              ONE AGENCY,<br />
              <span className="text-[#DE6B48]">MANY SOLUTIONS</span>
            </h2>
            <p className="text-[#4A6580] text-lg max-w-xl mx-auto">
              From native mobile apps to AI-powered platforms — we cover the full stack of what a modern startup needs.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <FadeUp key={svc.id} delay={i * 0.07}>
                <div className="card p-6 h-full group cursor-pointer"
                  style={{ borderTop: `3px solid ${svc.color}` }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
                    style={{ background: svc.bg, border: `1px solid ${svc.border}` }}>
                    {svc.emoji}
                  </div>
                  <div className="badge mb-3 text-[10px]"
                    style={{ background: svc.bg, color: svc.color, border: `1px solid ${svc.border}` }}>
                    {svc.subtitle}
                  </div>
                  <h3 className="font-display font-bold text-[#2F4858] text-xl mb-2">{svc.title}</h3>
                  <p className="text-[#4A6580] text-sm leading-relaxed mb-5">{svc.description}</p>
                  <ul className="space-y-2 mb-5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#4A6580]">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: svc.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-display font-bold transition-all"
                    style={{ color: svc.color }}>
                    Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section id="how-it-works" className="section-py bg-[#2F4858]">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <span className="badge mb-4" style={{ background: "rgba(222,107,72,0.2)", color: "#F08060" }}>Process</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              HOW IT <span className="text-[#DE6B48] italic">WORKS?</span>
            </h2>
            <p className="text-[#8FA3B0] text-lg max-w-xl mx-auto">
              From first call to shipped product — a clear, proven process with zero guesswork.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howItWorks.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.1}>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors group">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="step-number">{step.step}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{step.icon}</span>
                        <h3 className="font-display font-bold text-white text-lg">{step.title}</h3>
                      </div>
                      <p className="text-[#8FA3B0] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4} className="text-center mt-10">
            <Link href="/contact" className="btn-primary">
              Book a Free Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── NICHE MARQUEE ─────────────────────────────────────── */}
      <section className="py-12 bg-[#ECEAE3] overflow-hidden">
        <FadeUp className="text-center mb-6">
          <p className="font-display font-bold text-[#8FA3B0] text-xs tracking-widest uppercase">Industries We&apos;ve Served</p>
        </FadeUp>
        <div className="marquee-container">
          <div className="flex gap-3 animate-marquee whitespace-nowrap w-max">
            {[...niches, ...niches].map((n, i) => (
              <span key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[rgba(47,72,88,0.08)] text-[#4A6580] text-sm font-medium whitespace-nowrap shadow-sm">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-py bg-[#F7F5F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <span className="badge badge-terra mb-4">FAQs</span>
              <h2 className="heading-lg text-4xl md:text-5xl mb-4">
                FREQUENTLY<br />
                <span className="text-[#DE6B48]">ASKED</span>
              </h2>
              <p className="text-[#4A6580] text-lg mb-8">
                Everything you need to know about working with GameSpace Lab. Still have questions?
              </p>
              <a href={`tel:${siteConfig.phone}`}
                className="btn-outline inline-flex items-center gap-2 group">
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                Call Us: {siteConfig.phone}
              </a>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                {faqs.slice(0, 6).map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} index={i} />
                ))}
              </div>
              <div className="text-center mt-5">
                <Link href="/faq" className="text-sm font-display font-semibold text-[#DE6B48] hover:underline">
                  View all {faqs.length} questions →
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="section-py bg-[#DE6B48] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-black/10 blur-3xl pointer-events-none" />

        <div className="container-xl relative z-10 text-center">
          <FadeUp>
            <p className="font-display font-bold text-white/70 text-sm tracking-widest uppercase mb-4">Ready to Build?</p>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
              YOUR MVP IS<br />WAITING TO LAUNCH
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              Join 40+ founders who chose GameSpace Lab to bring their ideas to life. First discovery call is always free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#DE6B48] font-display font-bold px-8 py-4 rounded-full hover:bg-[#F7F5F0] transition-colors shadow-lg text-base">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 font-display font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
