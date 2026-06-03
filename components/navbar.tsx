"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, FileText } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import portfolioDataRaw from "@/public/data/portfolio-en.json"
import { PortfolioData } from "@/types/portfolio"
import { cn } from "@/lib/utils"

const portfolioData = portfolioDataRaw as unknown as PortfolioData

export function Navbar() {
  const { personalInfo, navLinks } = portfolioData
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Scroll Spy implementation
    const observerOptions = {
      rootMargin: "-40% 0px -40% 0px",
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "")
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [navLinks])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      const sectionId = link.href.startsWith("#") ? link.href.substring(1) : null
      if (sectionId) {
        const element = document.getElementById(sectionId)
        if (element) observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [navLinks])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-sm outline-none"
            >
              {personalInfo.name}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative group focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-sm outline-none ${
                        isActive
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                      }`}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="relative overflow-hidden group bg-transparent">
                    <span className="relative z-10">Download Resume</span>
                    <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a href="/documents/resume-en.pdf" download="Firas_Baklouti_Resume_EN.pdf" className="cursor-pointer flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>English Version</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/documents/resume-fr.pdf" download="Firas_Baklouti_Resume_FR.pdf" className="cursor-pointer flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>French Version</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <motion.div
            className="flex md:hidden items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 outline-none ${
                        isActive
                          ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
                          : "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                      }`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-4 pb-2 border-t border-gray-100 dark:border-gray-800">
                <p className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Resume
                </p>
                <div className="grid grid-cols-1 gap-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * navLinks.length }}
                  >
                    <a
                      href="/documents/resume-en.pdf"
                      download="Firas_Baklouti_Resume_EN.pdf"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      <FileText className="mr-3 h-5 w-5 text-purple-600" />
                      <span>English Version</span>
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (navLinks.length + 1) }}
                  >
                    <a
                      href="/documents/resume-fr.pdf"
                      download="Firas_Baklouti_Resume_FR.pdf"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      <FileText className="mr-3 h-5 w-5 text-purple-600" />
                      <span>French Version</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
