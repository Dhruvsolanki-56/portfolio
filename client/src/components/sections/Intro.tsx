import { motion } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Intro() {
  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 font-['Space_Grotesk'] relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Creative Developer
          <motion.span
            className="absolute -right-8 -top-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            {...floatingAnimation}
          />
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-[#FFFFFF80] mb-8 font-['SF_Pro_Display']"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Building digital experiences that inspire
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="#about"
            className="inline-block bg-primary/20 backdrop-blur-md px-8 py-3 rounded-full
                     text-primary hover:bg-primary/30 transition-colors duration-300
                     border border-primary/20 hover:border-primary/40"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/80" />
      </div>
    </SectionWrapper>
  );
}