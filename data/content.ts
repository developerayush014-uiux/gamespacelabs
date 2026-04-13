// data/content.ts — Single source of truth for all site copy

export const siteConfig = {
  name: "GameSpace Lab",
  tagline: "Your Startup's Engineering Partner",
  phone: "+91 7065634862",
  email: "hello@gamespacelab.com",
  socials: {
    twitter: "https://twitter.com/gamespacelab",
    linkedin: "https://linkedin.com/company/gamespacelab",
    instagram: "https://instagram.com/gamespacelab",
    github: "https://github.com/gamespacelab",
  },
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Help", href: "/help" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "", label: "Service Lines" },
  { value: 200, suffix: "+", label: "Countries Reached" },
  { value: 100, suffix: "%", label: "On-time MVPs" },
];

export const services = [
  {
    id: "android",
    emoji: "🤖",
    title: "Android Development",
    subtitle: "Native & Kotlin-first",
    description:
      "Production-grade Android apps built with Kotlin and Java. From architecture to Play Store — we own the full lifecycle with Netflix-standard engineering.",
    features: [
      "Kotlin & Java ecosystems",
      "Performance & memory optimization",
      "Security hardening",
      "Play Store deployment & ASO",
    ],
    color: "#DE6B48",
    bg: "rgba(222,107,72,0.06)",
    border: "rgba(222,107,72,0.15)",
  },
  {
    id: "ios",
    emoji: "🍎",
    title: "iOS Development",
    subtitle: "Swift & SwiftUI",
    description:
      "Polished iOS apps built for performance and elegance. We build for iPhone and iPad with SwiftUI-first architecture and rigorous App Store compliance.",
    features: [
      "SwiftUI & UIKit",
      "App Store submission",
      "In-app purchases & subscriptions",
      "Push notifications & deep linking",
    ],
    color: "#2F4858",
    bg: "rgba(47,72,88,0.06)",
    border: "rgba(47,72,88,0.15)",
  },
  {
    id: "webapp",
    emoji: "🌐",
    title: "Web App Development",
    subtitle: "Full-stack & Scalable",
    description:
      "Modern web platforms with Next.js, React, and cloud-native backends. Built to scale from 100 to 100,000 users without re-architecting.",
    features: [
      "Next.js App Router",
      "REST & GraphQL APIs",
      "Cloud deployment (AWS / GCP)",
      "SEO & Core Web Vitals",
    ],
    color: "#EAB24A",
    bg: "rgba(234,178,74,0.08)",
    border: "rgba(234,178,74,0.2)",
  },
  {
    id: "mvp",
    emoji: "🚀",
    title: "MVP for Fundraising",
    subtitle: "Launch in 8–12 weeks",
    description:
      "Purpose-built MVPs engineered to impress investors. We strip out the noise, focus on your core value proposition, and ship a demo-ready product fast.",
    features: [
      "Investor-ready in 8–12 weeks",
      "Product strategy included",
      "Pitch deck tech narrative",
      "Scalable foundation (no throwaway code)",
    ],
    color: "#DE6B48",
    bg: "rgba(222,107,72,0.06)",
    border: "rgba(222,107,72,0.15)",
  },
  {
    id: "ai",
    emoji: "✨",
    title: "AI Automation",
    subtitle: "Custom AI Solutions",
    description:
      "Intelligent workflows, LLM integrations, and AI-native features embedded directly into your product. We don't bolt on AI — we architect around it.",
    features: [
      "LLM integration (OpenAI, Claude, Gemini)",
      "RAG pipelines & vector databases",
      "AI-powered automation workflows",
      "Agent systems & tool-use",
    ],
    color: "#2F4858",
    bg: "rgba(47,72,88,0.06)",
    border: "rgba(47,72,88,0.15)",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We jump on a free 30-minute call to understand your idea, goals, and constraints. No generic forms — real conversation with our engineers.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Proposal & Scope",
    description:
      "Within 48 hours, we deliver a detailed scope, tech stack recommendation, and fixed-price quote. Zero surprise bills.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Build & Demo",
    description:
      "Agile sprints with weekly demo calls. You see real progress every week, not just a final delivery at the end.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "We handle deployment, store submissions, and post-launch support. Your MVP ships ready to show investors.",
    icon: "🚀",
  },
];

