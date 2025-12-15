import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TypingCycle = ({
  words = [],
  typeSpeed = 0.06,
  pause = 1,
}) => {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const tl = useRef();

  useEffect(() => {
    const obj = { length: 0 };

    const typeWord = () => {
      const currentWord = words[wordIndex.current];
      const fullText = currentWord;

      obj.length = 0;
      setText("");

      tl.current = gsap.timeline({
        onComplete: () => {
          wordIndex.current = (wordIndex.current + 1) % words.length;
          typeWord(); // loop forever
        },
      });

      // TYPE
      tl.current.to(obj, {
        length: fullText.length,
        duration: fullText.length * typeSpeed,
        ease: "none",
        onUpdate: () => {
          setText(fullText.slice(0, Math.floor(obj.length)));
        },
      });

      // PAUSE
      tl.current.to({}, { duration: pause });

      // DELETE
      tl.current.to(obj, {
        length: 0,
        duration: fullText.length * typeSpeed,
        ease: "none",
        onUpdate: () => {
          setText(fullText.slice(0, Math.floor(obj.length)));
        },
      });
    };

    typeWord();

    return () => tl.current?.kill();
  }, [words, typeSpeed, pause]);

  return (
    <span className="font-mono">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

export default TypingCycle;
