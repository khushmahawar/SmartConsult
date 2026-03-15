import "./PromiseSection.css";
import { lazy, Suspense } from "react";

const BlurText = lazy(() => import("./components/BlurText"));

function PromiseSection() {

  const problems = [
    {
      title: "Manual Operations",
      text: "Repetitive workflows drain time, increase errors, and limit scalability.",
      solution: "We implement automation systems that scale effortlessly."
    },
    {
      title: "Disconnected Systems",
      text: "When tools don’t integrate, growth becomes chaotic and inefficient.",
      solution: "We unify your ecosystem into one structured growth engine."
    },
    {
      title: "Weak Digital Experience",
      text: "Poor UI and unclear journeys reduce trust and conversion rates.",
      solution: "We optimize performance and conversion architecture."
    },
    {
      title: "Lack of Data Clarity",
      text: "Without structured insights, decisions become guesswork.",
      solution: "We build intelligent dashboards that guide smart decisions."
    }
  ];

  return (

    <section className="promise-section">
      <div className="promise-container">

        <div className="promise-header">

          <Suspense fallback={<span></span>}>
            <BlurText
              text="Why Growth Gets Stuck"
              delay={200}
              animateBy="words"
              direction="top"
              className="promise-title"
            />
          </Suspense>

          <Suspense fallback={<span></span>}>
            <BlurText
              text="Most growing businesses don’t lack ambition — they lack structured systems."
              delay={100}
              animateBy="words"
              direction="top"
              className="promise-intro"
            />
          </Suspense>

        </div>

        <div className="promise-grid">
          {problems.map((item, index) => (
            <div key={index} className="promise-card">
              <h3>{item.title}</h3>
              <p className="problem-text">{item.text}</p>
              <div className="divider"></div>
              <p className="solution-text">{item.solution}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
}

export default PromiseSection;