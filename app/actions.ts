import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendContactEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      const errorMessage = validatedFields.error.issues[0].message
      return { success: false, error: errorMessage }
    }

    const { name, email, subject, message } = validatedFields.data

    // Log contact form submission (for static site)
    console.log("Contact Form Submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate successful submission
    // Note: For actual email sending, integrate a third-party service like:
    // - Formspree (https://formspree.io/)
    // - EmailJS (https://www.emailjs.com/)
    // - Getform (https://getform.io/)
    // Or deploy to a platform with server-side capabilities (Vercel, Netlify, etc.)

    return { success: true }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return { success: false, error: "Failed to send message. Please try again later." }
  }
}
