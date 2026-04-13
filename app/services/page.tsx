import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Android, iOS, Web, MVP, and AI Automation — built by Netflix & Google engineers.",
};

export default function ServicesPage() {
  const process = [
    { step: "01", title: "Discovery", desc: "Free 30-min call to understand your goals." },
    { step: "02", title: "Proposal", desc: "Fixed-price quote delivered in 48 hours." },
    { step: "03", title: "Build", desc: "Weekly sprint demos — you see progress daily." },
    { step: "04", title: "Launch", desc: "Store submission, deployment, 30-day support." },
  ];

  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      {/* Header */}
      <section className="section-py bg-[#2F4858] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(rgba(222,107,72,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="container-xl relative z-10">
          <FadeUp>
            <span className="badge mb-5" style={{ background: "rgba(222,107,72,0.2)", color: "#F08060" }}>
              5 Service Lines
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-5">
              EVERYTHING YOUR<br />
              <span className="text-[#DE6B48] italic">STARTUP NEEDS</span>
            </h1>
            <p className="text-[#8FA3B0] text-lg max-w-2xl">
              We cover the full spectrum of digital product development — from native mobile to AI automation — so you don&apos;t need five agencies.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py">
        <div className="container-xl">
          <div className="space-y-6">
            {services.map((svc, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeUp key={svc.id} delay={i * 0.05}>
                  <div className="card overflow-hidden">
                    <div className={`flex flex-col lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                      {/* Content side */}
                      <div className="flex-1 p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                            style={{ background: svc.bg, border: `1px solid ${svc.border}` }}>
                            {svc.emoji}
                          </div>
                          <div>
                            <h2 className="font-display font-bold text-[#2F4858] text-2xl">{svc.title}</h2>
                            <span className="text-xs font-display font-bold" style={{ color: svc.color }}>{svc.subtitle}</span>
                          </div>
                        </div>
                        <p className="text-[#4A6580] text-base leading-relaxed mb-6">{svc.description}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                          {svc.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-[#4A6580]">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ background: svc.bg }}>
                                <Check className="w-3 h-3" style={{ color: svc.color }} />
                              </div>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact"
                          className="inline-flex items-center gap-2 font-display font-bold text-sm px-5 py-2.5 rounded-full transition-all group"
                          style={{ background: svc.bg, color: svc.color, border: `1.5px solid ${svc.border}` }}>
                          Get a Quote
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Visual side */}
                      <div className="lg:w-56 xl:w-64 flex items-center justify-center p-8 border-t lg:border-t-0 lg:border-l"
                        style={{ background: svc.bg, borderColor: svc.border }}>
                        <div className="text-center">
                          <div className="text-6xl mb-3">{svc.emoji}</div>
                          <div className="font-display font-black text-2xl" style={{ color: svc.color }}>
                            {i === 3 ? "8–12wk" : i === 4 ? "AI✨" : "v1.0"}
                          </div>
                          <p className="text-xs font-medium mt-1" style={{ color: `${svc.color}80` }}>
                            {i === 3 ? "To MVP" : i === 4 ? "Powered" : "Shipped"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-[#ECEAE3]">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <h2 className="heading-lg text-4xl mb-3">Our Process</h2>
            <p className="text-[#4A6580]">Simple. Transparent. Predictable.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="font-display font-black text-[#DE6B48] text-3xl mb-3">{p.step}</div>
                  <h3 className="font-display font-bold text-[#2F4858] text-lg mb-2">{p.title}</h3>
                  <p className="text-[#4A6580] text-sm">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F5F0]">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-lg text-3xl md:text-4xl mb-4">Not sure which service you need?</h2>
            <p className="text-[#4A6580] mb-8 max-w-md mx-auto">Book a free 30-minute call and we&apos;ll guide you to the right solution for your stage and budget.</p>
            <Link href="/contact" className="btn-primary">
              Book Free Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
