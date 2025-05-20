"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Trophy, Medal, Award } from "lucide-react"
import Image from "next/image"

interface Achievement {
  id: number
  title: string
  organizer: string
  date: string
  type: "winner" | "finalist" | "participation"
  logo: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Smart India Hackathon",
    organizer: "SIH",
    date: "March 2023",
    type: "Round-2",
    logo: "https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg?height=80&width=80",
  },
  {
    id: 2,
    title: "Hack4Change",
    organizer: "Google",
    date: "July 2023",
    type: "Round-2",
    logo: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-06-27T08%3A37%3A48.429Z-dp%20%285%29.png?height=80&width=80",
  },
  {
    id: 3,
    title: "Prayatna",
    organizer: "MIT",
    date: "Feb 2025",
    type: "winner",
    logo: "https://www.knowafest.com/files/uploads/Prayatna%202k19.jpg?height=80&width=80",
  },
  {
    id: 4,
    title: "DataTrix",
    organizer: "SRM",
    date: "November 2024",
    type: "winner",
    logo: "https://datatrix.in/assets/main-logo-datatrix2-DI9BxWGU.png?height=80&width=80",
  },
  {
    id: 5,
    title: "I++",
    organizer: "CEG",
    date: "October 2023",
    type: "winner",
    logo: "https://images.shiksha.com/mediadata/images/1547804056phpGT8DhX.jpeg?height=80&width=80",
  },
  {
    id: 6,
    title: "Codecycle'24",
    organizer: "CEG",
    date: "October 2024",
    type: "winner",
    logo: "https://www.csau.in/logo.png",
  },
  {
    id: 7,
    title: "HackIT",
    organizer: "CEG",
    date: "March 2025",
    type: "Top 6",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQmS0-bVI1mvVoYt12fbC0rMfdDZ1Nm5b8A&s?height=80&width=80",
  }
]

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const getIconByType = (type: string) => {
    switch (type) {
      case "winner":
        return <Trophy className="h-5 w-5 text-yellow-400" />
      case "finalist":
        return <Medal className="h-5 w-5 text-gray-400" />
      case "participation":
        return <Award className="h-5 w-5 text-blue-400" />
      default:
        return null
    }
  }

  const getColorByType = (type: string) => {
    switch (type) {
      case "winner":
        return "from-yellow-500/20 to-yellow-600/20"
      case "finalist":
        return "from-gray-500/20 to-gray-600/20"
      case "participation":
        return "from-blue-500/20 to-blue-600/20"
      default:
        return "from-gray-500/20 to-gray-600/20"
    }
  }

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Hackathon Achievements"
          subtitle="My journey through various hackathons and competitions"
        />

        <div ref={ref} className="relative z-10">
          <motion.div style={{ y }} className="mb-12">
            <div className="flex justify-center gap-8 flex-wrap mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism p-4 rounded-lg flex items-center space-x-3"
              >
                <Trophy className="h-6 w-6 text-yellow-400" />
                <div>
                  <h4 className="font-medium">4 Wins</h4>
                  <p className="text-sm text-gray-400">First place victories</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism p-4 rounded-lg flex items-center space-x-3"
              >
                <Medal className="h-6 w-6 text-gray-400" />
                <div>
                  <h4 className="font-medium">3 Finalist</h4>
                  <p className="text-sm text-gray-400">Top contender positions</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glassmorphism p-4 rounded-lg flex items-center space-x-3"
              >
                <Award className="h-6 w-6 text-blue-400" />
                <div>
                  <h4 className="font-medium">12+ Participations</h4>
                  <p className="text-sm text-gray-400">Valuable experiences</p>
                </div>
              </motion.div>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {achievements.map((achievement) => (
                  <CarouselItem key={achievement.id} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="p-1"
                    >
                      <Card
                        className={`glassmorphism h-full overflow-hidden bg-gradient-to-br ${getColorByType(
                          achievement.type,
                        )}`}
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-4">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                              <Image
                                src={achievement.logo || "/placeholder.svg"}
                                alt={achievement.organizer}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>{getIconByType(achievement.type)}</div>
                          </div>
                          <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                          <p className="text-sm text-gray-400 mb-2">{achievement.organizer}</p>
                          <p className="text-xs text-gray-500 mt-auto">{achievement.date}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static transform-none mr-2 bg-gray-800 hover:bg-gray-700 border-gray-700" />
                <CarouselNext className="relative static transform-none ml-2 bg-gray-800 hover:bg-gray-700 border-gray-700" />
              </div>
            </Carousel>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
