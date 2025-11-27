"use client"
import { X, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificateViewerProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title: string
}

export function CertificateViewer({ isOpen, onClose, pdfUrl, title }: CertificateViewerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl h-[85vh] mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate pr-4">{title}</h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={pdfUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-800">
          <iframe src={`${pdfUrl}#view=FitH`} className="w-full h-full" title={title} />
        </div>
      </div>
    </div>
  )
}
