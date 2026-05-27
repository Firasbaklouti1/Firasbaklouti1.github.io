"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { sendContactEmail } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const MAX_MESSAGE_LENGTH = 1000

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        })

        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 space-y-4"
      >
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-purple-600" />
        </div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      className="space-y-4"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <motion.div whileFocus="focus" variants={inputVariants}>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="focus-visible:ring-purple-600"
            />
          </motion.div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <motion.div whileFocus="focus" variants={inputVariants}>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="focus-visible:ring-purple-600"
            />
          </motion.div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">
          Subject <span className="text-destructive">*</span>
        </Label>
        <motion.div whileFocus="focus" variants={inputVariants}>
          <Input
            id="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="focus-visible:ring-purple-600"
          />
        </motion.div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <span
            id="message-count"
            aria-live="polite"
            className={`text-xs ${formData.message.length > MAX_MESSAGE_LENGTH ? "text-destructive" : "text-muted-foreground"}`}
          >
            {formData.message.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
        <motion.div whileFocus="focus" variants={inputVariants}>
          <Textarea
            id="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={MAX_MESSAGE_LENGTH}
            className="focus-visible:ring-purple-600"
            aria-describedby="message-count"
          />
        </motion.div>
      </div>
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2"
              >
                <Spinner className="h-4 w-4" />
                <span>Sending...</span>
              </motion.div>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10"
              >
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </Button>
      </motion.div>
    </motion.form>
  )
}
