import "./ContactSection.css";
import AnimatedContent from "./components/AnimatedContent";
import GlareHover from "./components/GlareHover";
import Pricing from "./pricing";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ContactSection() {
  const navigate = useNavigate(); // ✅ correct place
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [business,setBusiness] = useState("");
  const [message,setMessage] = useState("");

  const [status,setStatus] = useState("idle"); 
  // idle | submitting | success

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, phone, business, message };

    try {

      setStatus("submitting");

      await fetch(
        "https://script.google.com/macros/s/AKfycbwSZfQC7lNJ0hrpKP6MxPJ8oYLxwRb2B0vlRhdNuBuC-J1DOFhVi_7quuB-Yg535FYL/exec",
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );

      setStatus("success");

      setName("");
      setPhone("");
      setBusiness("");
      setMessage("");

      setTimeout(()=>{
        setStatus("idle");
      },1000);

    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Something went wrong.");
    }
  };

  return (
    <section className="contact-section">

      {/* OVERLAY */}
      {status !== "idle" && (
        <div className="submit-overlay">

          {status === "submitting" && (
            <>
              <div className="loader"></div>
              <h2>Submitting...</h2>
              <p>
                “Great businesses start with bold steps.”
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="success-check">✓</div>
              <h2>Submitted Successfully</h2>
              <p>We will contact you soon.</p>
            </>
          )}

        </div>
      )}

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">

          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <div>
              <h2>Let’s Turn Your Business Idea into Scalable Growth</h2>

              <p>
                We help ambitious businesses transform ideas into structured
                digital systems that scale operations, optimize performance,
                and unlock sustainable growth.
              </p>

              <ul>
                <li>Automate operations and save time</li>
                <li>Build data-driven dashboards</li>
                <li>Optimize digital performance</li>
                <li>Scale with intelligent systems</li>
              </ul>
            </div>

          </AnimatedContent>

        </div>

        {/* RIGHT */}
        <div className="contact-right">

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Your Phone Number"
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />

            <select
              required
              value={business}
              onChange={(e)=>setBusiness(e.target.value)}
            >
              <option value="">What is your business?</option>
              <option value="ecommerce">E-commerce</option>
              <option value="local_service">Local Service</option>
              <option value="startup">Startup</option>
              <option value="agency">Agency</option>
              <option value="saas">SaaS</option>
              <option value="other">Other</option>
            </select>

            <textarea
              placeholder="Tell us about your business"
              rows="4"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
{/* ✅ BUTTON GROUP */}
  <div className="btn-group">

    <button className="contact-btn" type="submit">
      <GlareHover
        width="auto"
        style={{ padding: "12px 24px", Transform: "none", fontSize: "16px", fontWeight: "bold" }}
        height="auto"
        borderRadius="50px"
        glareColor="#ffffff"
        glareOpacity={0.25}
        glareAngle={-30}
        glareSize={250}
        transitionDuration={700}
      >
        Start Scaling My Business
      </GlareHover>
    </button>

    <button 
      type="button"   // 🔥 important (form submit na ho)
      className="pricing-btn"
      onClick={() => navigate("/pricing")}
    >
      View Pricing Options
    </button>

  </div>

</form>
</div>
        </div>
    </section>
  );
}

export default ContactSection;