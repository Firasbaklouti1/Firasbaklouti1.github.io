"use client"

import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CertificateViewerProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title: string
}

export function CertificateViewer({ isOpen, onClose, pdfUrl, title }: CertificateViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[85vh] p-0 flex flex-col gap-0 overflow-hidden">
        <DialogHeader className="p-4 border-b flex-row items-center justify-between space-y-0 pr-12">
          <DialogTitle className="text-lg font-semibold truncate">
            {title}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
              <a href={pdfUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </DialogHeader>

        {/* PDF Viewer */}
        <div className="flex-1 bg-muted">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full border-none"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
