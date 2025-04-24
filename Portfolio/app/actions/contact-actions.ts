"use server"

import fs from "fs/promises"
import path from "path"
import { revalidatePath } from "next/cache"

// Define the type for contact form data
export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function saveContactToCSV(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill out all fields",
      }
    }

    // Create CSV directory if it doesn't exist
    const csvDir = path.join(process.cwd(), "data")
    await fs.mkdir(csvDir, { recursive: true })

    // Define CSV file path
    const csvFilePath = path.join(csvDir, "contacts.csv")

    // Check if file exists, if not create with headers
    let fileExists = false
    try {
      await fs.access(csvFilePath)
      fileExists = true
    } catch (error) {
      // File doesn't exist, create with headers
      await fs.writeFile(csvFilePath, "Name,Email,Subject,Message,Date\n")
    }

    // Format data for CSV (escape commas and quotes)
    const formatForCSV = (text: string) => {
      // Replace double quotes with two double quotes and wrap in quotes if contains comma
      const escaped = text.replace(/"/g, '""')
      return escaped.includes(",") ? `"${escaped}"` : escaped
    }

    // Create CSV row
    const timestamp = new Date().toISOString()
    const csvRow = `${formatForCSV(name)},${formatForCSV(email)},${formatForCSV(subject)},${formatForCSV(message)},${timestamp}\n`

    // Append to CSV file
    await fs.appendFile(csvFilePath, csvRow)

    // Revalidate the contact page
    revalidatePath("/contact")

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Error saving contact to CSV:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}

