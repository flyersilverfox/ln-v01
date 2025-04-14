import Image from "next/image"

export function ClientLogos() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src="/placeholder-logo.svg"
              alt={`Client Logo ${i + 1}`}
              width={120}
              height={60}
              className="h-12 w-auto object-contain brightness-0 invert opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
