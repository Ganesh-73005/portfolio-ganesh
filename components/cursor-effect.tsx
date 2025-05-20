"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      mixBlendMode: "difference",
    },
  }

  useEffect(() => {
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, button")

    const mouseEnterText = () => setCursorVariant("text")
    const mouseLeaveText = () => setCursorVariant("default")

    textElements.forEach((element) => {
      element.addEventListener("mouseenter", mouseEnterText)
      element.addEventListener("mouseleave", mouseLeaveText)
    })

    return () => {
      textElements.forEach((element) => {
        element.removeEventListener("mouseenter", mouseEnterText)
        element.removeEventListener("mouseleave", mouseLeaveText)
      })
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-outline hidden md:block"
        variants={variants}
        animate="default"
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
      />
    </>
  )
}
