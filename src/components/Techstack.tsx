"use client";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Container, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="mb-2 h-8 w-8 text-blue-400" />,
    items: ["JavaScript", "Python", "C++", "Bash"]
  },
  {
    category: "Frontend",
    icon: <Layout className="mb-2 h-8 w-8 text-cyan-400" />,
    items: ["React.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
  },
  {
    category: "Backend",
    icon: <Server className="mb-2 h-8 w-8 text-green-400" />,
    items: ["Node.js", "Express.js", "REST APIs", "JWT","Flask"]
  },
  {
    category: "Database",
    icon: <Database className="mb-2 h-8 w-8 text-yellow-400" />,
    items: ["MongoDB","MySQL"]
  },
  {
    category: "DevOps",
    icon: <Container className="mb-2 h-8 w-8 text-purple-400" />,
    items: ["Docker", "Nginx", "Linux", "AWS EC2"]
  },
  {
    category: "Tools",
    icon: <Terminal className="mb-2 h-8 w-8 text-orange-400" />,
    items: ["Git", "GitHub", "Postman", "Vite"]
  }
];

export default function TechStack() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-3xl font-serif font-semibold text-white">Technical Arsenal</h2>
      </div>

<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
  {skills.map((skill, index) => (
    <motion.div
      key={skill.category}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-full" // 1. Ensure the motion wrapper fills the grid cell height
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors h-full flex flex-col"> 
        {/* 2. Added h-full and flex flex-col to the Card */}
        <CardContent className="p-8 flex flex-col items-center text-center h-full">
          {/* 3. Added h-full here too to ensure internal layout stays consistent */}
          {skill.icon}
          <h3 className="font-semibold font-mono text-neutral-200 mb-3">{skill.category}</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-auto"> 
            {/* 4. Added mt-auto to push the tags to the bottom if there is extra space */}
            {skill.items.map((item) => (
              <span 
                key={item} 
                className="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-neutral-400"
              >
                {item}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
    </section>
  );
}