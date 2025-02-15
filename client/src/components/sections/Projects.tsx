import { motion } from 'framer-motion';
import SectionWrapper from '../ui/section-wrapper';
import ProjectCard from '../ui/project-card';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with React and TypeScript',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Project Two',
    description: 'Full-stack application with real-time features',
    tags: ['Node.js', 'Socket.io', 'MongoDB'],
  },
  {
    title: 'Project Three',
    description: 'Mobile-first responsive design implementation',
    tags: ['React Native', 'Redux', 'Firebase'],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="min-h-screen flex items-center bg-[#2A2A2A]/20">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center font-['Space_Grotesk']"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
