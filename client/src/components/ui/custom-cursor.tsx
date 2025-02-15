import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed pointer-events-none z-50 mix-blend-difference"
            animate={{
              x: position.x - 5,
              y: position.y - 5,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 1000, damping: 50 }}
            exit={{ scale: 0 }}
          >
            <div className="w-[10px] h-[10px] bg-white rounded-full" />
          </motion.div>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-50 mix-blend-difference"
              animate={{
                x: position.x - 20,
                y: position.y - 20,
                scale: 1.5 - i * 0.2,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
                delay: i * 0.02,
              }}
              exit={{ scale: 0 }}
            >
              <div className="w-[40px] h-[40px] border border-white rounded-full opacity-20" />
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}
