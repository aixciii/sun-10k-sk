import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Battery, Gauge, Shield } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const iconMap = {
  'Výkon AC': Zap,
  'Max PV vstup': Battery,
  'Účinnosť': Gauge,
  'Záruka': Shield,
}

export function Hero() {
  const { hero, inverter } = siteConfig

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#F8FAFF] to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-[#E3F2FD] text-[#1E88E5] border-0 hover:bg-[#E3F2FD] text-sm px-4 py-1.5">
              {hero.badge}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-extrabold text-[#1A1A2E] leading-[1.1]">
              {hero.headline}
            </h1>
            
            <p className="text-lg text-[#6B7280] leading-relaxed">
              {hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                asChild 
                className="bg-[#1E88E5] hover:bg-[#1976D2] text-white text-base font-medium px-8 h-14 rounded-lg"
              >
                <a href="#kontakt">{hero.ctaPrimary}</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-[#6B7280] text-[#6B7280] hover:bg-[#F8FAFF] text-base h-14 rounded-lg"
              >
                <a href="#specifikacie">{hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white shadow-xl border-[#E5E7EB] rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[280px] bg-white flex items-center justify-center p-4">
                  <img
                    src={inverter.imageUrl}
                    alt="Deye SUN-10K-SG05LP3-EU hybridný menič 10kW"
                    crossOrigin="anonymous"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 border-t border-[#E5E7EB]">
                  {inverter.stats.map((stat, index) => {
                    const IconComponent = iconMap[stat.label as keyof typeof iconMap] || Zap
                    return (
                      <div 
                        key={index} 
                        className={`p-4 text-center bg-white
                          ${index % 2 === 0 ? 'border-r border-[#E5E7EB]' : ''}
                          ${index < 2 ? 'border-b border-[#E5E7EB]' : ''}
                        `}
                      >
                        <IconComponent className="h-5 w-5 mx-auto mb-2 text-[#1E88E5]" />
                        <div className="text-lg font-bold text-[#1A1A2E]">{stat.value}</div>
                        <div className="text-xs text-[#6B7280]">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
