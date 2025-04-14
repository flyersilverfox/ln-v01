"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Code, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <div
            className={cn(
              "mr-2 flex h-8 w-8 items-center justify-center rounded-md transition-colors",
              isScrolled ? "bg-slate-900" : "bg-white",
            )}
          >
            <Code className={cn("h-5 w-5", isScrolled ? "text-white" : "text-slate-900")} />
          </div>
          <span className={cn("text-lg font-bold transition-colors", isScrolled ? "text-slate-900" : "text-white")}>
            DataViz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <button
            onClick={() => scrollToSection("services")}
            className={cn(
              "text-sm font-medium transition-colors hover:text-slate-900",
              isScrolled ? "text-slate-600" : "text-white/90",
            )}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("case-studies")}
            className={cn(
              "text-sm font-medium transition-colors hover:text-slate-900",
              isScrolled ? "text-slate-600" : "text-white/90",
            )}
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection("why-us")}
            className={cn(
              "text-sm font-medium transition-colors hover:text-slate-900",
              isScrolled ? "text-slate-600" : "text-white/90",
            )}
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={cn(
              "text-sm font-medium transition-colors hover:text-slate-900",
              isScrolled ? "text-slate-600" : "text-white/90",
            )}
          >
            Testimonials
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className={cn(
              "ml-4",
              isScrolled ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-slate-900 hover:bg-white/90",
            )}
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="flex items-center md:hidden" aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "h-6 w-6 text-slate-900" : "h-6 w-6 text-white"} />
          ) : (
            <Menu className={isScrolled ? "h-6 w-6 text-slate-900" : "h-6 w-6 text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-20 bg-white px-4 py-6 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-slate-900 hover:text-blue-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-sm font-medium text-slate-900 hover:text-blue-600"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-sm font-medium text-slate-900 hover:text-blue-600"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-slate-900 hover:text-blue-600"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
