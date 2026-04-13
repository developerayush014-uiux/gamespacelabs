import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, ArrowRight, MessageSquare, FileText, HelpCircle } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = { title: "Help", description: "Get support from the GameSpace Lab team." };

export default function HelpPage() {
  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      <section className="py-16 bg-[#2F4858]">
        <div className="container-xl">
          <FadeUp>
            <span className="badge mb-4" style={{ background: "rgba(222,107,72,0.2)", color: "#F08060" }}>Support</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
              HOW CAN WE<br /><span className="text-[#DE6B48] italic">HELP YOU?</span>
            </h1>
            <p className="text-[#8FA3B0] text-lg max-w-xl">Multiple ways to reach the GameSpace Lab team.</p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {/* Phone — prominent per Notion spec */}
            <FadeUp>
              <a href={`tel:${siteConfig.phone}`}
                className="card p-8 flex flex-col items-center text-center group border-2 border-[rgba(222,107,72,0)] hover:border-[rgba(222,107,72,0.2)] transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(222,107,72,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(222,107,72,0.18)] group-hover:scale-110 transition-all">
                  <Phone className="w-7 h-7 text-[#DE6B48] group-hover:animate-pulse" />
                </div>
                <h3 className="font-display font-bold text-[#2F4858] text-lg mb-1">Call Us</h3>
                <p className="text-[#DE6B48] font-display font-bold text-base mb-2 group-hover:scale-105 transition-transform">
                  {siteConfig.phone}
                </p>
                <p className="text-[#8FA3B0] text-xs">Mon–Sat, 10am–7pm IST</p>
                <span className="mt-4 text-xs font-display font-bold text-[#DE6B48] opacity-0 group-hover:opacity-100 transition-opacity">
                  Tap to call →
                </span>
              </a>
            </FadeUp>

            <FadeUp delay={0.08}>
              <a href={`mailto:${siteConfig.email}`}
                className="card p-8 flex flex-col items-center text-center group hover:border hover:border-[rgba(47,72,88,0.15)] transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(47,72,88,0.06)] flex items-center justify-center mb-5 group-hover:bg-[rgba(47,72,88,0.1)] group-hover:scale-110 transition-all">
                  <Mail className="w-7 h-7 text-[#4A6580]" />
                </div>
                <h3 className="font-display font-bold text-[#2F4858] text-lg mb-1">Email Us</h3>
                <p className="text-[#4A6580] font-medium text-sm mb-2">{siteConfig.email}</p>
                <p className="text-[#8FA3B0] text-xs">Reply within 24 hours</p>
              </a>
            </FadeUp>

            <FadeUp delay={0.14}>
              <Link href="/contact"
                className="card p-8 flex flex-col items-center text-center group hover:border hover:border-[rgba(47,72,88,0.15)] transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(47,72,88,0.06)] flex items-center justify-center mb-5 group-hover:bg-[rgba(47,72,88,0.1)] group-hover:scale-110 transition-all">
                  <MessageSquare className="w-7 h-7 text-[#4A6580]" />
                </div>
                <h3 className="font-display font-bold text-[#2F4858] text-lg mb-1">Project Form</h3>
                <p className="text-[#4A6580] text-sm mb-2">Fill out our 3-step brief</p>
                <p className="text-[#8FA3B0] text-xs">Best for new project inquiries</p>
              </Link>
            </FadeUp>
          </div>

          {/* Quick links */}
          <FadeUp>
            <h2 className="font-display font-bold text-[#2F4858] text-2xl mb-5">Quick Links</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: HelpCircle, title: "FAQ", desc: "Common questions about our services, pricing, and process.", href: "/faq", color: "#DE6B48" },
              { icon: FileText, title: "Services", desc: "Full breakdown of what we build and how we price it.", href: "/services", color: "#2F4858" },
              { icon: MessageSquare, title: "Start a Project", desc: "Fill our brief and get a proposal within 48 hours.", href: "/contact", color: "#DE6B48" },
              { icon: Mail, title: "About Us", desc: "Meet the Netflix & Google engineers behind GameSpace Lab.", href: "/about", color: "#2F4858" },
            ].map(({ icon: Icon, title, desc, href, color }) => (
              <FadeUp key={title}>
                <Link href={href} className="card p-5 flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${color}10` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-[#2F4858] text-sm mb-1">{title}</h3>
                      <ArrowRight className="w-4 h-4 text-[#8FA3B0] group-hover:translate-x-1 group-hover:text-[#DE6B48] transition-all" />
                    </div>
                    <p className="text-[#8FA3B0] text-xs leading-relaxed">{desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          {/* Urgent */}
          <FadeUp delay={0.1} className="mt-8">
            <div className="bg-[rgba(234,178,74,0.08)] border border-[rgba(234,178,74,0.2)] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[rgba(234,178,74,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-[#B8820A]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#2F4858] mb-1">Existing Client? Urgent Issue?</h3>
                <p className="text-[#4A6580] text-sm">
                  Call us directly at{" "}
                  <a href={`tel:${siteConfig.phone}`} className="text-[#DE6B48] font-bold hover:underline">
                    {siteConfig.phone}
                  </a>{" "}for priority support.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
