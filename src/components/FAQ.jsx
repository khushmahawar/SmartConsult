import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How fast can I see results?",
    a: "Most clients see immediate operational relief within the first 14 days following deployment, with significant ROI appearing by the end of the first quarter."
  },
  {
    q: "Do you integrate with our existing tools?",
    a: "Absolutely. We specialize in API-first architecture, ensuring seamless connections with CRMs like HubSpot, Salesforce, or custom-built tools."
  },
  {
    q: "What makes SmartConsult different from an agency?",
    a: "We are architects, not just executors. We don't just 'run ads' or 'design' — we build custom digital engines that sustain growth autonomously."
  },
  {
    q: "Is there a long-term commitment?",
    a: "We offer both project-based implementations and recurring optimization partnerships depending on your business stage."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-x-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-1">
          <h2 className="text-[clamp(1.75rem,5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-4 sm:mb-6 text-neon-cyan">
            Clarifying the Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know before we start building.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="glass rounded-xl sm:rounded-[2rem] overflow-hidden border-white/5 hover:border-white/10 transition-colors">
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full min-h-[3.25rem] p-4 sm:p-6 md:p-8 flex items-start sm:items-center justify-between gap-4 text-left touch-manipulation"
              >
                <span className="text-base sm:text-lg md:text-xl font-bold pr-2 flex-1">{f.q}</span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-neon-cyan shrink-0"
                >
                  <ChevronDown className="w-6 h-6 mt-0.5 sm:mt-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-4 sm:px-8 pb-6 sm:pb-8 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
