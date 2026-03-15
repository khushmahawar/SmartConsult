import { useState, useRef, useEffect } from "react";
import "./SolutionStack.css";
const images = [
  "/img1.webp",
  "/img2.webp",
  "/img3.webp",
  "/img4.webp",
  "/img5.webp"
];

export default function HeroStack() {

  const [active, setActive] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="stack-container">

      {images.map((img, index) => {

        const isActive = index === active;

        return (
          <div
            key={index}
            className="stack-card"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
              transition: "opacity 0.6s ease"
            }}
          >
            <img src={img} alt="" />
          </div>
        );

      })}

    </div>
  );
}