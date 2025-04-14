// components/layouts/SiteLayout.tsx
"use client"

import { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Code } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/Footer"


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
