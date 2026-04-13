import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { founders, niches } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Netflix & Google engineers behind GameSpace Lab — India's fastest MVP launch partner.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      {/* Hero */}
      <section className="section-py bg-[#2F4858] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#DE6B48]/10 blur-3xl pointer-events-none" />
        <div className="container-xl relative z-10">
          <FadeUp>
            <span className="badge mb-5" style={{ background: "rgba(222,107,72,0.2)", color: "#F08060" }}>About Us</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-5">
              ENGINEERS WHO<br />
              <span className="text-[#DE6B48] italic">BUILD DREAMS</span>
            </h1>
            <p className="text-[#8FA3B0] text-lg max-w-2xl">
              Navigating the mobile ecosystem requires more than just coding — it requires deep understanding of performance, security, and user retention. GameSpace Lab was built to bring that depth to every engagement.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-py">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="badge badge-terra mb-4">Our Story</span>
              <h2 className="heading-lg text-4xl mb-6">Built for the New<br /><span className="text-[#DE6B48]">Age of Founders</span></h2>
              <div className="space-y-4 text-[#4A6580] leading-relaxed text-base">
                <p>
                  GameSpace Lab is built by engineers from <strong className="text-[#2F4858]">Netflix and Google</strong> — engineers who understand what it takes to ship reliable, scalable products at speed.
                </p>
                <p>
                  We&apos;ve delivered <strong className="text-[#2F4858]">40+ projects</strong> across HR, FinTech, fitness, creator economy, CRM, and more. We started in India because we believe the next wave of world-class startups will come from here.
                </p>
                <p>
                  Our mission is simple: become the <strong className="text-[#2F4858]">go-to engineering partner</strong> for startup founders who want to build fast, raise funding, and grow without burning out on technical debt.
                </p>
                <p>
                  Whether you&apos;re a solo founder with a napkin sketch or a team that&apos;s just been funded — <strong className="text-[#DE6B48]">we&apos;ll get you from idea to launch.</strong>
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🏗️", title: "Full Lifecycle", desc: "From MVP to scale — we own the whole journey" },
                  { emoji: "⚡", title: "Speed First", desc: "8–12 week MVPs without sacrificing quality" },
                  { emoji: "🌏", title: "India-based", desc: "South & Southeast Asia expansion focus" },
                  { emoji: "🤝", title: "Partner-led", desc: "Direct access to senior engineers, always" },
                ].map(({ emoji, title, desc }) => (
                  <div key={title} className="card p-5">
                    <div className="text-2xl mb-3">{emoji}</div>
                    <h3 className="font-display font-bold text-[#2F4858] text-sm mb-1">{title}</h3>
                    <p className="text-[#8FA3B0] text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-py bg-[#ECEAE3]">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <span className="badge badge-slate mb-4">Leadership</span>
            <h2 className="heading-lg text-4xl mb-3">Founder & Co-Founder</h2>
            <p className="text-[#4A6580] max-w-xl mx-auto">
              Two engineers, one shared mission: give startup founders access to the same engineering quality that powers Netflix and Google.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {founders.map((f, i) => (
              <FadeUp key={f.id} delay={i * 0.12}>
                <div className="card p-8">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-2xl mb-5 flex items-center justify-center text-4xl"
                    style={{ background: i === 0 ? "rgba(222,107,72,0.1)" : "rgba(47,72,88,0.08)" }}>
                    {i === 0 ? "👨‍💻" : "👩‍💻"}
                  </div>
                  <span className="badge badge-terra text-[10px] mb-3">{f.tag}</span>
                  <h3 className="font-display font-bold text-[#2F4858] text-xl mb-0.5">{f.name}</h3>
                  <p className="text-[#DE6B48] font-display font-semibold text-sm mb-4">{f.role}</p>
                  <p className="text-[#4A6580] text-sm leading-relaxed mb-5">{f.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-[rgba(47,72,88,0.06)] text-[#4A6580] text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3} className="text-center mt-8">
            <p className="text-[#8FA3B0] text-sm italic">Full founder bios coming soon.</p>
          </FadeUp>
        </div>
      </section>

      {/* Industries */}
      <section className="section-py">
        <div className="container-xl">
          <FadeUp className="text-center mb-10">
            <h2 className="heading-lg text-3xl mb-3">Industries We&apos;ve Served</h2>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-3">
            {niches.map((n, i) => (
              <FadeUp key={n} delay={i * 0.03}>
                <span className="px-5 py-2.5 rounded-full bg-white border border-[rgba(47,72,88,0.1)] text-[#2F4858] text-sm font-display font-semibold shadow-sm hover:shadow-card transition-shadow cursor-default">
                  {n}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#ECEAE3]">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-lg text-3xl mb-4">Ready to work together?</h2>
            <p className="text-[#4A6580] mb-8">We&apos;d love to hear about your idea. First call is always free.</p>
            <Link href="/contact" className="btn-primary">
              Let&apos;s Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
