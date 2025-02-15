import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillIconProps {
  Icon: IconType;
  name: string;
  index: number;
}

export default function SkillIcon({ Icon, name, index }: SkillIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5 
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="group relative flex flex-col items-center gap-4 p-6 rounded-xl
                  bg-white/5 backdrop-blur-md border border-white/10
                  hover:border-primary/50 transition-all duration-300"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-12 h-12 text-primary transition-colors duration-300
                         group-hover:text-primary/80" />
        </motion.div>
        <span className="text-lg font-['SF_Pro_Display'] transition-colors duration-300
                       group-hover:text-primary/80">{name}</span>

        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}