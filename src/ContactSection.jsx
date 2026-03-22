import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, MessageSquare, Phone, Building2, User } from "lucide-react";
import Magnetic from "./components/Magnetic";
import "./ContactSection.css";

function ContactSection() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, phone, business, message };

    try {
      setStatus("submitting");
      await fetch(
        "https://script.google.com/macros/s/AKfycbwSZfQC7lNJ0hrpKP6MxPJ8oYLxwRb2B0vlRhdNuBuC-J1DOFhVi_7quuB-Yg535FYL/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      setStatus("success");
      setName("");
      setPhone("");
      setBusiness("");
      setMessage("");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Something went wrong. Please try again or contact us directly.");
    }
  };

  const inputClasses =
    "w-full min-h-[3rem] bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all placeholder:text-gray-600";

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-x-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[min(37.5rem,120vw)] h-[min(37.5rem,80vh)] bg-neon-cyan/5 blur-[5rem] sm:blur-[7.5rem] rounded-full -z-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(1.75rem,5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-6 sm:mb-8 leading-tight text-center lg:text-left">
              Ready to <span className="text-neon-cyan">Automate</span> <br />
              Your Growth?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              We help ambitious businesses transform ideas into structured digital systems that scale operations and unlock sustainable growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: "Predictable Scale", color: "text-neon-cyan" },
                { label: "Unified Intelligence", color: "text-neon-purple" },
                { label: "System Autonomy", color: "text-neon-green" },
                { label: "Peak Performance", color: "text-neon-cyan" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                    <CheckCircle className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden border-white/5">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="    Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${inputClasses} pl-14`}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    placeholder="    Mobile Number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`${inputClasses} pl-14`}
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-black-500" />
                  <select
                    required
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className={`${inputClasses} pl-14 appearance-none cursor-pointer`}
                  >
                    <option value="    ">Business Type</option>
                    <option value="ecommerce" className="text-black">E-commerce</option>
                    <option value="startup" className="text-black">SaaS / Startup</option>
                    <option value="agency" className="text-black">Agency / Service</option>
                    <option value="realestate" className="text-black">Real Estate</option>
                    <option value="other" className="text-black">Other High-Growth</option>
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-6 top-6 w-5 h-5 text-gray-500" />
                  <textarea
                    placeholder="    What's your primary bottleneck?"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClasses} pl-14 pt-6`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                  <Magnetic strength={0.2}>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white text-black font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-neon-cyan/20 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {status === "submitting" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Launch Strategy <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </Magnetic>

                  <button
                    type="button"
                    onClick={() => navigate("/pricing")}
                    className="py-5 px-8 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/5"
                  >
                    View Packages
                  </button>
                </div>
              </form>

              {/* Status Overlays */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 glass-dark backdrop-blur-2xl flex flex-col items-center justify-center text-center p-8 z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="w-24 h-24 bg-neon-green/10 rounded-full flex items-center justify-center mb-8 border border-neon-green/20"
                    >
                      <CheckCircle className="w-12 h-12 text-neon-green" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 px-2">Transmission Received</h3>
                    <p className="text-gray-400 max-w-xs text-base sm:text-lg px-2">
                      An optimization specialist will reach out within 24 operational hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;