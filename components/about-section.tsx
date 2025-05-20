"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const timelineItems = [
    {
      year: "2022-2026",
      title: "BTech in Information Technology",
      description: "College of Engineering Guindy, Anna University",
      details: "7.96 GPA. DBMS, OS, Data Structures, Networks, Cloud, Distributed DB, IOT, Java, Python, C, C++.",
    },
    {
      year: "2021-2022",
      title: "Class XII HSC - Computer Science",
      description: "Zion Matriculation hr sec school",
      details: "97.33%. Programming Basics, Python, DBMS - SQL, MySQL",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know more about my background and skills" />

        <div ref={ref} className="relative z-10">
          <motion.div style={{ y, opacity }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A results-driven Information Technology undergraduate at CEG, Anna University, with a strong
                  foundation in full-stack development, cloud computing, and machine learning. Passionate about solving
                  real-world problems through technology, with proven experience in impactful projects and multiple
                  hackathon wins.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Adept at working across the tech stack, collaborating in team environments, and quickly adapting to
                  new challenges. Eager to contribute innovative solutions and grow as a dynamic tech professional in a
                  forward-thinking organization.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-blue-600 hover:bg-blue-700">English</Badge>
                  <Badge className="bg-purple-600 hover:bg-purple-700">Telugu</Badge>
                  <Badge className="bg-pink-600 hover:bg-pink-700">Tamil</Badge>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Certifications</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Web Development - IBM</li>
                    <li>Cloud Practitioner - AWS</li>
                    <li>Python Foundation - Infosys</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Head of Design - Youth Red Cross</li>
                    <li>Deputy Head of Events - IT dept, CEG</li>
                    <li>Design Organizer - Robotics Club of CEG</li>
                    <li>Design Coordinator - SAAS, CTF @CEG</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glassmorphism neon-glow p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6 text-center font-orbitron text-blue-400">
                    Education Timeline
                  </h3>
                  <div className="space-y-8 relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                    {timelineItems.map((item, index) => (
                      <Card key={index} className="glassmorphism border-0 ml-8 relative">
                        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 z-10 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        </div>
                        <CardContent className="p-4">
                          <div className="text-sm text-blue-400 font-semibold mb-1">{item.year}</div>
                          <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                          <div className="text-sm text-gray-400 mb-2">{item.description}</div>
                          <p className="text-sm text-gray-300">{item.details}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
