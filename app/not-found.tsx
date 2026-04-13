import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center">
      <div className="text-center px-4">
        <img
          src="https://cdn.discordapp.com/attachments/865420585437102090/1249046780096811111/image.png?ex=69ddcb36&is=69dc79b6&hm=950200640d532b5f1ee4437fd68e3ee50064acb0bda33b285426ff4b60f9686e"
          alt="Company Logo"
          className="w-20 h-20 mx-auto mb-8 object-contain"
        />
        <p className="text-[#DE6B48] font-mono text-sm tracking-widest uppercase mb-3">404</p>
        <h1 className="font-display font-black text-5xl text-[#2F4858] mb-4">Page not found</h1>
        <p className="text-[#4A6580] text-lg mb-10 max-w-sm mx-auto">
          This page doesn&apos;t exist yet. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
