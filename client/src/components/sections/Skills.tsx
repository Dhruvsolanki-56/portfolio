import { motion } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';
import SkillIcon from '../ui/skill-icon';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
         SiFigma, SiGit } from 'react-icons/si';

const skills = [
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiGit, name: 'Git' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 font-['Space_Grotesk']
                    relative inline-block"
        >
          Skills & Technologies
          <motion.div
            className="absolute -inset-2 -z-10 bg-primary/20 blur-xl rounded-full"
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
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillIcon
              key={skill.name}
              Icon={skill.icon}
              name={skill.name}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}