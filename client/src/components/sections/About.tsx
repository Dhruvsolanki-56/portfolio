import { motion } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';

const gradientAnimation = {
  animate: {
    background: [
      'linear-gradient(45deg, rgba(110,86,207,0.1) 0%, rgba(110,86,207,0.05) 100%)',
      'linear-gradient(225deg, rgba(110,86,207,0.1) 0%, rgba(110,86,207,0.05) 100%)',
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
};

export default function About() {
  return (
    <SectionWrapper id="about" className="min-h-screen flex items-center relative bg-[#2A2A2A]/20">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-[#FFFFFF80] font-['SF_Pro_Display']">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm a passionate developer focused on creating immersive web experiences
              that combine beautiful design with powerful functionality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              With expertise in modern web technologies and a keen eye for detail,
              I bring ideas to life through clean code and thoughtful user experiences.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square"
        >
          <motion.div
            {...gradientAnimation}
            className="absolute inset-4 rounded-2xl backdrop-blur-[20px] 
                      border border-white/10 p-8 transform rotate-3 transition-all
                      duration-500 hover:rotate-0 hover:scale-105"
          >
            <div className="h-full w-full rounded-xl bg-[#2A2A2A]/40 backdrop-blur-sm
                          relative overflow-hidden group">
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}