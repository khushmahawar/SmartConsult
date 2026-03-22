import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Target, Cpu, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    title: "Strategic Discovery",
    desc: "We analyze your current operations to find the hidden gaps in your growth engine.",
    icon: <Target className="w-6 h-6 text-neon-cyan" />,
  },
  {
    title: "System Architecture",
    desc: "Designing a custom digital infrastructure that bridges every disconnect.",
    icon: <Cpu className="w-6 h-6 text-neon-purple" />,
  },
  {
    title: "Autonomous Deployment",
    desc: "Implementing automation modules that start working for you immediately.",
    icon: <Zap className="w-6 h-6 text-neon-green" />,
  },
  {
    title: "Performance Scaling",
    desc: "Real-world testing and optimization to ensure your growth is infinite.",
    icon: <ShieldCheck className="w-6 h-6 text-neon-cyan" />,
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  
  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-x-hidden" ref={containerRef}>
      <div className="container mx-auto">
        <div className="text-center mb-14 sm:mb-20 md:mb-24 px-1">
          <h2 className="text-[clamp(1.75rem,5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-4 sm:mb-6">
            The <span className="text-neon-cyan">Precision</span> Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            From architecture to automation, we build with singular focus.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[1.125rem] sm:left-[1.25rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 md:-translate-x-1/2" />
          
          <div className="space-y-14 sm:space-y-20 md:space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[1.125rem] sm:left-[1.25rem] md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-background border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,255,255,0.5)] z-10" />
                
                <div className="w-full md:w-1/2 flex justify-center md:justify-end pl-12 sm:pl-14 md:pl-0">
                  <div className={`glass p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] max-w-md w-full hover:border-neon-cyan/30 transition-all duration-500 ${
                    idx % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <div className={`p-4 bg-white/5 rounded-2xl w-fit mb-6 ${
                      idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed italic">{step.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
