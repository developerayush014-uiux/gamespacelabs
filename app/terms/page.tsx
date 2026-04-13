import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      <section className="py-16 bg-[#2F4858]">
        <div className="container-xl">
          <h1 className="font-display font-black text-4xl text-white mb-2">Terms of Service</h1>
          <p className="text-[#8FA3B0] text-sm">Last updated: April 2026</p>
        </div>
      </section>
      <section className="section-py">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-card space-y-8 text-[#4A6580] text-sm leading-relaxed">
            {[
              { title: "1. Services", body: "GameSpace Lab provides software development consulting services as outlined in individual project agreements. All work is governed by a signed Statement of Work (SOW) or Master Services Agreement (MSA)." },
              { title: "2. Payment", body: "Payment terms are defined in each project agreement. Standard terms are 50% upfront, 50% on delivery unless otherwise agreed in writing." },
              { title: "3. Intellectual Property", body: "Upon final payment, all custom-developed code and assets are transferred to the client. GameSpace Lab retains the right to showcase completed work in portfolios unless otherwise agreed." },
              { title: "4. Limitation of Liability", body: "GameSpace Lab's liability is limited to the amount paid for the specific engagement. We are not liable for indirect or consequential damages." },
              { title: "5. Contact", body: "For inquiries, contact hello@gamespacelab.com." },
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
