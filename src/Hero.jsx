import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Orb from "./components/orb";
import HeroStack from "./components/HeroRight";
import TextScramble from "./components/TextScramble";
import Magnetic from "./components/Magnetic";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-x-hidden bg-background">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Orb 
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={280}
          forceHoverState={false}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-neon-cyan/20 mb-8 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-neon-cyan/5 w-0 group-hover:w-full transition-all duration-500" />
              <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white relative z-10">
                The Future of Operations
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(1.75rem,6.5vw,6rem)] sm:text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6 sm:mb-8 leading-[1.08] sm:leading-tight tracking-tight"
            >
              Architecting <br />
              <span className="text-neon-cyan">Digital Success</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <TextScramble 
                text="We build custom digital ecosystems that automate your complexity and multiply your growth performance."
                delay={800}
                className="block"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start w-full sm:w-auto">
              <Magnetic strength={0.2}>
                <button
                  onClick={() => navigate("/pricing")}
                  className="w-full sm:w-auto px-8 sm:px-10 py-5 bg-white text-black font-extrabold rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-neon-cyan/30 transition-all duration-500 scale-100 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  Start Scaling <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>

              <Magnetic strength={0.3}>
                <button
                  onClick={() => {
                    const el = document.getElementById('solution');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-3 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-neon-cyan fill-neon-cyan" />
                  </div>
                  System Demo
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="w-full lg:w-1/2 relative max-w-lg mx-auto lg:mx-0 lg:max-w-none"
          >
            <div className="relative z-10 w-full">
              <div className="absolute -inset-[10%] sm:-inset-4 bg-neon-cyan/20 blur-[2.5rem] sm:blur-[3.75rem] rounded-full -z-10 motion-safe:animate-pulse" style={{ willChange: "transform, opacity" }} />
              <HeroStack />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="pointer-events-none absolute top-1/4 -right-[15%] w-[min(24rem,70vw)] h-[min(24rem,50vh)] max-w-[100vw] bg-neon-purple/10 blur-[5rem] sm:blur-[7.5rem] rounded-full motion-safe:animate-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 -left-[15%] w-[min(24rem,70vw)] h-[min(24rem,50vh)] max-w-[100vw] bg-neon-cyan/10 blur-[5rem] sm:blur-[7.5rem] rounded-full motion-safe:animate-pulse delay-700" />
    </section>
  );
}

export default Hero;