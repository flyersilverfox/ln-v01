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
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-slate-900">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-slate-900">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-slate-900">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">Custom Web Applications</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">Data Visualization</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">AI Integration</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">UX/UI Design</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-slate-600 hover:text-slate-900">About Us</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">Case Studies</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">Careers</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">Blog</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-2 text-slate-600">
                <li>+1 (555) 123-4567</li>
                <li>info@dataviz.com</li>
                <li>
                  123 Tech Plaza, Suite 400<br />
                  San Francisco, CA 94105
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
