import { motion } from "framer-motion";
import { AlertTriangle, Layers, Zap, Search } from "lucide-react";
import "./PromiseSection.css";

function PromiseSection() {
  const problems = [
    {
      title: "Manual Operations",
      text: "Repetitive workflows drain time, increase errors, and limit scalability.",
      solution: "We implement automation systems that scale effortlessly.",
      icon: <Layers className="w-8 h-8 text-neon-cyan" />,
    },
    {
      title: "Disconnected Systems",
      text: "When tools don’t integrate, growth becomes chaotic and inefficient.",
      solution: "We unify your ecosystem into one structured growth engine.",
      icon: <Zap className="w-8 h-8 text-neon-purple" />,
    },
    {
      title: "Weak Digital Experience",
      text: "Poor UI and unclear journeys reduce trust and conversion rates.",
      solution: "We optimize performance and conversion architecture.",
      icon: <AlertTriangle className="w-8 h-8 text-neon-green" />,
    },
    {
      title: "Lack of Data Clarity",
      text: "Without structured insights, decisions become guesswork.",
      solution: "We build intelligent dashboards that guide smart decisions.",
      icon: <Search className="w-8 h-8 text-neon-cyan" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="promise" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-x-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-20 px-1"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-4 sm:mb-6 md:mb-8">
            Why Growth Gets <span className="text-neon-cyan">Stuck</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Most growing businesses don’t lack ambition — they lack structured systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] flex flex-col h-full min-h-0 group hover:border-neon-cyan/50 transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-neon-cyan/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-neon-cyan transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed flex-grow">{item.text}</p>
              <div className="h-[1px] w-full bg-white/10 mb-6" />
              <p className="text-white font-semibold text-sm leading-relaxed italic">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PromiseSection;