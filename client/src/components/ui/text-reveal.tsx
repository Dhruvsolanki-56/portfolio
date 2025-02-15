import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const textVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    clipPath: 'inset(100% 0 0 0)'
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.45, 0, 0.55, 1]
    }
  })
};

export default function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={cn("relative", className)}
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={delay}
      >
        {children}
      </motion.div>
    </div>
  );
}
