import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-2xl bg-[#DE6B48] flex items-center justify-center mx-auto mb-8 shadow-[0_8px_32px_rgba(222,107,72,0.35)]">
          <span className="text-white font-display font-black text-3xl">G</span>
        </div>
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
