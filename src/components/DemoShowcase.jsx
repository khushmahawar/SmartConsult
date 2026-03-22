import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Layout, Monitor, Smartphone, Tablet, Rocket, Zap, ShieldCheck, Cpu, Wallet, Building2 } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    id: "Caffee",
    label: "Enterprise SaaS",
    title: "Aura",
    desc: "A mission-critical operational cockpit for enterprise scale resource management.",
    img: "/cafe.png",
     link: "https://caffee-website-demo.vercel.app/",
    metric1: "Optimized (99.8%)",
    metric2: "+14.2% Growth",
    icon: <Cpu className="w-5 h-5" />,
    color: "neon-cyan"
  },
  /*/{
    id: "agency",
    label: "Creative Agency",
    title: "Bloom Digital Experience",
    desc: "A high-performance portfolio for elite digital creators and global agencies.",
    img: "/agency_demo_mockup_1774181080328.png",
    metric1: "Ultra-Fast (0.4s)",
    metric2: "95% Retention",
    icon: <Layout className="w-5 h-5" />,
    color: "neon-purple"
  },
  {
    id: "logistics",
    label: "Logistics & Tech",
    title: "Thorne Asset Tracker",
    desc: "Real-time global asset surveillance and logistics optimization engine.",
    img: "/logistics_demo_mockup_1774181100520.png",
    metric1: "Real-time Sync",
    metric2: "Zero Downtime",
    icon: <Zap className="w-5 h-5" />,
    color: "neon-cyan"
  },
  {
    id: "fintech",
    label: "Fintech & Web3",
    title: "Quantum Finance App",
    desc: "Secure, high-frequency financial interface with complex data visualization.",
    img: "/fintech_demo_mockup_1774181208540.png",
    metric1: "Tier-1 Security",
    metric2: "Instant Liquidity",
    icon: <Wallet className="w-5 h-5" />,
    color: "neon-green"
  },
  {
    id: "estate",
    label: "Real Estate",
    title: "Aurora Luxury Estates",
    desc: "High-end architectural showcase platform for premium property markets.",
    img: "/realestate_demo_mockup_1774181229972.png",
    metric1: "High-Res Ready",
    metric2: "Lead Gen Max",
    icon: <Building2 className="w-5 h-5" />,
    color: "white"
  }*/
];

export default function DemoShowcase() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [activeDevice, setActiveDevice] = useState("desktop");

  const devices = [
    { id: "desktop", icon: <Monitor className="w-5 h-5" />, label: "Desktop" },
    { id: "tablet", icon: <Tablet className="w-5 h-5" />, label: "Tablet" },
    { id: "mobile", icon: <Smartphone className="w-5 h-5" />, label: "Mobile" },
  ];

  return (
    <section id="demo" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-x-hidden">
      {/* Background Decor — reduced on small screens for performance */}
      <div className="hidden sm:block pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(62.5rem,200vw)] h-[min(62.5rem,200vh)] bg-neon-cyan/5 blur-[6rem] md:blur-[11.25rem] -z-10 motion-safe:animate-pulse" />

      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 border-neon-cyan/20"
          >
            <Rocket className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Infinite Ecosystems</span>
          </motion.div>
          
          <h2 className="text-[clamp(1.75rem,5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-4 sm:mb-6">
            Industry <span className="text-neon-cyan">Excellence</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our architectural implementations across high-performance sectors.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 sm:pb-6 -mb-4 sm:-mb-6 justify-start lg:justify-center gap-2 sm:gap-3 max-w-5xl mx-auto scroll-smooth touch-pan-x">
          {industries.map((ind) => (
            <button
              type="button"
              key={ind.id}
              onClick={() => setActiveIndustry(ind)}
              className={`flex-none snap-start min-h-[44px] px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-bold text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase transition-all duration-500 border relative overflow-hidden group touch-manipulation ${
                activeIndustry.id === ind.id 
                ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
                : "glass text-gray-400 border-white/5 hover:border-white/20"
              }`}
            >
              <div 
                className="absolute bottom-0 left-0 h-1 transition-all duration-500" 
                style={{ 
                  width: activeIndustry.id === ind.id ? "100%" : "0%",
                  backgroundColor: `hsl(var(--${ind.color}))`
                }}
              />
              <div className="flex items-center gap-2 relative z-10 whitespace-nowrap">
                {ind.icon}
                {ind.label}
              </div>
            </button>
          ))}
        </div>

        {/* Demo Frame */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-left w-full lg:w-1/2 min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 break-words">{activeIndustry.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed italic border-l-4 border-neon-cyan pl-4 sm:pl-6">
                    {activeIndustry.desc}
                </p>
            </div>
            
           
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group lg:px-6"
            >
              {/* Browser Frame */}
              <div className="glass p-1.5 sm:p-2 md:p-4 rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/10 relative overflow-hidden group-hover:border-neon-cyan/30 transition-all duration-500">
                <div className="bg-background rounded-xl sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative aspect-video md:aspect-[21/9]">
                  {/* Simulated URL Bar */}
                  <div className="bg-white/5 p-2 sm:p-3 md:p-4 flex items-center gap-2 sm:gap-4 border-b border-white/5 min-h-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-grow min-w-0 glass px-2 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-[11px] md:text-xs text-gray-500 flex items-center gap-2 italic truncate">
                      <Globe className="w-3 h-3 shrink-0" />
                      <span className="truncate">secure.smartconsult.digital/{activeIndustry.id}</span>
                    </div>
                  </div>

                  {/* Mockup Image */}
                  <div className="relative h-full overflow-hidden bg-white/5">
                    <motion.img 
                      key={activeIndustry.img}
                      src={activeIndustry.img} 
                      alt={activeIndustry.title} 
                      loading="lazy"
                      decoding="async"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: activeDevice === "mobile" ? 1.5 : activeDevice === "tablet" ? 1.25 : 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Interaction */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 hidden sm:flex items-center justify-center backdrop-blur-sm">
                      <a
                        href={activeIndustry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-10 py-3 sm:py-5 bg-white text-black font-black rounded-xl sm:rounded-2xl flex items-center gap-3 text-sm sm:text-base hover:scale-105 transition"
                      >
                        Explore System <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Status Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 md:-right-10 glass p-6 rounded-3xl hidden md:block border-neon-cyan/20 backdrop-blur-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 flex items-center justify-center">
                    <ShieldCheck className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Reliability</p>
                    <p className="text-sm font-bold">{activeIndustry.metric1}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl hidden lg:block border-neon-purple/20 backdrop-blur-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neon-purple/10 flex items-center justify-center">
                    <Rocket className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Impact</p>
                    <p className="text-sm font-bold">{activeIndustry.metric2}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
