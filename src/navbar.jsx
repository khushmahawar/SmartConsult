import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GooeyNav from "./components/GooeyNav";
import "./navbar.css";
import GlareHover from "./components/GlareHover";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const items = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "solution" },
    { label: "About Us", id: "contact" },
  ];

  return (
    <nav className="navbar">

      <div className="logo">
        Smart<span>Consults</span>
      </div>

      <div className={`nav-center ${menuOpen ? "open" : ""}`}>
        <GooeyNav
          items={items.map((item) => ({
            label: item.label,
            href: "#",
            onClick: () => scrollToSection(item.id)
          }))}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      
          <button 
  className="pricing-btn-nav" 
  onClick={() => navigate("/pricing")}
>
  View Pricing
</button>
      </div>

      {/* CTA BUTTON */}
      <GlareHover
        width="auto"
        height="auto"
        borderRadius="50px"
        glareColor="#ffffff"
        glareOpacity={0.25}
        glareAngle={-30}
        glareSize={250}
        transitionDuration={700}
        onClick={() => scrollToSection("contact")}
      >
        <button className="nav-btn">
          Book Free Consultation
        </button>
      </GlareHover>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}

export default Navbar;