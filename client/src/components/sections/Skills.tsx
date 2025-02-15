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

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 font-['Space_Grotesk']"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillIcon Icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
