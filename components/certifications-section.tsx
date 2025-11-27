"use client"

import { useState } from "react"
import { Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedCard } from "@/components/client-animations"
import { CertificateViewer } from "@/components/certificate-viewer"

interface Certificate {
  id: string
  number: string
  title: string
  issuer: string
  duration: string
  completedDate: string
  issuedBy: string
  description: string
  pdfUrl: string
}

const certificates: Certificate[] = [
  {
    id: "stat-python-1",
    number: "#43,988,459",
    title: "Statistical Thinking in Python (Part 1)",
    issuer: "DataCamp",
    duration: "3 Hours",
    completedDate: "October 26, 2025",
    issuedBy: "Jonathan Cornelissen, CEO",
    description:
      "Successfully completed course covering fundamental statistical concepts and their implementation in Python.",
    pdfUrl: "/documents/certificates/statistical-thinking-python-1.pdf",
  },
  {
    id: "stat-python-2",
    number: "#43,988,764",
    title: "Statistical Thinking in Python (Part 2)",
    issuer: "DataCamp",
    duration: "4 Hours",
    completedDate: "October 26, 2025",
    issuedBy: "Jonathan Cornelissen, CEO",
    description:
      "Advanced statistical thinking concepts including hypothesis testing and bootstrap analysis in Python.",
    pdfUrl: "/documents/certificates/statistical-thinking-python-2.pdf",
  },
  {
    id: "case-studies",
    number: "#43,989,028",
    title: "Case Studies in Statistical Thinking",
    issuer: "DataCamp",
    duration: "4 Hours",
    completedDate: "October 26, 2025",
    issuedBy: "Jonathan Cornelissen, CEO",
    description:
      "Real-world case studies applying statistical thinking to analyze data and draw meaningful conclusions.",
    pdfUrl: "/documents/certificates/case-studies-statistical-thinking.pdf",
  },
]

export function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  return (
    <>
      <section id="certifications" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <AnimatedCard key={cert.id} delay={0.2 + index * 0.1}>
                <Card
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 cursor-pointer group relative z-10"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-purple-600 text-white">{cert.number}</Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.duration}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Completed: {cert.completedDate}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Issued by: {cert.issuedBy}</p>
                    </div>
                    <div className="mt-3 flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <Award className="w-4 h-4 mr-1" />
                      Click to view certificate
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <CertificateViewer
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        pdfUrl={selectedCertificate?.pdfUrl || ""}
        title={selectedCertificate?.title || ""}
      />
    </>
  )
}
