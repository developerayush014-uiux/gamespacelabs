"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#F7F5F0]/90 backdrop-blur-xl border-b border-[rgba(47,72,88,0.08)] shadow-[0_2px_20px_rgba(47,72,88,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="https://cdn.discordapp.com/attachments/865420585437102090/1249046780096811111/image.png?ex=69ddcb36&is=69dc79b6&hm=950200640d532b5f1ee4437fd68e3ee50064acb0bda33b285426ff4b60f9686e"
                alt="Company Logo"
                className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-display font-bold text-[#2F4858] text-lg tracking-tight">
                GameSpace<span className="text-[#DE6B48]"> Lab</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "bg-[rgba(47,72,88,0.08)] text-[#2F4858] font-semibold"
                      : "text-[#4A6580] hover:text-[#2F4858] hover:bg-[rgba(47,72,88,0.05)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href={`tel:${siteConfig.phone}`}
                className="text-sm font-semibold text-[#2F4858] hover:text-[#DE6B48] transition-colors font-display">
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Start a Project
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl text-[#2F4858] hover:bg-[rgba(47,72,88,0.06)] transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[rgba(47,72,88,0.3)] backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#F7F5F0] border-l border-[rgba(47,72,88,0.08)] flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-[rgba(47,72,88,0.08)]">
                <span className="font-display font-bold text-[#2F4858]">Menu</span>
                <button onClick={() => setOpen(false)} className="p-1.5 rounded-xl text-[#4A6580] hover:bg-[rgba(47,72,88,0.06)]">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 p-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl font-display font-semibold text-sm transition-all",
                        pathname === link.href
                          ? "bg-[rgba(222,107,72,0.1)] text-[#DE6B48]"
                          : "text-[#2F4858] hover:bg-[rgba(47,72,88,0.05)]"
                      )}
                    >{link.label}</Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-5 border-t border-[rgba(47,72,88,0.08)] space-y-3">
                <a href={`tel:${siteConfig.phone}`} className="block text-center font-display font-semibold text-[#DE6B48] text-sm py-2.5">
                  {siteConfig.phone}
                </a>
                <Link href="/contact" className="btn-primary w-full justify-center text-sm py-3">
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
