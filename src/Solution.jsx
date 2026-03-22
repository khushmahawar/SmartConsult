import { motion } from "framer-motion";
import { Zap, Rocket, BarChart3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SolutionRight from "./components/SolutionRight";
import Magnetic from "./components/Magnetic";
import "./Solution.css";

function Solutions() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = [
    {
      title: "Intelligent Automation",
      desc: "Remove repetitive tasks and human error from your core workflow.",
      icon: <Zap className="w-6 h-6 text-neon-cyan" />,
    },
    {
      title: "Data-Driven Insights",
      desc: "Custom dashboards that turn complex data into actionable growth strategies.",
      icon: <BarChart3 className="w-6 h-6 text-neon-purple" />,
    },
    {
      title: "Scalable Infrastructure",
      desc: "Systems designed to grow with your business, ensuring zero downtime.",
      icon: <Rocket className="w-6 h-6 text-neon-green" />,
    },
  ];

  return (
    <section id="solution" className="py-16 sm:py-20 md:py-24 relative overflow-x-hidden bg-background">
      {/* Decorative Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-[12%] w-[min(24rem,75vw)] h-[min(24rem,45vh)] bg-neon-cyan/10 blur-[5rem] sm:blur-[7.5rem] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 -right-[12%] w-[min(24rem,75vw)] h-[min(24rem,45vh)] bg-neon-purple/10 blur-[5rem] sm:blur-[7.5rem] rounded-full" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-[clamp(1.75rem,5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-6 sm:mb-8 leading-tight text-center lg:text-left"
            >
              Systems Built to Drive <br />
              <span className="text-neon-cyan">Real Growth</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              We design and implement digital systems that remove
              operational complexity and unlock scalable performance.
            </motion.p>

            <div className="space-y-6 mb-12">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="glass p-5 sm:p-6 rounded-2xl flex items-start gap-4 sm:gap-5 group transition-all duration-300 hover:border-neon-cyan/50"
                >
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-neon-cyan/10 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <Magnetic strength={0.2}>
                <button
                  onClick={() => navigate("/pricing")}
                  className="w-full sm:w-auto min-h-[3rem] px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-bold rounded-2xl shadow-xl shadow-white/10 hover:shadow-neon-cyan/20 transition-all duration-300 flex items-center justify-center gap-3 touch-manipulation"
                >
                  Explore Our Solutions <ArrowRight className="w-5 h-5" />
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center min-h-0"
          >
            <div className="relative w-full max-w-lg min-h-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-purple/20 blur-[80px] rounded-full animate-pulse" />
              <SolutionRight />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Solutions;