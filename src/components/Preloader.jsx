import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds minimum display
    const increment = 100 / (duration / 30); // 30ms intervals
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Small delay after reaching 100%
          return 100;
        }
        return prev + increment;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Screen split animations
  const slideUp = {
    initial: { top: 0 },
    exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
  };

  const slideDown = {
    initial: { bottom: 0 },
    exit: { bottom: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">
      {/* Top Half */}
      <motion.div 
        variants={slideUp} 
        initial="initial" 
        exit="exit" 
        className="absolute w-full h-1/2 bg-[#050505] flex items-end justify-center pb-8 border-b border-white/5"
      >
        <div className="text-4xl md:text-6xl font-heading font-extrabold flex items-center gap-2 overflow-hidden">
          <motion.span 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white"
          >
            Smart
          </motion.span>
        </div>
      </motion.div>

      {/* Bottom Half */}
      <motion.div 
        variants={slideDown} 
        initial="initial" 
        exit="exit" 
        className="absolute top-1/2 w-full h-1/2 bg-[#050505] flex flex-col items-center justify-start pt-8"
      >
        <div className="text-4xl md:text-6xl font-heading font-extrabold flex items-center gap-2 overflow-hidden mb-12">
          <motion.span 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-neon-cyan"
          >
            Consults
          </motion.span>
        </div>

        {/* Loading Progress */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-xs font-mono font-bold tracking-widest text-neon-cyan">
            {Math.floor(progress)}%
          </div>
          <div className="w-[min(16rem,85vw)] h-1 bg-white/10 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-neon-cyan" 
               style={{ width: `${progress}%` }}
               transition={{ duration: 0.1, ease: "linear" }}
             />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
