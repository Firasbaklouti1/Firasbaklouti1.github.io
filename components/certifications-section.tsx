"use client"

import { useState } from "react"
import { Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedCard } from "@/components/client-animations"
import { CertificateViewer } from "@/components/certificate-viewer"
import portfolioDataRaw from "@/public/data/portfolio-en.json"
import { PortfolioData, Certification } from "@/types/portfolio"

const portfolioData = portfolioDataRaw as unknown as PortfolioData

export function CertificationsSection() {
  const { certifications } = portfolioData
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null)

  return (
    <>
      <section id="certifications" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedCard key={cert.id} delay={0.2 + index * 0.1}>
                <Card
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 cursor-pointer group relative z-10 focus-within:ring-2 focus-within:ring-purple-600 outline-none"
                  onClick={() => setSelectedCertificate(cert)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View certificate for ${cert.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setSelectedCertificate(cert)
                    }
                  }}
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
