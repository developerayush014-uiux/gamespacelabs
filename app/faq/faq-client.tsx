"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { faqs, siteConfig } from "@/data/content";

export default function FaqClient() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      <section className="py-16 bg-[#2F4858]">
        <div className="container-xl">
          <FadeUp>
            <span className="badge mb-4" style={{ background: "rgba(222,107,72,0.2)", color: "#F08060" }}>FAQs</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
              FREQUENTLY<br /><span className="text-[#DE6B48] italic">ASKED</span>
            </h1>
            <p className="text-[#8FA3B0] text-lg max-w-xl">Everything you need to know about working with us.</p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div className="bg-white rounded-2xl p-2 shadow-card">
              {faqs.map((item, i) => (
                <div key={i} className="faq-item px-4">
                  <button onClick={() => setOpen(open === i ? null : i)} className="faq-question">
                    <span>{item.q}</span>
                    <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}
                      className="w-7 h-7 rounded-full border border-[rgba(47,72,88,0.15)] flex items-center justify-center flex-shrink-0">
                      <ChevronDown className="w-4 h-4 text-[#8FA3B0]" />
                    </motion.div>
                  </button>
                  <motion.div initial={false}
                    animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                    <p className="text-[#4A6580] text-sm leading-relaxed pb-5">{item.a}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="bg-white rounded-2xl p-10 shadow-card border-t-4 border-[#DE6B48]">
              <h2 className="font-display font-bold text-[#2F4858] text-2xl mb-3">Still have questions?</h2>
              <p className="text-[#4A6580] text-sm mb-6">Get in touch directly — we&apos;re happy to discuss your project.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary text-sm">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-outline text-sm inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {siteConfig.phone}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
