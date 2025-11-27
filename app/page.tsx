import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations"
import { CertificationsSection } from "@/components/certifications-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section - Updated bio for Firas */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Hi! I'm Firas — a dedicated software engineer with strong experience in Java (Spring Boot), Python
                  automation/AI, and React/Next.js for building reliable, scalable and cleanly-architected applications.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I've worked on full systems including backend, frontend, automation tools, and AI-driven modules. I
                  focus on writing clean, maintainable code that delivers real value.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Based in Bizerte, Tunisia, I'm currently pursuing my Engineer's degree at Université Tunis Carthage
                  (2024-2026) while building practical experience through freelance work.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Full-Stack Development with Java Spring Boot & React/Next.js
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Python Automation & AI Agent Development</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Machine Learning & Deep Learning</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">REST API Design & Integration</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Docker, Git & DevOps Practices</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section - Updated for Firas */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Engineer Student</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Faculté de Science de Bizerte</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">September 2023 - Present</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Developing full-stack applications using Java Spring Boot, Python, and React/Next.js</li>
                  <li>Building AI-driven modules and automation tools for various projects</li>
                  <li>Working on machine learning and deep learning implementations</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Freelance Software Engineer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Upwork</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2022 - Present</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Building reliable, scalable web applications for international clients</li>
                  <li>Specializing in Java, Python AI/automation, and React/Next.js development</li>
                  <li>Delivering clean, maintainable code with focus on solution-oriented outcomes</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section - Updated for Firas's projects */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Sarcasm Detection — ML/NLP Project</CardTitle>
                  <CardDescription>Machine Learning & Natural Language Processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/sarcasm-detection-nlp-machine-learning.png"
                      alt="Sarcasm Detection ML Project"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built a machine learning model to detect sarcasm in text using NLP techniques. Implemented various
                    classification algorithms and natural language processing methods.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Machine Learning
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      NLP
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Deep Learning
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://github.com/Firasbaklouti1/sarcasm-detection-machine-learning-project"
                    target="_blank"
                  >
                    <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">View Project</span>
                      <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Car Rental Website</CardTitle>
                  <CardDescription>Full-Stack Web Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/car-rental-website-modern-ui.png"
                      alt="Car Rental Website"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed a comprehensive car rental platform with booking system, user authentication, and admin
                    dashboard for fleet management.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      REST API
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Web Development
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/Firasbaklouti1/carRentalWebsite" target="_blank">
                    <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">View Project</span>
                      <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Urbanova — Custom Apparel Platform</CardTitle>
                  <CardDescription>Full-Stack E-commerce Solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/custom-apparel-ecommerce-platform.png"
                      alt="Urbanova Custom Apparel Platform"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built a custom apparel e-commerce platform with Spring Boot backend and React frontend. Features
                    include product customization, order management, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Spring Boot
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Java
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      REST API
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://urbanova.tn" target="_blank">
                    <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">View Project</span>
                      <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Driving School Management System </CardTitle>
                  <CardDescription>
                    Complete management system for a driving school, built using Java, JavaFX, and MySQL
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/driving-school-management-system.png"
                      alt="Driving School Management System"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Complete management system for a driving school, built using Java, JavaFX, and MySQL. I designed the
                    architecture, implemented candidate management, payments, instructors, scheduling, and a financial
                    dashboard. The system includes layered code structure, reusable components, and optimized database
                    operations for real business workflows.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Java
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      JavaFX
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      MySQL
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Desktop Application
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/Firasbaklouti1/Driving-School-Management-System" target="_blank">
                    <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">View Project</span>
                      <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section - Updated for Firas's skills */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">BE</span>
                    </span>
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Java
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Spring Boot
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      REST API
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      JavaFX
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Docker
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">FE</span>
                    </span>
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      HTML/CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Tailwind CSS
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">AI</span>
                    </span>
                    AI & Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Machine Learning
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Deep Learning
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      AI Agent Development
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      NLP
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Automation
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Data Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">OPS</span>
                    </span>
                    Tools & DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Git
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      GitHub
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      VS Code
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      IntelliJ IDEA
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Postman
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Soft Skills */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Soft Skills & Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                >
                  Solution Oriented
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  Accountable for Outcomes
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  Arabic (Native)
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
                >
                  English (Conversational)
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  French (Conversational)
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section - Updated for Firas */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">Engineer's Degree</h4>
                    <p className="text-purple-600 dark:text-purple-400">Université Tunis Carthage</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2024 - 2026 (Expected)</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Currently pursuing an Engineer's degree with focus on software engineering, AI, and full-stack
                  development.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Linked Accounts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Active since 2022 - Version control & open source contributions
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">StackOverflow</h4>
                  <p className="text-gray-600 dark:text-gray-400">Community participation & knowledge sharing</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Section - Updated for Firas */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://www.upwork.com/freelancers/~01809538bb054905e6"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      Upwork Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://github.com/Firasbaklouti1"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://www.linkedin.com/in/firas-baklouti-68baa72b0/"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      linkedin Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Based in Bizerte, Tunisia. I'm available for freelance projects and always open to discussing new
                    opportunities or partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer - Updated for Firas */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Firas B.</h2>
              <p className="text-gray-400">Software Engineer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.upwork.com/freelancers/~01809538bb054905e6"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="Upwork"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/Firasbaklouti1"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/firas-baklouti-68baa72b0/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="linkedin"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Firas B. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
