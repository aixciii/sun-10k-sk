import { Truck, MapPin, Shield, Award, Building } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const icons = [Truck, MapPin, Shield, Award, Building]

export function TrustBar() {
  const { trustBar } = siteConfig

  return (
    <section className="bg-white border-y border-[#E5E7EB] py-6 md:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {trustBar.map((item, index) => {
            const IconComponent = icons[index] || Shield
            return (
              <div key={index} className="flex flex-col items-center text-center gap-2 min-w-[110px] md:min-w-0 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-[#1E88E5]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#1A1A2E] whitespace-nowrap">{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
