"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"


interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  github: string
  demo?: string
  details: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "SpotPerfect",
    description: "Warehouse Location Predictor",
    image: "https://storage.icograms.com/templates/preview/warehouse-map.png?height=400&width=60",
    techStack: ["Python", "Machine Learning", "GMap API", "Flask"],
    github: "https://github.com/Ganesh-73005",
    demo: "https://spotperfect.streamlit.app",
    details:
      "Built a location prediction system for Tier 2/3 Indian cities using GMap API and ML (90% accuracy with Random Forest & Linear Regression). The system analyzes demographic data, infrastructure availability, and market potential to suggest optimal warehouse locations.",
  },
  {
    id: 2,
    title: "Livestock Disease Detection",
    description: "Computer Vision-based Disease Prediction",
    image: "https://www.nivedi.res.in/Nadres_v2/images/ai/ai14.png?height=400&width=600",
    techStack: ["Python", "Computer Vision", "YOLO V8", "VGG16", "TensorFlow"],
    github: "https://github.com/Ganesh-73005",
    details:
      "Developed CV-based model with 97% accuracy (YOLO V8/V5, VGG16) on 5,000+ images across 6 disease classes using augmentation & imbalance handling. The system helps farmers identify diseases early and take preventive measures.",
  },
  {
    id: 3,
    title: "Safe Route & SOS App",
    description: "Safety App for Women",
    image:"https://cdn.dribbble.com/userupload/15335834/file/original-052ece072f935ce3974a46efd5600e03.png?format=webp&resize=400x300&vertical=center?height=400&width=600",
   
    techStack: ["React Native", "WebSocket", "ML", "GMM", "Node.js"],
    github: "https://github.com/Ganesh-73005",
  
    details:
      "GMM-based safe route predictor with WebSocket SOS, ML-based false alert filtering, auto-call system, and scam detection. Used Gaussian Mixture Model to analyze crime data and suggest safer routes for women traveling alone.",
  },
  {
    id: 4,
    title: "CDirect",
    description: "Campus Navigation App",
    image: "https://cdir.netlify.app/assets/cdir-logo-CES0fsRm.png?height=400&width=600",
    techStack: ["React", "WoosMap API", "GeoJSON", "Node.js"],
    github: "https://github.com/Ganesh-73005",
    demo:"https://cdir.netlify.app",
    details:
      "AI-powered navigation using WoosMap API & GeoJSON with indoor/outdoor routing; helped 500+ students navigate campus. The app provides turn-by-turn directions and points of interest within the campus.",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="Check out some of my recent work" />

        <div ref={ref} className="relative z-10">
          <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glassmorphism neon-glow h-full overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-3">{project.details}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                    <div className="flex space-x-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">Live Demo</span>
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="glassmorphism border-0 max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-orbitron text-blue-400">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-400">{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="relative h-64 my-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-900/30 text-blue-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-300">{selectedProject.details}</p>
              <div className="flex justify-end space-x-4 mt-4">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>

        {/* Background elements */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
