import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function FloatingNav() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed right-8 top-8 z-50 hidden md:block"
    >
      <ul className="flex gap-6 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md">
        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={cn(
                'text-sm font-medium text-white/60 transition-colors hover:text-white'
              )}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
