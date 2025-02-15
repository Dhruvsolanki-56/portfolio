import { motion } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';

export default function Intro() {
  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 font-['Space_Grotesk']"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Creative Developer
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
                     text-primary hover:bg-primary/30 transition-colors duration-300"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/80" />
      </div>
    </SectionWrapper>
  );
}
