import "./Hero.css";
import Orb from "./components/orb";
import GlareHover from "./components/GlareHover";
import HeroStack from "./components/HeroRight";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return (
    <section className="hero">

      {/* Background Orb */}
      <div className="hero-bg">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={220}
          forceHoverState={false}
          backgroundColor="transparent"
        />
      </div>

      {/* Content */}
      <div className="hero-container">

        <div className="hero-left">
          <h1>
            We Turn <br />
            Operational Complexity <br />
            into Scalable Digital Growth Systems
          </h1>

          <p>
            We help ambitious businesses automate operations,
            optimize systems, and scale using smart digital solutions.
          </p>

          <div className="hero-buttons">
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
              <button className="hero-btn">
                Book Free Consultation
              </button>
            </GlareHover>

            <button className="secondary">
              <a href="#solution">
              View Our Approach</a>
            </button>
          </div>
        </div>

        <div className="hero-right">
          <HeroStack />
          <p className="hero-caption">
            Systems That  <span className="highlight">Power Your Growth</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;