import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { useTiltEffect } from '@/hooks/use-tilt-effect';

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

const textRevealVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ProjectCard({ title, description, tags, index }: ProjectCardProps) {
  const { tilt, tiltEventHandlers } = useTiltEffect(15);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={index}
      style={{
        perspective: 2000,
      }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        }}
        {...tiltEventHandlers}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0"
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <CardHeader>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={textRevealVariants}
            >
              <CardTitle className="font-['Space_Grotesk'] relative z-10">{title}</CardTitle>
              <CardDescription className="font-['SF_Pro_Display'] relative z-10 mt-2">{description}</CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    delay: i * 0.1,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary backdrop-blur-md border border-primary/30"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}