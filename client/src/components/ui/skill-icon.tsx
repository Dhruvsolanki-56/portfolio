import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillIconProps {
  Icon: IconType;
  name: string;
}

export default function SkillIcon({ Icon, name }: SkillIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-4 p-6 rounded-xl
                bg-white/5 backdrop-blur-md border border-white/10
                hover:border-primary/50 transition-colors"
    >
      <Icon className="w-12 h-12 text-primary" />
      <span className="text-lg font-['SF_Pro_Display']">{name}</span>
    </motion.div>
  );
}
