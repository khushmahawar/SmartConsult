import { useEffect, useState, useRef } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

export default function TextScramble({ text, delay = 0, duration = 1.5, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const iterations = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const queue = text.split("").map((char, i) => ({
      from: chars[Math.floor(Math.random() * chars.length)],
      to: char,
      start: Math.floor(Math.random() * 20),
      end: Math.floor(Math.random() * 20) + 20,
    }));

    const update = () => {
      let output = "";
      let complete = 0;

      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span class="opacity-50">${char}</span>`;
        } else {
          output += "";
        }
      }

      setDisplayText(output);

      if (complete === queue.length) {
        // done
      } else {
        frame++;
        timeoutRef.current = setTimeout(update, 30);
      }
    };

    const startTimeout = setTimeout(update, delay);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutRef.current);
    };
  }, [text, delay]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: displayText }} />;
}
