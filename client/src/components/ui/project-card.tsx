import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2,
    },
  },
};

export default function ProjectCard({ title, description, tags, index }: ProjectCardProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={index}
    >
      <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0"
          whileHover={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <CardHeader>
          <CardTitle className="font-['Space_Grotesk'] relative z-10">{title}</CardTitle>
          <CardDescription className="font-['SF_Pro_Display'] relative z-10">{description}</CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}