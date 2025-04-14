// components/layouts/SiteLayout.tsx
"use client"

import { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Code } from "lucide-react"
import Link from "next/link"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* ide jön az összes footer tartalom – később ide is kiszervezzük */}
            <div>
              <div className="mb-4 flex items-center">
                <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-slate-900">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">DataViz</span>
              </div>
              <p className="mb-4 text-slate-600">
                Transforming data into intelligent web experiences that drive business growth.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-600 hover:text-slate-900">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="text-center text-sm text-slate-600">
              © {new Date().getFullYear()} DataViz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
