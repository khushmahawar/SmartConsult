import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import Hero from "./Hero";
import Navbar from "./navbar";
import CustomCursor from "./components/CustomCursor";
import BrandMarquee from "./components/BrandMarquee";
import ScrollProgress from "./components/ScrollProgress";
import SectionReveal from "./components/SectionReveal";
import Preloader from "./components/Preloader";

// Lazy Load Below-the-fold Components
const DemoShowcase = lazy(() => import("./components/DemoShowcase"));
const Promise = lazy(() => import("./PromiseSection"));
const ProcessSection = lazy(() => import("./components/ProcessSection"));
const Solution = lazy(() => import("./Solution"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./ContactSection"));
const Footer = lazy(() => import("./Footer"));
const Pricing = lazy(() => import("./pricing"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <PageWrapper>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <BrandMarquee />
      
      <Suspense fallback={<div className="min-h-[50dvh] w-full flex items-center justify-center text-neon-cyan/50 animate-pulse font-mono tracking-widest text-xs sm:text-sm px-4 text-center">INITIALIZING_MODULES...</div>}>
        <SectionReveal><DemoShowcase /></SectionReveal>
        <SectionReveal><Promise /></SectionReveal>
        <SectionReveal><ProcessSection /></SectionReveal>
        <SectionReveal><Solution /></SectionReveal>
        <SectionReveal><Testimonials /></SectionReveal>
        <SectionReveal><FAQ /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={loading ? "max-h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <CustomCursor />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={
              <Suspense fallback={<div className="min-h-[50dvh] w-full flex items-center justify-center text-neon-cyan/50 text-sm px-4">Loading Pricing...</div>}>
                <Pricing />
              </Suspense>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;