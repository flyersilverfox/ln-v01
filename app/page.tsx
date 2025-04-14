"use client"

import { ChevronRight, Code, Database, LineChart, Zap, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ContactForm } from "@/components/contact-form"
import { ServiceCard } from "@/components/service-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { FeatureCard } from "@/components/feature-card"
import { ClientLogos } from "@/components/client-logos"

// Navigation component inline
function Navigation() {
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden bg-slate-950 py-20 md:py-32">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
            <div className="h-full w-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                    Transforming Data Into <span className="text-blue-400">Intelligent</span> Web Experiences
                  </h1>
                  <p className="max-w-[600px] text-lg text-slate-300 md:text-xl">
                    We build custom, high-performance web applications that leverage the power of data visualization and
                    AI to drive business growth.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#services"
                    className="group inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                  >
                    Explore Our Services
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-slate-700 bg-transparent px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md border-slate-800 bg-slate-900/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="mb-6 space-y-2">
                      <h2 className="text-xl font-bold text-white">Start Your Project</h2>
                      <p className="text-sm text-slate-400">
                        Tell us about your project and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Our Specialized Services
              </h2>
              <p className="text-lg text-slate-600">
                We combine technical expertise with creative problem-solving to deliver exceptional digital solutions.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <ServiceCard
                icon={<Code className="h-10 w-10 text-blue-600" />}
                title="Custom Web Applications"
                description="Bespoke web applications tailored to your specific business needs, built with modern technologies and best practices."
                features={["Scalable architecture", "Responsive design", "Performance optimization"]}
              />
              <ServiceCard
                icon={<LineChart className="h-10 w-10 text-blue-600" />}
                title="Advanced Data Visualization"
                description="Transform complex data into intuitive, interactive visualizations that provide actionable insights."
                features={["Interactive dashboards", "Real-time analytics", "Custom chart development"]}
              />
              <ServiceCard
                icon={<Database className="h-10 w-10 text-blue-600" />}
                title="AI Integration"
                description="Leverage the power of artificial intelligence to automate processes and enhance user experiences."
                features={["Machine learning models", "Natural language processing", "Predictive analytics"]}
              />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="bg-slate-50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Our Success Stories
              </h2>
              <p className="text-lg text-slate-600">
                Explore how we've helped businesses transform their digital presence and achieve remarkable results.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <CaseStudyCard
                image="/placeholder.svg?height=400&width=600"
                title="Financial Dashboard for Global Bank"
                category="Data Visualization"
                description="Created a real-time financial dashboard that processes millions of transactions daily, providing actionable insights for decision-makers."
              />
              <CaseStudyCard
                image="/placeholder.svg?height=400&width=600"
                title="AI-Powered Customer Portal"
                category="AI Integration"
                description="Developed an intelligent customer portal that uses machine learning to personalize content and predict user needs."
              />
              <CaseStudyCard
                image="/placeholder.svg?height=400&width=600"
                title="Healthcare Data Platform"
                category="Custom Web Application"
                description="Built a secure, HIPAA-compliant platform for healthcare providers to manage patient data and visualize treatment outcomes."
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Why Choose Us
              </h2>
              <p className="text-lg text-slate-600">Our commitment to excellence sets us apart in the industry.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-blue-600" />}
                title="Technical Excellence"
                description="Our team of senior developers brings decades of combined experience in building complex web applications."
              />
              <FeatureCard
                icon={<LineChart className="h-8 w-8 text-blue-600" />}
                title="Data-Driven Approach"
                description="We leverage analytics and user data to continuously improve and optimize your digital products."
              />
              <FeatureCard
                icon={<Code className="h-8 w-8 text-blue-600" />}
                title="Innovative Solutions"
                description="We stay at the forefront of technology to deliver cutting-edge solutions that give you a competitive edge."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-slate-950 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-slate-300">
                Our clients include some of the most innovative companies across various industries.
              </p>
            </div>
            <ClientLogos />
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 text-slate-300">
                    "Their team delivered a sophisticated data visualization platform that transformed how we analyze
                    market trends. The quality of their work exceeded our expectations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-slate-800">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Sarah Johnson"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Sarah Johnson</p>
                      <p className="text-sm text-slate-400">CTO, FinTech Innovations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 text-slate-300">
                    "The AI integration they implemented has automated our customer support process, reducing response
                    times by 70% and significantly improving customer satisfaction."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-slate-800">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Michael Chen"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Michael Chen</p>
                      <p className="text-sm text-slate-400">Director of Operations, TechSolutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-800 bg-slate-900">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 text-slate-300">
                    "Working with this team was a game-changer for our business. Their custom web application
                    streamlined our operations and provided valuable insights through intuitive data visualizations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-slate-800">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Emily Rodriguez"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Emily Rodriguez</p>
                      <p className="text-sm text-slate-400">CEO, HealthTech Innovations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center shadow-xl md:p-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's Build Your Next Smart Solution
              </h2>
              <p className="mb-8 text-lg text-slate-300">
                Ready to transform your business with cutting-edge web technology? Our team of experts is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#hero"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                >
                  Start Your Project
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-600 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-slate-900">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-slate-900">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    Custom Web Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    Data Visualization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    UX/UI Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-slate-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-slate-600">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-slate-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-slate-600">info@dataviz.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-slate-600"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-slate-600">
                    123 Tech Plaza, Suite 400
                    <br />
                    San Francisco, CA 94105
                  </span>
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
