"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">
      <motion.div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <h1 className="text-white font-serif font-bold text-5xl tracking-tight">
            Hi, I&apos;m <span className="text-cyan-500">Sukirth</span>
          </h1>
        </div>

        <p className="font-serif text-neutral-300 max-w-lg leading-relaxed text-lg mx-auto md:mx-0">
          I build software that’s practical, scalable, and user-focused. With
          experience across full-stack development, I enjoy designing APIs,
          working with modern frontend frameworks, and deploying reliable
          systems to production.
          <br />
          <br />
          Curious by nature, I’m constantly exploring backend architecture,
          DevOps practices, and performance optimization.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          {/* Fixed Button Syntax */}
          <Button 
            className="font-serif font-semibold bg-cyan-600 hover:bg-cyan-700 text-white"
            onClick={() => window.open("/Sukirth_Singh_Gaur.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-white"
              asChild
            >
              <a href="https://github.com/sukirth-singh-gaur" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-white"
              asChild
            >
              <a
                href="https://linkedin.com/in/sukirth-singh-gaur"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-white"
              asChild
            >
              <a href="https://x.com/SukirthSGaur" target="_blank" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
<Button
  variant="outline"
  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-white"
  asChild
>
  <a href="mailto:sukirthsinghgaur@yahoo.in" aria-label="Email">
    <Mail/>sukirthsinghgaur@yahoo.in
  </a>
</Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
      >
        <div className="w-full h-full rounded-full overflow-hidden relative ring-4 ring-neutral-800">
          <Image
            src="/glasses.png"
            alt="Sukirth's Profile"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}