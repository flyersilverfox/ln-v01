import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  image: string
  title: string
  category: string
  description: string
}

export function CaseStudyCard({ image, title, category, description }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-slate-600">{description}</p>
        <Link href="#" className="group inline-flex items-center text-sm font-medium text-blue-600">
          View Case Study
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
