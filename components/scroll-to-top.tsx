"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 400)
    window.addEventListener("scroll", toggle, { passive: true })
    return () => window.removeEventListener("scroll", toggle)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-700 text-white focus-visible:ring-2 focus-visible:ring-purple-600 outline-none"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left"><p>Scroll to top</p></TooltipContent>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
