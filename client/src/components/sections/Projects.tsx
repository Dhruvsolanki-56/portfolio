import { motion } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';
import ProjectCard from '../ui/project-card';

const projects = [
  {
    title: 'E-Cab',
    description: 'A modern Cab booking application built with PHP',
    tags: ['PHP', 'HTML', 'JAVASCRIPT'],
  },
  {
    title: 'GLS Quizee',
    description: 'Full-stack application with real-time features',
    tags: ['PHP'],
  },
  {
    title: 'Protfolio Site',
    description: 'Responsive design implementation',
    tags: ['React Native', 'Typescript'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="min-h-screen flex items-center bg-[#2A2A2A]/20">
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center font-['Space_Grotesk'] relative"
        >
          Featured Projects
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
