import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MessageCircle, Instagram, ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Solutions", id: "solution" },
    { label: "Growth Path", id: "promise" },
    { label: "Contact", id: "contact" },
  ];

  const contactLinks = [
    { label: "info@smartconsults.in", href: "mailto:info@smartconsults.in", icon: <Mail className="w-4 h-4" /> },
    { label: "+91 98267 77175", href: "tel:+919826777175", icon: <Phone className="w-4 h-4" /> },
    { label: "WhatsApp Chat", href: "https://wa.me/919826777175", icon: <MessageCircle className="w-4 h-4" /> },
    { label: "@smartconsult02", href: "https://instagram.com/smartconsult02", icon: <Instagram className="w-4 h-4" /> },
  ];

  return (
    <footer className="bg-background pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 relative overflow-x-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-0 right-[10%] w-[min(24rem,80vw)] h-[min(24rem,50vh)] bg-neon-purple/5 blur-[5rem] sm:blur-[7.5rem] rounded-full -z-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 ...">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="text-xl sm:text-2xl font-heading font-extrabold mb-6 sm:mb-8 flex items-center gap-2">
              <span className="text-white">Smart</span>
              <span className="text-neon-cyan">Consult</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-xs">
              Transforming operational complexity into high-performance digital systems for ambitious brands.
            </p>
            <div className="flex gap-4">
              {/* Social icons can go here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="hide-mobile">
            <h4 className="text-lg font-bold mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group min-h-[44px] sm:min-h-0 py-1 touch-manipulation text-left w-full sm:w-auto"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hide-mobile">
            <h4 className="text-lg font-bold mb-8">Solutions</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition-colors cursor-default">Automation Systems</li>
              <li className="hover:text-white transition-colors cursor-default">Growth Analytics</li>
              <li className="hover:text-white transition-colors cursor-default">Business Intelligence</li>
              <li className="hover:text-white transition-colors cursor-default">Conversion Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">Connect</h4>
            <ul className="space-y-4">
              {contactLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-cyan transition-all flex items-center gap-3"
                  >
                    <div className="p-2 glass rounded-lg">{link.icon}</div>
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2026 SmartConsult. Crafted for performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-600">
            <button type="button" className="min-h-[44px] px-2 hover:text-white transition-colors touch-manipulation">
              Privacy Policy
            </button>
            <button type="button" className="min-h-[44px] px-2 hover:text-white transition-colors touch-manipulation">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;