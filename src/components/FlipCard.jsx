// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function FlipCard({ children }) {
  const prevChildrenRef = useRef(null); // tracks previous children

  const [frontFace, setFrontFace] = useState(children);
  const [backFace, setBackFace] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Flip whenever children changes
  useEffect(() => {
    // Compare by type or key to detect new child
    const prev = prevChildrenRef.current;
    const isDifferent =
      !prev || prev.type !== children.type || prev.key !== children.key;

    if (!isDifferent) return;

    // Set new child on back and trigger flip
    setBackFace(children);
    setIsFlipped(prev => !prev);

    prevChildrenRef.current = children;
  }, [children]);

  // Promote back → front after animation
  const handleAnimationComplete = () => {
    if (backFace) {
      setFrontFace(backFace);
      setBackFace(null);
    }
  };

  return (
    <div className="relative max-w-6xl w-full min-h-screen my-20 mx-auto perspective">
      <motion.div
        className="absolute inset-0 w-full min-h-full transform-style-preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0, }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
      >
        {/* FRONT */}
        <div
          className="
            absolute overflow-auto inset-0 z-10 p-10 md:p-16 shadow-2xl text-center
            backdrop-blur-sm bg-white/30 dark:bg-white/5
            border border-slate-200/20 dark:border-white/10
            rounded-2xl flex items-center justify-center backface-hidden"
        >
          {frontFace}
        </div>

        {/* BACK */}
        <div
          className="
            absolute overflow-auto inset-0 p-10 md:p-16 shadow-2xl text-center
            backdrop-blur-sm bg-white/30 dark:bg-white/5
            border border-slate-200/20 dark:border-white/10
            rounded-2xl flex items-center justify-center backface-hidden rotate-y-180"
        >
          {backFace}
        </div>
      </motion.div>
    </div>
  );
}

export default FlipCard;
