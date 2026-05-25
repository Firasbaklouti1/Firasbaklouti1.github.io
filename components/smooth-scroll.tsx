"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId) as HTMLElement

          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
              behavior: "smooth",
            })

            // Programmatically focus the target element after the scroll
            // We use a small timeout to allow the smooth scroll to start/finish
            setTimeout(() => {
              targetElement.focus({ preventScroll: true })
            }, 800)
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return null
}