export const founders = [
  {
    id: "f1",
    name: "Founder",
    role: "Co-Founder & CEO",
    tag: "Ex-Netflix Engineer",
    bio: "Former senior engineer at Netflix specializing in large-scale distributed systems. Brings the same engineering culture and production standards to every GameSpace Lab project.",
    skills: ["System Design", "Android Architecture", "Product Strategy"],
  },
  {
    id: "f2",
    name: "Co-Founder",
    role: "Co-Founder & CTO",
    tag: "Ex-Google Ecosystem",
    bio: "Veteran of the Google developer ecosystem with expertise in mobile, cloud, and AI tooling. Drives the technical direction and ensures we stay ahead of the engineering curve.",
    skills: ["Cloud Infrastructure", "AI/ML Integration", "Developer Experience"],
  },
];

export const faqs = [
  {
    q: "What is GameSpace Lab?",
    a: "GameSpace Lab is an app development agency built by engineers from Netflix and Google. We specialize in Android, iOS, web apps, MVPs for fundraising, and AI automation — helping startup founders build and launch faster.",
  },
  {
    q: "How fast can you ship an MVP?",
    a: "Typically 8–12 weeks for a solid, investor-ready MVP. We focus on your core value proposition and avoid building features that don't move the needle. Speed without compromising quality.",
  },
  {
    q: "Do you work with first-time founders?",
    a: "Absolutely — that's our primary focus. We guide you through product decisions, tech stack choices, and scope refinement. We've helped founders with nothing but an idea get to their first investor meeting.",
  },
  {
    q: "What does it cost to build an MVP?",
    a: "Our MVP engagements start from $5,000 for simple mobile apps and range up to $30,000+ for complex multi-platform products with AI. We provide a fixed-price quote after our discovery call — no hourly billing surprises.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Yes. We do app modernization, code audits, and full rewrites. Send us your repo or APK and we'll assess the scope within 24 hours.",
  },
  {
    q: "Do you offer equity-for-work deals?",
    a: "In select cases for exceptional ideas, yes. Reach out via our contact form and flag it — we evaluate these on a case-by-case basis based on market opportunity and team.",
  },
  {
    q: "What markets do you serve?",
    a: "We're India-based and primarily serve the South Asian startup ecosystem, but have worked with clients across the Middle East, Europe, and Southeast Asia. Time zones are never a barrier.",
  },
  {
    q: "What happens after launch?",
    a: "All projects include 30 days of post-launch support. We offer ongoing maintenance retainers and can also embed with your team long-term as your engineering partner.",
  },
];

export const niches = [
  "HR Tech", "FinTech", "Fitness", "Creator Economy",
  "EdTech", "HealthTech", "SaaS", "E-commerce",
  "CRM", "Real Estate", "Logistics", "AgriTech",
];

export const pressLogos = [
  { name: "YourStory", url: "#" },
  { name: "Inc42", url: "#" },
  { name: "The Economic Times", url: "#" },
  { name: "MoneyControl", url: "#" },
];

export const contactFormConfig = {
  services: [
    { value: "android", label: "Android Development" },
    { value: "ios", label: "iOS Development" },
    { value: "webapp", label: "Web App Development" },
    { value: "mvp", label: "MVP for Fundraising" },
    { value: "ai", label: "AI Automation" },
    { value: "other", label: "Other / Not Sure Yet" },
  ],
  budgets: [
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-15k", label: "$5,000 – $15,000" },
    { value: "15k-30k", label: "$15,000 – $30,000" },
    { value: "30k-plus", label: "$30,000+" },
    { value: "equity", label: "Open to equity discussion" },
  ],
  timelines: [
    { value: "asap", label: "ASAP (under 1 month)" },
    { value: "1-3", label: "1–3 months" },
    { value: "3-6", label: "3–6 months" },
    { value: "flexible", label: "Flexible" },
  ],
};
