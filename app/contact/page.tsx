import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start your project with GameSpace Lab. Free discovery call — we respond in 24 hours.",
};

export default function ContactPage() {
  return <ContactClient />;
}
