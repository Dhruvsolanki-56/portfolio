import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';
import TextReveal from '../ui/text-reveal';

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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30" />
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"
          style={{ opacity }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
        <TextReveal className="text-6xl md:text-8xl font-bold mb-6 font-['Space_Grotesk']">
          Dhruv's Protfolio
          <motion.span
            className="absolute -right-8 -top-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            {...floatingAnimation}
          />
        </TextReveal>

        <TextReveal 
          className="text-xl md:text-2xl text-[#FFFFFF80] mb-8 font-['SF_Pro_Display']"
          delay={0.2}
        >
          Building digital experiences that inspire
        </TextReveal>

        <TextReveal delay={0.4}>
          <motion.a 
            href="#about"
            className="inline-block bg-primary/20 backdrop-blur-md px-8 py-3 rounded-full
                     text-primary hover:bg-primary/30 transition-colors duration-300
                     border border-primary/20 hover:border-primary/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
        </TextReveal>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
      >
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
      </motion.div>
    </SectionWrapper>
  );
}
