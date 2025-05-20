"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import AnimatedText from "./animated-text"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      const opacity = 1 - Math.min(1, scrollY / 700)
      containerRef.current.style.opacity = opacity.toString()
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Environment preset="night" />

          <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[0, 0, 0]}>
            <group>
              <mesh position={[-3, -1, -5]}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#4f46e5" wireframe emissive="#4f46e5" emissiveIntensity={0.5} />
              </mesh>

              <mesh position={[3, 2, -3]}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.5} />
              </mesh>

              <mesh position={[-2, 3, -4]}>
                <icosahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial color="#ec4899" wireframe emissive="#ec4899" emissiveIntensity={0.5} />
              </mesh>

              <mesh position={[4, -2, -6]}>
                <tetrahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#06b6d4" wireframe emissive="#06b6d4" emissiveIntensity={0.5} />
              </mesh>
            </group>
          </Float>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Ganesh Sriramulu
          </h1>
        </motion.div>

        <AnimatedText
          text="Full Stack Developer | Cloud Enthusiast | ML Explorer"
          className="text-xl md:text-2xl text-gray-300 mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            View Projects
          </Button>
          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10" size="lg">
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-blue-400" />
        </motion.div>
      </div>
    </section>
  )
}
