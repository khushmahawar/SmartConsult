import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, Nexa Systems",
    text: "SmartConsult didn't just automate our workflow; they architecturalized our entire growth strategy. The result was a 40% increase in lead conversion within 3 months.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "CTO, Bloom Digital",
    text: "The precision and beauty of their systems are unmatched. It feels like our business finally has the 'engine' it deserves. Highly recommended for any serious scale-up.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Thorne Logistics",
    text: "Minimal complexity, maximum output. They replaced three legacy tools with one elegant system that just works. Worth every cent.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-x-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[clamp(1.75rem,5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-4 sm:mb-6">
            Trusted by <span className="text-neon-cyan">Visionaries</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Real stories from leaders who transformed their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] relative flex flex-col items-start group hover:border-neon-purple/50 transition-all duration-500 min-h-0"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-neon-purple/20 transition-colors">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-cyan text-neon-cyan" />
                ))}
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic">
                "{t.text}"
              </p>

              <div className="mt-auto">
                <p className="font-bold text-white text-lg sm:text-xl">{t.name}</p>
                <p className="text-neon-purple text-sm font-medium tracking-wider uppercase">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
