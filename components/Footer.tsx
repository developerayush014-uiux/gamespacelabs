import Link from "next/link";
import { siteConfig, navLinks } from "@/data/content";
import { Phone, Mail, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2F4858] text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.discordapp.com/attachments/865420585437102090/1249046780096811111/image.png?ex=69ddcb36&is=69dc79b6&hm=950200640d532b5f1ee4437fd68e3ee50064acb0bda33b285426ff4b60f9686e"
                alt="Company Logo"
                className="w-20 h-20 mx-auto mb-8 object-contain"
              />
              <span className="font-display font-bold text-white text-lg">GameSpace Lab</span>
            </Link>
            <p className="text-[#8FA3B0] text-sm leading-relaxed mb-5 max-w-xs">
              Netflix & Google engineers helping startup founders build and ship faster. Your MVP launch partner.
            </p>
            <div className="space-y-2.5">
              <a href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-[#8FA3B0] hover:text-[#DE6B48] text-sm transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-[#8FA3B0] hover:text-[#DE6B48] text-sm transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-white text-sm mb-5 tracking-wide">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-[#8FA3B0] hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + India badge */}
          <div>
            <h3 className="font-display font-bold text-white text-sm mb-5 tracking-wide">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
                { Icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
                { Icon: Github, href: siteConfig.socials.github, label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#8FA3B0] hover:text-[#DE6B48] hover:border-[#DE6B48]/30 hover:bg-[rgba(222,107,72,0.08)] transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[rgba(234,178,74,0.12)] border border-[rgba(234,178,74,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#EAB24A] animate-pulse" />
              <span className="text-[#EAB24A] text-xs font-display font-bold tracking-wide">Based in India 🇮🇳</span>
            </div>
          </div>
        </div>

        <div className="divider border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8FA3B0] text-xs">© {new Date().getFullYear()} GameSpace Lab. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[#8FA3B0] hover:text-white text-xs transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[#8FA3B0] hover:text-white text-xs transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
