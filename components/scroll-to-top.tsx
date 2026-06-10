"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400)
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const mainContent = document.getElementById("main-content")
    if (mainContent) setTimeout(() => mainContent.focus({ preventScroll: true }), 800)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-600/20 hover:border-purple-600 hover:text-purple-600 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
