import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: { default: "GameSpace Lab — Your MVP Launch Partner", template: "%s | GameSpace Lab" },
  description:
    "App development agency built by Netflix & Google engineers. We help startup founders launch MVPs fast — Android, iOS, Web, and AI Automation.",
  keywords: ["app development India", "MVP development", "Android iOS agency", "startup tech partner", "GameSpace Lab"],
  openGraph: {
    title: "GameSpace Lab — Your MVP Launch Partner",
    description:
      "Netflix & Google engineers helping startups ship faster. 40+ projects across 5 service lines.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#2F4858",
              color: "white",
              borderRadius: "12px",
              fontFamily: "'Syne', system-ui",
              fontWeight: 600,
            },
          }}
        />
      </body>
    </html>
  );
}
