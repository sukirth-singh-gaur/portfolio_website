"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Cloud, Music, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "BloggIt Platform",
    description: "Full-stack blogging app with AI grammar correction microservice.",
    tags: ["MERN", "Docker", "AWS EC2", "Nginx"],
    icon: <Cloud className="h-6 w-6 text-cyan-400" />,
    stats: "Containerized Backend",
    colSpan: "col-span-1 md:col-span-2", // Bento Grid: Large Item
  },
  {
    title: "DispLyrics",
    description: "Chrome extension fetching real-time Spotify lyrics.",
    tags: ["Python", "Flask", "Selenium"],
    icon: <Music className="h-6 w-6 text-purple-400" />,
    stats: "Auto-Scraper",
    colSpan: "col-span-1", // Bento Grid: Small Item
  },
  {
    title: "Weather Dashboard",
    description: "Real-time forecasting with dark mode & analytics.",
    tags: ["React", "Vite", "Tailwind"],
    icon: <Sun className="h-6 w-6 text-yellow-400" />,
    stats: "Live API Data",
    colSpan: "col-span-1", 
  }
];

export default function Projects() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <a href="#" className="text-cyan-400 hover:underline text-sm">View all projects →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={project.colSpan}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-neutral-900 border-neutral-800 hover:border-cyan-900/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-neutral-800 rounded-md">{project.icon}</div>
                  <div className="flex gap-2">
                    <Github className="h-5 w-5 text-neutral-500 hover:text-white cursor-pointer" />
                    <ExternalLink className="h-5 w-5 text-neutral-500 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <CardTitle className="text-white mt-4">{project.title}</CardTitle>
                <CardDescription className="text-neutral-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-neutral-800 text-neutral-300 hover:bg-cyan-900 hover:text-cyan-200">
                      {tag}
                    </Badge>
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