import { FileText, Clock, CheckCircle, Truck } from 'lucide-react'

export function HowToOrder() {
  const steps = [
    {
      icon: FileText,
      number: '1',
      title: 'Vyplňte formulár',
      description: 'Zadajte údaje a vyberte produkty',
    },
    {
      icon: Clock,
      number: '2',
      title: 'Ponuka do 24 hodín',
      description: 'Pripravíme cenovú ponuku',
    },
    {
      icon: CheckCircle,
      number: '3',
      title: 'Potvrdíte objednávku',
      description: 'Schválte ponuku a podmienky',
    },
    {
      icon: Truck,
      number: '4',
      title: 'Doručenie 1–2 dni',
      description: 'Rýchle doručenie zo skladu v Bratislave',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            Ako objednať
          </h2>
          <p className="text-base text-[#6B7280]">
            Jednoduchý proces v 4 krokoch
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line - desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-[#E3F2FD]" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#1E88E5] flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#29B6F6] flex items-center justify-center text-white font-bold text-xs">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#1A1A2E] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
