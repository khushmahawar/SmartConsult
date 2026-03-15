import { useState, useEffect } from "react";
import "./HeroStack.css";

const images = [
  "/img6.webp",
  "/img7.webp",
  "/img8.webp",
  "/img9.webp",
  "/img10.webp"
];

export default function HeroStack() {

  const [active, setActive] = useState(0);

  // preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // auto slide
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
            <img
  src={img}
  alt=""
  loading="lazy"
  decoding="async"
/>
          </div>
        );

      })}

    </div>
  );
}