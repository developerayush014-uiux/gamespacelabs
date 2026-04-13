import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      <section className="py-16 bg-[#2F4858]">
        <div className="container-xl">
          <h1 className="font-display font-black text-4xl text-white mb-2">Privacy Policy</h1>
          <p className="text-[#8FA3B0] text-sm">Last updated: April 2026</p>
        </div>
      </section>
      <section className="section-py">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-card space-y-8 text-[#4A6580] text-sm leading-relaxed">
            {[
              { title: "1. Information We Collect", body: "We collect information you provide when filling out our contact form, including name, email, phone number, and project details. We use this information solely to respond to your inquiry and deliver our services." },
              { title: "2. How We Use It", body: "Your information is used to contact you about your project inquiry and deliver contracted services. We do not sell or share your data with third parties for marketing purposes." },
              { title: "3. Data Security", body: "We implement industry-standard security measures. All data is transmitted over encrypted connections (HTTPS)." },
              { title: "4. Contact", body: "For privacy-related inquiries, email us at gamespacelabs@gmail.com." },
            ].map(({ title, body }) => (
              <div key={title}>
                <h2 className="font-display font-bold text-[#2F4858] text-lg mb-2">{title}</h2>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
