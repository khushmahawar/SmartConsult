import { motion } from "framer-motion";

const logos = [
  "STRATEGY", "SCALE", "OPTIMIZE", "AUTOMATE", "SMART", "CONSULT", 
  "GROWTH", "FUTURE", "VISION", "ENGINE", "SYSTEMS", "CORE"
];

export default function BrandMarquee() {
  return (
    <section className="py-20 bg-background overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Accelerating Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 py-4"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl sm:text-4xl md:text-6xl font-heading font-black text-white/10 hover:text-neon-cyan transition-colors duration-500 cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Mask */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />
      </div>
    </section>
  );
}
