import { Metadata } from "next"
import SiteLayout from "@/components/layouts/SiteLayout"

export const metadata: Metadata = {
  title: "About Us - DataViz",
  description: "Learn more about the DataViz team and our mission",
}

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="min-h-screen px-6 py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">About Us</h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            At DataViz, we craft high-performance web experiences using cutting-edge data visualization and AI
            technologies. Our team is dedicated to helping businesses grow through innovative digital solutions.
          </p>
        </div>
      </section>
    </SiteLayout>
  )
}
