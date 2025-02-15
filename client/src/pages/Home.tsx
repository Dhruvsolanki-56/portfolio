import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import FloatingNav from '@/components/ui/floating-nav';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto overflow-x-hidden bg-[#0A0A0A] text-white scroll-smooth"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />

      <FloatingNav />

      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30" />
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"
          style={{ opacity }}
        />
      </motion.div>

      <main className="relative">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}