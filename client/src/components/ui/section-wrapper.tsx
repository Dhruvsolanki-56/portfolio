import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function SectionWrapper({ 
  children, 
  className,
  ...props 
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "w-full relative overflow-hidden",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 backdrop-blur-[8px]" />
      </motion.div>
      {children}
    </section>
  );
}
