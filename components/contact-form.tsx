"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-blue-50 p-4 text-center">
        <h3 className="mb-2 text-lg font-semibold text-blue-700">Thank You!</h3>
        <p className="text-blue-600">We've received your message and will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Full Name"
          required
          className="border-slate-700 bg-slate-800 text-white placeholder:text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email Address"
          required
          className="border-slate-700 bg-slate-800 text-white placeholder:text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Tell us about your project"
          required
          className="min-h-[100px] border-slate-700 bg-slate-800 text-white placeholder:text-slate-400"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Get Started"
        )}
      </Button>
    </form>
  )
}
