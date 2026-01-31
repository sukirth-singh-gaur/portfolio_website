"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "BloggIt Platform",
    description: "React-based frontend for a MERN blogging platform with JWT authentication, rich-text editing and API-driven architecture.",
    tags: ["MERN", "Docker", "AWS EC2", "Nginx"],
    image: "/bloggit.png",
    github: "https://github.com/sukirth-singh-gaur/BloggIt-Frontend",
    live: "https://project-bloggit.vercel.app/",
    colSpan: "col-span-1",
  },
  {
    title: "WorkQueue",
    description: "A distributed background task processing system designed for handling intensive asynchronous tasks using Redis.",
    tags: ["Express", "Javascript", "Redis"],
    image: "/workqueue.png",
    github: "https://github.com/sukirth-singh-gaur/WorkQueue",
    live: "nil",
    colSpan: "col-span-1", 
  },
  {
    title: "DispLyrics",
    description: "A chrome extension which fetches lyrics for the current playing song and displayes it on Spotify.",
    tags: ["Python", "Flask", "Selenium"],
    image: "/displyrics.png",
    github: "https://github.com/sukirth-singh-gaur/DispLyrics",
    live: "nil",
    colSpan: "col-span-1",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time forecasting with dark mode & analytics using OpenWeather API.",
    tags: ["React", "Vite", "Tailwind"],
    image: "/weather.png",
    github: "https://github.com/sukirth-singh-gaur/react-weather",
    live: "https://react-weather-taupe.vercel.app/",
    colSpan: "col-span-1", 
  }
];

export default function Projects() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white font-serif">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project,index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={project.colSpan}
            whileHover={{ y: -5 }}
            transition={{delay:index * 0.1}}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden bg-neutral-900 border-neutral-800 hover:border-cyan-900/50 transition-colors flex flex-col p-0">
              <div className="relative w-full aspect-video overflow-hidden border-b border-neutral-800">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <CardHeader className="flex-none p-6">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group/icon"
                    >
                      <Github className="h-5 w-5 text-neutral-500 group-hover/icon:text-white transition-colors" />
                    </a>
                    
                    {/* Conditional Rendering for Live Link */}
                    {project.live !== "nil" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group/icon"
                      >
                        <ExternalLink className="h-5 w-5 text-neutral-500 group-hover/icon:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-neutral-400 mt-2 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-neutral-800 text-neutral-300 hover:bg-cyan-900 hover:text-cyan-200"
                    >
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