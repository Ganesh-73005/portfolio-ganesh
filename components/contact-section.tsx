"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-400" />,
      label: "Email",
      value: "ganeshsriramulu2@gmail.com",
      href: "mailto:ganeshsriramulu2@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-blue-400" />,
      label: "Phone",
      value: "+91 7305900924",
      href: "tel:+917305900924",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-400" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Chennai,India",
    },
    {
      icon: <Github className="h-5 w-5 text-blue-400" />,
      label: "GitHub",
      value: "github.com/ganesh",
      href: "https://github.com/Ganesh-73005",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ganesh",
      href: "https://in.linkedin.com/in/ganesh-s-60ba63339?trk=people-guest_people_search-card",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact & Resume" subtitle="Get in touch with me or download my resume" />

        <div ref={ref} className="relative z-10">
          <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism neon-glow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 font-orbitron text-blue-400">Get In Touch</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-gray-900/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-gray-900/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        rows={5}
                        className="bg-gray-900/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {isSubmitted && (
                      <div className="p-3 bg-green-900/30 border border-green-500 text-green-400 rounded-md text-sm">
                        Thank you for your message! I'll get back to you soon.
                      </div>
                    )}
                  </form>
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
                  <h3 className="text-xl font-semibold mb-6 font-orbitron text-blue-400">Contact Information</h3>

                  <div className="space-y-4 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="mr-3 mt-1">{info.icon}</div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400">{info.label}</h4>
                          <Link
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 font-orbitron text-blue-400">Resume</h3>
                    <p className="text-gray-400 mb-4">
                      Download my resume to learn more about my education, experience, and skills.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
