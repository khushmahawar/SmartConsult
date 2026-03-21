import "./Solution.css";
import GlareHover from "./components/GlareHover";
import BlurText from "./components/BlurText";
import SolutionRight from "./components/SolutionRight";
import AnimatedContent from './components/AnimatedContent'
import { useNavigate } from "react-router-dom";
function Solutions() {
   const navigate = useNavigate(); // ✅ correct place
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
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
    <section className="solutions-section">
      <div className="solutions-container">

        {/* LEFT SIDE */}
        <div className="solutions-left">
          
            <BlurText
            text="Systems Built to Drive"
            delay={200}
            animateBy="words"
            direction="top"
            className="solutions-lefth2"
           />
            <BlurText
            text="Real Growth"
            delay={200}
            animateBy="words"
            direction="top"
            className="solutions-leftspan"
          /> 
          
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
  <div><p>
            We design and implement digital systems that remove
            operational complexity and unlock scalable performance.
          </p>

          <ul className="solutions-points">
            <li>Automation that saves time</li>
            <li>Dashboards that drive decisions</li>
            <li>Systems designed to scale</li>
          </ul></div>
</AnimatedContent>
          

          <button className="solutions-btn">
            <GlareHover
              width="auto"
              height="auto"
              borderRadius="50px"
              glareColor="#ffffff"
              glareOpacity={0.25}
              glareAngle={-30}
              glareSize={250}
              transitionDuration={700}
              onClick={() => navigate("/pricing")}
            >
              <button className="solution-btn">
                Explore Our Solutions
              </button>
            </GlareHover>
            
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="solutions-right">
<SolutionRight />

        </div>

      </div>
    </section>
  );
}

export default Solutions;