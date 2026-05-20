import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ChevronRight, Linkedin } from "lucide-react"
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
import portfolioDataRaw from "@/public/data/portfolio.json"
import { PortfolioData } from "@/types/portfolio"

const portfolioData = portfolioDataRaw as unknown as PortfolioData

export default function Home() {
  const { personalInfo, socialLinks, about, experience, projects, skills, education } = portfolioData
  const upworkLink = socialLinks.find((l) => l.platform === "upwork")
  const githubLink = socialLinks.find((l) => l.platform === "github")
  const linkedinLink = socialLinks.find((l) => l.platform === "linkedin")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">
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
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  {about.keyExpertise.map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
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
            {experience.map((exp, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
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
            {projects.map((project, index) => (
              <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.details}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full relative overflow-hidden group bg-transparent">
                      <Link
                        href={project.link}
                        target="_blank"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span className="relative z-10">View Project</span>
                        <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
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
            {skills.categories.map((category, index) => (
              <AnimatedSection key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className={`w-8 h-8 rounded-full ${category.styles?.iconBg} flex items-center justify-center mr-2`}>
                        <span className={`${category.styles?.iconText} text-sm font-bold`}>{category.shortTitle}</span>
                      </span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className={`justify-center py-2 ${category.styles?.badgeHover} transition-colors`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Soft Skills */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Soft Skills & Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`px-4 py-2 text-sm ${skill.styles?.badge} ${skill.styles?.border} ${skill.styles?.hover} transition-colors`}
                  >
                    {skill.name}
                  </Badge>
                ))}
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

          <div className="mb-12 space-y-6">
            {education.degrees.map((degree, index) => (
              <AnimatedSection key={index} direction="left" delay={0.2 + index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{degree.title}</h4>
                      <p className="text-purple-600 dark:text-purple-400">{degree.institution}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{degree.period}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {degree.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Linked Accounts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.linkedAccounts.map((account, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-semibold">{account.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{account.description}</p>
                  </div>
                ))}
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
                  {upworkLink && (
                    <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                      <a
                        href={upworkLink.url}
                        target="_blank"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        rel="noreferrer"
                      >
                        {upworkLink.name} Profile
                      </a>
                    </div>
                  )}
                  {githubLink && (
                    <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                      <Github className="w-5 h-5 text-purple-600 mr-3" />
                      <a
                        href={githubLink.url}
                        target="_blank"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        rel="noreferrer"
                      >
                        {githubLink.name} Profile
                      </a>
                    </div>
                  )}
                  {linkedinLink && (
                    <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                      <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                      <a
                        href={linkedinLink.url}
                        target="_blank"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        rel="noreferrer"
                      >
                        {linkedinLink.name} Profile
                      </a>
                    </div>
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Based in {personalInfo.location}. I&apos;m available for freelance projects and always open to discussing new
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

      </main>

      {/* Footer - Updated for Firas */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">{personalInfo.name}</h2>
              <p className="text-gray-400">{personalInfo.title}</p>
            </div>
            <div className="flex space-x-4">
              {upworkLink && (
                <Link
                  href={upworkLink.url}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                  aria-label={upworkLink.name}
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
              {githubLink && (
                <Link
                  href={githubLink.url}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                  aria-label={githubLink.name}
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}
              {linkedinLink && (
                <Link
                  href={linkedinLink.url}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                  aria-label={linkedinLink.name}
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} {personalInfo.name} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
