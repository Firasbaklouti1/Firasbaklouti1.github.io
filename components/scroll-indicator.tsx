"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Use document.documentElement.clientHeight to calculate the scrollable height.
      // Guard against division by zero as per Palette's Journal.
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const totalHeight = scrollHeight - clientHeight

      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0
      // Ensure progress is between 0 and 1
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial calculation
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollProgress * 100)}
      className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-50"
      style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    />
  )
}
