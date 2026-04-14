"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, AlertCircle, Loader2, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import FadeUp from "@/components/ui/FadeUp";
import { siteConfig, contactFormConfig } from "@/data/content";
import { cn } from "@/lib/utils";
import { submitToSpreadsheet } from "@/app/actions/submitContact"; 

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^[\+\d\s\-\(\)]{7,20}$/, "Enter a valid phone number").optional().or(z.literal("")),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, "Select at least one service"),
  description: z.string().min(20, "Please describe your project (min 20 chars)"),
  timeline: z.string().min(1, "Select a timeline"),
  budget: z.string().min(1, "Select a budget range"),
  agree: z.literal(true, { errorMap: () => ({ message: "You must agree to continue" }) }),
});

type FormData = z.infer<typeof schema>;

const STEPS = [
  { title: "About You", desc: "Let's start with the basics" },
  { title: "Your Project", desc: "Tell us what you're building" },
  { title: "Budget & Timeline", desc: "Last step — almost there!" },
];

const STEP_FIELDS: Record<number, (keyof FormData)[]> = {
  0: ["fullName", "email", "phone", "company"],
  1: ["services", "description", "timeline"],
  2: ["budget", "agree"],
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 mt-1.5 text-red-500 text-xs font-medium">
      <AlertCircle className="w-3.5 h-3.5" />{message}
    </motion.p>
  );
}

