import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Magnetic from "./components/Magnetic";
import "./navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
    if (pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "solution" },
    { label: "About Us", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-pt ${
        isScrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`glass-dark rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 transition-all duration-300 ${
            isScrolled ? "mx-auto max-w-5xl shadow-2xl shadow-black/50" : "max-w-7xl"
          }`}
        >
          {/* Logo */}
          <div
            className="text-xl sm:text-2xl font-heading font-extrabold cursor-pointer flex items-center gap-2 min-h-[44px] min-w-0 touch-manipulation"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-white">Smart</span>
            <span className="text-neon-cyan">Consults</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => navigate("/pricing")}
              className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Pricing
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Magnetic strength={0.1}>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 py-2 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white inline-flex items-center justify-center min-h-[44px] min-w-[44px] -mr-1 rounded-full touch-manipulation hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-3 sm:mt-4 mx-2 sm:mx-4 rounded-[1.5rem] sm:rounded-[2rem] overflow-x-hidden overflow-y-auto overscroll-contain border border-white/10 shadow-2xl max-h-[min(85vh,calc(100dvh-7rem))]"
          >
            <div className="p-4 sm:p-6 flex flex-col gap-1 sm:gap-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg sm:text-xl font-medium text-white hover:text-neon-cyan transition-colors min-h-[48px] py-3 px-3 rounded-xl active:bg-white/5 touch-manipulation"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  navigate("/pricing");
                  setMobileMenuOpen(false);
                }}
                className="text-left text-lg sm:text-xl font-medium text-white hover:text-neon-cyan transition-colors min-h-[48px] py-3 px-3 rounded-xl active:bg-white/5 touch-manipulation"
              >
                Pricing
              </button>
              <div className="pt-4 mt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="w-full min-h-[48px] py-4 bg-neon-gradient text-white font-bold rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform touch-manipulation"
                >
                  Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
