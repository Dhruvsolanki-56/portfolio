import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto overflow-x-hidden bg-[#0A0A0A] text-white"
      style={{ perspective: '1px' }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      
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