export default function ContactClient() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const { register, handleSubmit, trigger, control, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { services: [], agree: undefined as unknown as true },
  });

  const next = async () => {
    const ok = await trigger(STEP_FIELDS[step] as (keyof FormData)[]);
    if (ok) setStep(s => s + 1);
  };

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    
    try {
      // Call our secure server action
      const result = await submitToSpreadsheet(data);

      if (result.success) {
        setSubmitted(true);
        toast.success("Message sent! We'll respond within 24 hours.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleService = (val: string) => {
    const updated = selectedServices.includes(val)
      ? selectedServices.filter(s => s !== val)
      : [...selectedServices, val];
    setSelectedServices(updated);
    setValue("services", updated, { shouldValidate: true });
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-[#F7F5F0] flex items-center justify-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="card p-14 text-center max-w-md mx-4">
          <div className="w-20 h-20 rounded-full bg-[rgba(222,107,72,0.1)] flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[#DE6B48]" />
          </div>
          <h2 className="font-display font-black text-[#2F4858] text-3xl mb-3">Message Sent!</h2>
          <p className="text-[#4A6580] mb-8">Thanks for reaching out! We&apos;ll review your project and get back within <strong className="text-[#2F4858]">24 hours</strong>.</p>
          <Link href="/" className="btn-primary justify-center">Back to Home</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#2F4858]">
        <div className="container-xl">
          <FadeUp>
            <span className="badge mb-4" style={{ background: "rgba(222,107,72,0.2)", color: "#F08060" }}>Free Discovery Call</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">
              LET&apos;S BUILD<br /><span className="text-[#DE6B48] italic">SOMETHING GREAT</span>
            </h1>
            <p className="text-[#8FA3B0] text-lg max-w-xl">
              Tell us about your project and we&apos;ll come back with a tailored proposal within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-4">
              <FadeUp>
                <div className="card p-5 border-l-4 border-[#DE6B48]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(222,107,72,0.1)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#DE6B48]" />
                    </div>
                    <div>
                      <p className="text-[#8FA3B0] text-xs font-medium mb-0.5">Call Us Directly</p>
                      <a href={`tel:${siteConfig.phone}`}
                        className="font-display font-bold text-[#2F4858] hover:text-[#DE6B48] transition-colors text-sm">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.06}>
                <div className="card p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(47,72,88,0.06)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#4A6580]" />
                    </div>
                    <div>
                      <p className="text-[#8FA3B0] text-xs font-medium mb-0.5">Email</p>
                      <a href={`mailto:${siteConfig.email}`}
                        className="font-display font-bold text-[#2F4858] text-sm hover:text-[#DE6B48] transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="card p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(47,72,88,0.06)] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#4A6580]" />
                    </div>
                    <div>
                      <p className="text-[#8FA3B0] text-xs font-medium mb-0.5">Response Time</p>
                      <p className="font-display font-bold text-[#2F4858] text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.14}>
                <div className="card p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(47,72,88,0.06)] flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#4A6580]" />
                    </div>
                    <div>
                      <p className="text-[#8FA3B0] text-xs font-medium mb-0.5">Discovery Call</p>
                      <p className="font-display font-bold text-[#2F4858] text-sm">Free 30 minutes</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Budget guide */}
              <FadeUp delay={0.18}>
                <div className="card p-5">
                  <p className="text-[#8FA3B0] text-xs font-mono uppercase tracking-widest mb-4">Budget Guide</p>
                  {[
                    { range: "Under ₹50k", desc: "MVP or prototype" },
                    { range: "₹50k–₹75k", desc: "Standard mobile app" },
                    { range: "₹75k–₹90k", desc: "Multi-platform product" },
                    { range: "₹90k+", desc: "Enterprise scale" },
                  ].map(({ range, desc }) => (
                    <div key={range} className="flex justify-between py-2 border-b border-[rgba(47,72,88,0.06)] last:border-0">
                      <span className="text-[#DE6B48] text-sm font-display font-bold">{range}</span>
                      <span className="text-[#8FA3B0] text-sm">{desc}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeUp delay={0.08}>
                <div className="card p-6 sm:p-8">
                  {/* Step indicators */}
                  <div className="flex items-center gap-2 mb-8">
                    {STEPS.map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold transition-all duration-300",
                          i < step ? "bg-[rgba(222,107,72,0.15)] text-[#DE6B48]"
                            : i === step ? "bg-[#DE6B48] text-white"
                              : "bg-[rgba(47,72,88,0.06)] text-[#8FA3B0]"
                        )}>
                          {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                        </div>
                        {i < STEPS.length - 1 && (
                          <div className={cn("h-px w-8 transition-all duration-500", i < step ? "bg-[#DE6B48]" : "bg-[rgba(47,72,88,0.1)]")} />
                        )}
                      </div>
                    ))}
                    <p className="ml-2 text-[#8FA3B0] text-xs font-mono">Step {step + 1} of {STEPS.length}</p>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={step}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.28 }}>
                      <h3 className="font-display font-bold text-[#2F4858] text-xl mb-1">{STEPS[step].title}</h3>
                      <p className="text-[#8FA3B0] text-sm mb-7">{STEPS[step].desc}</p>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        {/* ── STEP 1 ── */}
                        {step === 0 && (
                          <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-display font-semibold text-[#2F4858] mb-1.5">Full Name <span className="text-[#DE6B48]">*</span></label>
                                <input {...register("fullName")} placeholder="John Smith"
                                  className={cn("input", errors.fullName && "error")} />
                                <FieldError message={errors.fullName?.message} />
                              </div>
                              <div>
                                <label className="block text-sm font-display font-semibold text-[#2F4858] mb-1.5">Work Email <span className="text-[#DE6B48]">*</span></label>
                                <input {...register("email")} type="email" placeholder="you@company.com"
                                  className={cn("input", errors.email && "error")} />
                                <FieldError message={errors.email?.message} />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-display font-semibold text-[#2F4858] mb-1.5">Phone Number</label>
                                <input {...register("phone")} type="tel" placeholder="+91 98765 43210" className="input" />
                                <FieldError message={errors.phone?.message} />
                              </div>
                              <div>
                                <label className="block text-sm font-display font-semibold text-[#2F4858] mb-1.5">Company / Website</label>
                                <input {...register("company")} placeholder="Acme Inc. or acme.com" className="input" />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ── STEP 2 ── */}
                        {step === 1 && (
                          <div className="space-y-5">
                            <div>
                              <label className="block text-sm font-display font-semibold text-[#2F4858] mb-2">Services Required <span className="text-[#DE6B48]">*</span></label>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {contactFormConfig.services.map((opt) => (
                                  <button key={opt.value} type="button" onClick={() => toggleService(opt.value)}
                                    className={cn(
                                      "flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm text-left transition-all font-display font-medium",
                                      selectedServices.includes(opt.value)
                                        ? "border-[#DE6B48] bg-[rgba(222,107,72,0.08)] text-[#DE6B48]"
                                        : "border-[rgba(47,72,88,0.12)] text-[#4A6580] hover:border-[rgba(47,72,88,0.25)] hover:bg-[rgba(47,72,88,0.03)]"
                                    )}>
                                    <div className={cn("w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all",
                                      selectedServices.includes(opt.value) ? "bg-[#DE6B48] border-[#DE6B48]" : "border-[rgba(47,72,88,0.2)]")}>
                                      {selectedServices.includes(opt.value) && <Check className="w-2.5 h-2.5 text-white" />}
                                    </div>
                                    {opt.label}
                                  </button>
                                ))}
                              </div>
                              <FieldError message={errors.services?.message} />
                            </div>
                            <div>
                              <label className="block text-sm font-display font-semibold text-[#2F4858] mb-1.5">Project Description <span className="text-[#DE6B48]">*</span></label>
                              <textarea {...register("description")} rows={4} placeholder="Describe what you want to build, key features, target users..."
                                className={cn("input resize-none", errors.description && "error")} />
                              <FieldError message={errors.description?.message} />
                            </div>
                            <div>
                              <label className="block text-sm font-display font-semibold text-[#2F4858] mb-2">Timeline <span className="text-[#DE6B48]">*</span></label>
                              <div className="grid grid-cols-2 gap-2.5">
                                {contactFormConfig.timelines.map((opt) => (
                                  <Controller key={opt.value} name="timeline" control={control} render={({ field }) => (
                                    <button type="button" onClick={() => field.onChange(opt.value)}
                                      className={cn(
                                        "px-4 py-3 rounded-xl border text-sm text-left transition-all font-display font-medium",
                                        field.value === opt.value
                                          ? "border-[#DE6B48] bg-[rgba(222,107,72,0.08)] text-[#DE6B48]"
                                          : "border-[rgba(47,72,88,0.12)] text-[#4A6580] hover:border-[rgba(47,72,88,0.25)]"
                                      )}>
                                      {opt.label}
                                    </button>
                                  )} />
                                ))}
                              </div>
                              <FieldError message={errors.timeline?.message} />
                            </div>
                          </div>
                        )}

                        {/* ── STEP 3 ── */}
                        {step === 2 && (
                          <div className="space-y-5">
                            <div>
                              <label className="block text-sm font-display font-semibold text-[#2F4858] mb-2">Estimated Budget <span className="text-[#DE6B48]">*</span></label>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {contactFormConfig.budgets.map((opt) => (
                                  <Controller key={opt.value} name="budget" control={control} render={({ field }) => (
                                    <button type="button" onClick={() => field.onChange(opt.value)}
                                      className={cn(
                                        "px-4 py-3 rounded-xl border text-sm text-left transition-all font-display font-medium",
                                        field.value === opt.value
                                          ? "border-[#DE6B48] bg-[rgba(222,107,72,0.08)] text-[#DE6B48]"
                                          : "border-[rgba(47,72,88,0.12)] text-[#4A6580] hover:border-[rgba(47,72,88,0.25)]"
                                      )}>
                                      {opt.label}
                                    </button>
                                  )} />
                                ))}
                              </div>
                              <FieldError message={errors.budget?.message} />
                            </div>

                            <div>
                              <Controller name="agree" control={control} render={({ field }) => (
                                <label className="flex items-start gap-3 cursor-pointer group">
                                  <button type="button" onClick={() => field.onChange(field.value ? undefined : true)}
                                    className={cn("w-5 h-5 rounded border mt-0.5 flex-shrink-0 flex items-center justify-center transition-all",
                                      field.value ? "bg-[#DE6B48] border-[#DE6B48]" : "border-[rgba(47,72,88,0.25)] group-hover:border-[#DE6B48]")}>
                                    {field.value && <Check className="w-3 h-3 text-white" />}
                                  </button>
                                  <span className="text-[#4A6580] text-sm leading-relaxed">
                                    I agree to the <Link href="/privacy" className="text-[#DE6B48] hover:underline">Privacy Policy</Link> and consent to GameSpace Lab contacting me about my inquiry.
                                  </span>
                                </label>
                              )} />
                              <FieldError message={errors.agree?.message} />
                            </div>
                          </div>
                        )}

                        {/* Navigation buttons */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(47,72,88,0.08)]">
                          {step > 0 ? (
                            <button type="button" onClick={() => setStep(s => s - 1)}
                              className="btn-outline text-sm py-2.5 px-5">
                              <ArrowLeft className="w-4 h-4" /> Back
                            </button>
                          ) : <div />}

                          {step < STEPS.length - 1 ? (
                            <button type="button" onClick={next} className="btn-primary text-sm py-2.5 px-6">
                              Next Step <ArrowRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <button type="submit" disabled={submitting}
                              className="btn-primary text-sm py-2.5 px-6 disabled:opacity-60 disabled:cursor-not-allowed">
                              {submitting ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                              ) : (
                                <>Send Message <ArrowRight className="w-4 h-4" /></>
                              )}
                            </button>
                          )}
                        </div>
                      </form>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
