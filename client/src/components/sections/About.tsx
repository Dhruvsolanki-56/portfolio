import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';
import TextReveal from '../ui/text-reveal';

const maskAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    clipPath: 'inset(0 100% 0 0)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <SectionWrapper id="about" className="min-h-screen flex items-center relative bg-[#2A2A2A]/20">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <TextReveal className="text-4xl md:text-5xl font-bold mb-6 font-['Space_Grotesk']">
            About Me
          </TextReveal>

          <div className="space-y-4 text-lg text-[#FFFFFF80] font-['SF_Pro_Display']">
            <TextReveal delay={0.2}>
             Hey there! I'm a 20-year-old tech enthusiast currently pursuing my MSc in Information Technology at GLS University, 
              set to graduate in 2026. I previously earned my Bachelor of Computer Applications (BCA) from C.U. Shah College in 2024.
            </TextReveal>
            <TextReveal delay={0.4}>
              I have a deep passion for web development, UI/UX design, and interactive experiences. 
              My expertise spans React, PHP, Python, JavaScript, and CSS, allowing me to build dynamic, modern, and visually engaging web applications.
            </TextReveal>
          </div>
        </div>

        <motion.div
          variants={maskAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative aspect-square"
        >
          <div className="absolute inset-4 rounded-2xl backdrop-blur-[20px] border border-white/10 p-8 transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105">
            <div className="h-full w-full rounded-xl bg-[#2A2A2A]/40 backdrop-blur-sm relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <img src="2025_02_02_00_23_IMG_9433.JPG" alt="Image" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
