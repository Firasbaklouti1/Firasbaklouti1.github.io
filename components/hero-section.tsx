"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Mail, ExternalLink, Download, ArrowDown, FileText, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { AnimatedText, ClientMotion } from "@/components/client-animations"
import portfolioDataRaw from "@/public/data/portfolio-en.json"
import { PortfolioData } from "@/types/portfolio"

const portfolioData = portfolioDataRaw as unknown as PortfolioData

export function HeroSection() {
  const { personalInfo, socialLinks } = portfolioData
  const upworkLink = socialLinks.find((l) => l.platform === "upwork")
  const githubLink = socialLinks.find((l) => l.platform === "github")
  const linkedinLink = socialLinks.find((l) => l.platform === "linkedin")
  const stackoverflowLink = socialLinks.find((l) => l.platform === "stackoverflow")

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <AnimatedText text={personalInfo.name} className="text-4xl md:text-5xl font-bold tracking-tight" />
              <AnimatedText
                text={personalInfo.title}
                className="text-2xl md:text-3xl font-semibold mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                once={true}
              />
            </div>
            <ClientMotion
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {personalInfo.shortBio}
            </ClientMotion>
            <ClientMotion
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="relative overflow-hidden group">
                <Link href="#contact">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="relative overflow-hidden group bg-transparent">
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="relative overflow-hidden group">
                    <Download className="w-4 h-4 mr-2" />
                    <span className="relative z-10">Resume</span>
                    <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
            </ClientMotion>
            <ClientMotion
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {upworkLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={upworkLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors transform hover:scale-110 duration-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-full outline-none"
                      aria-label="Upwork Profile"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Upwork Profile</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {githubLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-full outline-none"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub Profile</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {linkedinLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={linkedinLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-full outline-none"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn Profile</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {stackoverflowLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={stackoverflowLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors transform hover:scale-110 duration-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-full outline-none"
                      aria-label="StackOverflow Profile"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>StackOverflow Profile</p>
                  </TooltipContent>
                </Tooltip>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-full outline-none"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email Me</p>
                </TooltipContent>
              </Tooltip>
            </ClientMotion>
          </div>
          <ClientMotion
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image src={personalInfo.profileImage} alt={personalInfo.name} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 mix-blend-overlay" />
            </div>
          </ClientMotion>
        </div>

        <ClientMotion
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#about"
            className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-full outline-none"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6" />
          </Link>
        </ClientMotion>
      </div>
    </section>
  )
}
