'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Calculator, TrendingUp, Calendar, Wallet } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function SavingsCalculator() {
  const { calculator } = siteConfig
  
  const [consumption, setConsumption] = useState([10000])
  const [electricityPrice, setElectricityPrice] = useState([0.20])
  const [solarCoverage, setSolarCoverage] = useState([55])

  const formatNumber = (num: number): string => {
    return num.toLocaleString('sk-SK')
  }

  const results = useMemo(() => {
    const yearlyConsumption = consumption[0]
    const price = electricityPrice[0]
    const coverage = solarCoverage[0] / 100

    const yearlySavings = yearlyConsumption * price * coverage
    const monthlySavings = yearlySavings / 12
    const totalInvestment = calculator.totalInvestment
    const paybackYears = totalInvestment / yearlySavings
    const twentyYearSavings = yearlySavings * 20

    const paybackRounded = Math.round(paybackYears)
    const paybackLabel = paybackRounded === 1 ? 'rok' : 
                         paybackRounded >= 2 && paybackRounded <= 4 ? 'roky' : 'rokov'

    return {
      yearlySavings: formatNumber(Math.round(yearlySavings)),
      monthlySavings: formatNumber(Math.round(monthlySavings)),
      paybackYears: `~${paybackRounded} ${paybackLabel}`,
      twentyYearSavings: formatNumber(Math.round(twentyYearSavings)),
    }
  }, [consumption, electricityPrice, solarCoverage, calculator.totalInvestment])

  const resultCards = [
    { icon: Wallet, label: 'Ročná úspora', value: `${results.yearlySavings} €`, color: 'text-[#1E88E5]', bg: 'bg-[#E3F2FD]' },
    { icon: TrendingUp, label: 'Mesačná úspora', value: `${results.monthlySavings} €`, color: 'text-[#1E88E5]', bg: 'bg-[#E3F2FD]' },
    { icon: Calendar, label: 'Návratnosť', value: results.paybackYears, color: 'text-[#2E7D32]', bg: 'bg-[#E8F5E9]' },
    { icon: Calculator, label: 'Úspora za 20 rokov', value: `${results.twentyYearSavings} €`, color: 'text-[#2E7D32]', bg: 'bg-[#E8F5E9]' },
  ]

  return (
    <section id="kalkulacka" className="py-12 md:py-16 bg-[#F8FAFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            {calculator.title}
          </h2>
          <p className="text-base text-[#6B7280]">
            {calculator.subtitle}
          </p>
        </div>

        <Card className="shadow-lg border-[#E5E7EB] rounded-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-[#1A1A2E]">
              <Calculator className="h-5 w-5 text-[#1E88E5]" />
              Nastavte parametre
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Annual Consumption */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <label className="text-sm font-medium text-[#1A1A2E]">
                  Ročná spotreba elektriny
                </label>
                <span className="text-lg font-bold text-[#1E88E5]">
                  {formatNumber(consumption[0])} kWh
                </span>
              </div>
              <Slider
                value={consumption}
                onValueChange={setConsumption}
                min={3000}
                max={30000}
                step={500}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-[#6B7280]">
                <span>3 000 kWh</span>
                <span>30 000 kWh</span>
              </div>
            </div>

            {/* Electricity Price */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <label className="text-sm font-medium text-[#1A1A2E]">
                  Cena elektriny
                </label>
                <span className="text-lg font-bold text-[#1E88E5]">
                  {electricityPrice[0].toLocaleString('sk-SK', { minimumFractionDigits: 2 })} €/kWh
                </span>
              </div>
              <Slider
                value={electricityPrice}
                onValueChange={setElectricityPrice}
                min={0.10}
                max={0.35}
                step={0.01}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-[#6B7280]">
                <span>0,10 €/kWh</span>
                <span>0,35 €/kWh</span>
              </div>
            </div>

            {/* Solar Coverage */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <label className="text-sm font-medium text-[#1A1A2E]">
                  Pokrytie solárom
                </label>
                <span className="text-lg font-bold text-[#1E88E5]">
                  {solarCoverage[0]} %
                </span>
              </div>
              <Slider
                value={solarCoverage}
                onValueChange={setSolarCoverage}
                min={30}
                max={80}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-[#6B7280]">
                <span>30 %</span>
                <span>80 %</span>
              </div>
            </div>

            {/* Results */}
            <div className="pt-6 border-t border-[#E5E7EB]">
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-4">Vaše úspory</h3>
              <div className="grid grid-cols-2 gap-4">
                {resultCards.map((card, index) => (
                  <div
                    key={index}
                    className={`${card.bg} rounded-lg p-4 text-center`}
                  >
                    <card.icon className={`h-5 w-5 mx-auto mb-2 ${card.color}`} />
                    <div className={`text-xl sm:text-2xl font-bold ${card.color}`}>{card.value}</div>
                    <div className="text-xs text-[#6B7280] mt-1">{card.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#6B7280] text-center mt-4">
                {calculator.disclaimer}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
