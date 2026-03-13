import { useState, useRef, useEffect } from "react";
import "./SolutionStack.css";

const images = [
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img4.png",
  "/img5.png"
];

export default function HeroStack() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let isAnimating = false;

    const handleScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (isAnimating) return;

      isAnimating = true;

      if (e.deltaY > 0) {
        setActive(prev => (prev + 1) % images.length);
      } else {
        setActive(prev => prev === 0 ? images.length - 1 : prev - 1);
      }

      setTimeout(() => {
        isAnimating = false;
      }, 900);
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="stack-container" ref={containerRef}>
      {images.map((img, index) => {
        const position =
          (index - active + images.length) % images.length;

        let styles = {};

        if (position === 0) {
          // Front card
          styles = {
            transform: "translateY(0px) scale(1)",
            zIndex: 3,
            opacity: 1
          };
        } else if (position === 1) {
          // Second card
          styles = {
            transform: "translateY(40px) scale(0.92)",
            zIndex: 2,
            opacity: 0.7
          };
        } else if (position === 2) {
          // Third card
          styles = {
            transform: "translateY(80px) scale(0.85)",
            zIndex: 1,
            opacity: 0.4
          };
        } else {
          // Hide others
          styles = {
            opacity: 0,
            pointerEvents: "none"
          };
        }

        return (
          <div
            key={index}
            className="stack-card"
            style={styles}
          >
            <img src={img} alt="" />
          </div>
        );
      })}
    </div>
  );
}