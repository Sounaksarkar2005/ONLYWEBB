import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, FileText, X, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-3xl max-h-[85vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-200"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700 text-white">
                {isPrivacy ? <Shield className="w-5 h-5 text-emerald-400" /> : <FileText className="w-5 h-5 text-sky-400" />}
              </div>
              <div>
                <h3 className="font-brand text-lg font-bold text-white tracking-wide uppercase">
                  {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
                <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  ONLYWEBB Engineering Protocol • Effective 2025-2026
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="px-6 py-6 overflow-y-auto space-y-6 text-sm text-zinc-300 font-sans leading-relaxed custom-scrollbar">
            {isPrivacy ? (
              <>
                <p className="text-zinc-300 font-medium">
                  ONLYWEBB respects your privacy. This policy explains how we handle your data.
                </p>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    1. What We Collect
                  </h4>
                  <p className="text-zinc-400">
                    Name, email, project details (via our contact form), and basic site-usage data (IP, browser, pages visited via cookies).
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    2. How We Use It
                  </h4>
                  <p className="text-zinc-400">
                    To respond to inquiries, deliver and support your project, process payments, and improve our website. We only send marketing updates if you've opted in.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    3. Sharing
                  </h4>
                  <p className="text-zinc-400">
                    We don't sell your data. We share it only with service providers that help us operate — WhatsApp Business API, payment gateways, and hosting/email providers — or when required by law.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    4. Cookies
                  </h4>
                  <p className="text-zinc-400">
                    Used to improve site performance; you can disable them in your browser settings.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    5. Security
                  </h4>
                  <p className="text-zinc-400">
                    We take reasonable steps to protect your data, though no system is 100% secure.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    6. Retention
                  </h4>
                  <p className="text-zinc-400">
                    We keep your data only as long as needed for the purposes above.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    7. Your Rights
                  </h4>
                  <p className="text-zinc-400">
                    You can request access, correction, or deletion of your data at any time (under India's DPDP Act, 2023).
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    8. Children
                  </h4>
                  <p className="text-zinc-400">
                    Our services aren't directed at anyone under 18.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    9. Changes
                  </h4>
                  <p className="text-zinc-400">
                    We may update this policy; the "Last Updated" date will reflect the latest version.
                  </p>
                </section>

                <div className="pt-4 border-t border-zinc-800/80 font-mono text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2">
                  <span>Contact: <a href="mailto:onlywebb4@gmail.com" className="text-emerald-400 hover:underline">onlywebb4@gmail.com</a></span>
                  <span className="text-zinc-300">ONLYWEBB · Kolkata, India</span>
                </div>
              </>
            ) : (
              <>
                <p className="text-zinc-300 font-medium">
                  By using ONLYWEBB's website or engaging our services, you agree to the following terms.
                </p>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    1. Services
                  </h4>
                  <p className="text-zinc-400">
                    We provide web development, lead generation, and social media management (REACH), as described on our website. Final scope, pricing, and timeline are confirmed in writing before work begins.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    2. Payment
                  </h4>
                  <p className="text-zinc-400">
                    Prices are in INR. <strong className="text-white">Full or partial payment must be made in advance before any project work begins</strong> — no work will start without the agreed advance being received. Recurring services (maintenance, REACH) are also billed monthly in advance. Late payment may pause ongoing work.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    3. Timelines
                  </h4>
                  <p className="text-zinc-400">
                    Estimated delivery dates assume timely client feedback and content. Delays caused by the client may extend timelines.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    4. Client Responsibilities
                  </h4>
                  <p className="text-zinc-400">
                    You must provide accurate project information and content you have the legal right to use.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    5. Ownership
                  </h4>
                  <p className="text-zinc-400">
                    Full ownership of final deliverables transfers to you upon full payment. We may reuse general frameworks/boilerplate and showcase completed work in our portfolio unless you request otherwise in writing.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    6. Revisions
                  </h4>
                  <p className="text-zinc-400">
                    Each package includes a limited number of revisions; work beyond agreed scope may incur extra charges.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    7. Refunds
                  </h4>
                  <p className="text-zinc-400">
                    Advance payments are non-refundable once work has started.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    8. Liability
                  </h4>
                  <p className="text-zinc-400">
                    We don't guarantee specific business outcomes (traffic, sales, rankings). Our liability is limited to the amount paid for the project; we're not liable for indirect or consequential damages.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    9. Third-Party Services
                  </h4>
                  <p className="text-zinc-400">
                    We integrate services like WhatsApp Business API and payment gateways; their own terms apply.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    10. Governing Law
                  </h4>
                  <p className="text-zinc-400">
                    These Terms are governed by the laws of India, with disputes subject to courts in Kolkata, India.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    11. Changes
                  </h4>
                  <p className="text-zinc-400">
                    We may update these Terms; continued use means you accept the changes.
                  </p>
                </section>

                <div className="pt-4 border-t border-zinc-800/80 font-mono text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2">
                  <span>Contact: <a href="mailto:onlywebb4@gmail.com" className="text-sky-400 hover:underline">onlywebb4@gmail.com</a></span>
                  <span className="text-zinc-300">ONLYWEBB · Kolkata, India</span>
                </div>
              </>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified ONLYWEBB Standard</span>
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              Acknowledge & Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
