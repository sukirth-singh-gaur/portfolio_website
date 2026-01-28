"use client";
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TechStack from '@/components/Techstack';
import { Separator } from '@/components/ui/separator';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30 overflow-x-hidden">
      <motion.div 
        // 1. Start state: Heavy blur and slightly shifted down
        initial={{ 
          opacity: 0, 
          filter: "blur(20px)", 
          y: 20 
        }}
        // 2. End state: Crystal clear and at original position
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        // 3. Consolidated Transition (No conflicts)
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          staggerChildren: 0.1 
        }}
        className="max-w-5xl mx-auto px-6 py-20 space-y-24"
      >
        <Hero />
        <Separator className="bg-neutral-800" />
        <TechStack />
        <Separator className="bg-neutral-800" />
        <Projects />
      </motion.div>
    </main>
  );
}