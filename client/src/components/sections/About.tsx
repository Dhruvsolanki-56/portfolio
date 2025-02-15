import { motion } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';

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
            <p>
              I'm a passionate developer focused on creating immersive web experiences
              that combine beautiful design with powerful functionality.
            </p>
            <p>
              With expertise in modern web technologies and a keen eye for detail,
              I bring ideas to life through clean code and thoughtful user experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-4 rounded-2xl bg-primary/20 backdrop-blur-[20px] 
                        border border-white/10 p-8 transform rotate-3 transition-transform 
                        hover:rotate-0 duration-500">
            <div className="h-full w-full rounded-xl bg-[#2A2A2A]/40 backdrop-blur-sm" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
