"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TechStack from '@/components/Techstack';
import { Separator } from '@/components/ui/separator';
import { Terminal } from '@/components/Terminal';
import { Terminal as TerminalIcon, Layout } from "lucide-react";
import DitherBackground from "@/components/DitherBackground";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <main className="min-h-screen bg-transparent text-neutral-200 selection:bg-cyan-500/30 overflow-x-hidden relative">
      <DitherBackground />
      {/* Floating Toggle Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
        <motion.button
          onClick={() => setShowTerminal(!showTerminal)}
          className="group flex items-center justify-center gap-0 hover:gap-3 h-14 min-w-14 px-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-in-out active:scale-95"
        >
          {/* Icon Container */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {showTerminal ? <Layout size={24} /> : <TerminalIcon size={24} />}
          </div>
          
          {/* Animated Text Wrapper */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-mono font-bold tracking-tight transition-all duration-300 ease-in-out group-hover:max-w-[120px]">
            {showTerminal ? "GO GUI MODE" : "GO CLI MODE"}
          </span>
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {!showTerminal ? (
          <motion.div
            key="gui-mode"
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="max-w-5xl mx-auto px-6 py-20 space-y-24"
          >
            <Hero />
            <Separator className="bg-neutral-400" />
            <TechStack />
            <Separator className="bg-neutral-400" />
            <Projects />
          </motion.div>
        ) : (
          <motion.div
            key="cli-mode"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-screen"
          >
            <Terminal />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}