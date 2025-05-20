"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionHeading from "./section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Layers, Cpu, PenTool, Briefcase } from "lucide-react"

interface Skill {
  name: string
  level: number
  icon?: React.ReactNode
}

interface SkillCategory {
  id: string
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      { name: "React", level: 85 },
      { name: "Flask", level: 80 },
      { name: "React Native", level: 75 },
      { name: "Java Spark", level: 70 },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Hive", level: 70 },
      { name: "PostGIS", level: 75 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    icon: <Briefcase className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "MS Office", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "3D Modeling", level: 70 },
      { name: "Illustration", level: 75 },
    ],
  },
]

const coreCompetencies = [
  {
    name: "Full Stack Development",
    icon: <Layers className="h-10 w-10 text-blue-400" />,
    description: "Building complete web applications from frontend to backend with modern technologies.",
  },
  {
    name: "Python Development",
    icon: <Code className="h-10 w-10 text-purple-400" />,
    description: "Creating efficient and scalable applications using Python and its ecosystem.",
  },
  {
    name: "REST APIs",
    icon: <Server className="h-10 w-10 text-pink-400" />,
    description: "Designing and implementing RESTful APIs for seamless data exchange.",
  },
  {
    name: "Cloud Development",
    icon: <Cpu className="h-10 w-10 text-blue-400" />,
    description: "Leveraging cloud platforms to build scalable and resilient applications.",
  },
  {
    name: "Database Expertise",
    icon: <Database className="h-10 w-10 text-purple-400" />,
    description: "Working with various database systems to store and retrieve data efficiently.",
  },
  {
    name: "Machine Learning",
    icon: <PenTool className="h-10 w-10 text-pink-400" />,
    description: "Applying ML algorithms to solve real-world problems and extract insights from data.",
  },
]

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("programming")
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills & Expertise" subtitle="My technical skills and core competencies" />

        <div ref={ref} className="relative z-10">
          <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism neon-glow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 font-orbitron text-blue-400">Technical Skills</h3>

                  <Tabs defaultValue="programming" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 bg-gray-900/50">
                      {skillCategories.map((category) => (
                        <TabsTrigger
                          key={category.id}
                          value={category.id}
                          className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-blue-400"
                        >
                          <div className="flex items-center">
                            {category.icon}
                            <span className="ml-2 hidden sm:inline">{category.name}</span>
                          </div>
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {skillCategories.map((category) => (
                      <TabsContent key={category.id} value={category.id} className="space-y-4">
                        {category.skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-300">{skill.name}</span>
                              <span className="text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  ease: "easeOut",
                                }}
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism neon-glow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 font-orbitron text-blue-400">Core Competencies</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {coreCompetencies.map((competency, index) => (
                      <motion.div
                        key={competency.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="bg-gray-900/50 p-4 rounded-lg flex flex-col items-center text-center"
                      >
                        <div className="mb-3">{competency.icon}</div>
                        <h4 className="text-lg font-medium mb-2">{competency.name}</h4>
                        <p className="text-sm text-gray-400">{competency.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Card className="glassmorphism neon-glow max-w-3xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 font-orbitron text-center text-blue-400">Soft Skills</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Openness to Feedback",
                    "Adaptive Nature",
                    "Collaboration",
                    "Leadership",
                    "Problem Solving",
                    "Time Management",
                    "Communication",
                    "Critical Thinking",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 p-3 rounded-lg text-center"
                    >
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
