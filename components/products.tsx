'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star, ArrowRight } from 'lucide-react'
import { siteConfig, formatPrice } from '@/lib/site-config'

export function Products() {
  const { inverter, battery, combo, products } = siteConfig

  return (
    <section id="produkt" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {products.title}
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            {products.subtitle}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div 
          id="specifikacie" 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ alignItems: 'stretch' }}
        >
          {/* Inverter Card */}
          <article className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg">
            {/* Image Area */}
            <div 
              className="relative bg-white"
              style={{ width: '100%', height: '300px' }}
            >
              {/* Badges - top left */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#E8F5E9] text-[#2E7D32]">
                  <Check className="w-3 h-3" />
                  {inverter.badges.inStock}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white text-[#1E88E5] border border-[#1E88E5]">
                  <Star className="w-3 h-3 fill-current" />
                  {inverter.badges.bestPrice}
                </span>
              </div>
              
              {/* Image */}
              <img
                src={inverter.imageUrl}
                alt={inverter.name}
                crossOrigin="anonymous"
                style={{ 
                  width: '100%',
                  height: '300px',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-[#E3F2FD]" />

            {/* Product Info */}
            <div className="px-6 py-4">
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-0.5">
                {inverter.name}
              </h3>
              <p className="text-[13px] text-[#6B7280]">{inverter.description}</p>
            </div>

            {/* Price Section */}
            <div className="px-6 py-4 border-t border-b border-[#E5E7EB] bg-white">
              <div className="flex items-baseline gap-2">
                <span className="text-[32px] font-bold text-[#1E88E5]">
                  {formatPrice(inverter.priceExclVat, false)} {inverter.currency}
                </span>
              </div>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                bez DPH (s DPH: {formatPrice(inverter.priceInclVat)} {inverter.currency})
              </p>
            </div>

            {/* Specs Table */}
            <div className="px-6 py-4 flex-1">
              <div className="rounded-lg overflow-hidden border border-[#E5E7EB]">
                {inverter.specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between py-2.5 px-4 text-[13px] ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFF]'
                    }`}
                  >
                    <span className="text-[#6B7280]">{spec.label}</span>
                    <span className="font-medium text-[#1A1A2E]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-2 mt-auto">
              <Button 
                className="w-full h-12 text-sm font-medium bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-lg" 
                asChild
              >
                <a href="#kontakt">{products.ctaButton}</a>
              </Button>
            </div>
          </article>

          {/* Battery Card */}
          <article className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg">
            {/* Image Area */}
            <div 
              className="relative bg-white"
              style={{ width: '100%', height: '300px' }}
            >
              {/* Badges - top left */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#E8F5E9] text-[#2E7D32]">
                  <Check className="w-3 h-3" />
                  {battery.badges.inStock}
                </span>
                <span 
                  className="inline-flex items-center rounded-full text-[12px] font-medium"
                  style={{ 
                    background: '#E3F2FD', 
                    color: '#1E88E5', 
                    border: '1px solid #90CAF9',
                    padding: '4px 12px',
                    borderRadius: '20px'
                  }}
                >
                  {battery.badges.partner}
                </span>
              </div>
              
              {/* Image */}
              <img
                src={battery.imageUrl}
                alt={battery.name}
                crossOrigin="anonymous"
                style={{ 
                  width: '100%',
                  height: '300px',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-[#E3F2FD]" />

            {/* Product Info */}
            <div className="px-6 py-4">
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-0.5">
                {battery.name}
              </h3>
              <p className="text-[13px] text-[#6B7280]">{battery.description}</p>
            </div>

            {/* Price Section */}
            <div className="px-6 py-4 border-t border-b border-[#E5E7EB] bg-white">
              <div className="flex items-baseline gap-2">
                <span className="text-[32px] font-bold text-[#1E88E5]">
                  {formatPrice(battery.priceExclVat, false)} {battery.currency}
                </span>
              </div>
              <p className="text-[13px] text-[#6B7280] mt-0.5">
                bez DPH (s DPH: {formatPrice(battery.priceInclVat)} {battery.currency})
              </p>
              {/* Spacer to match inverter card height */}
              <div className="h-5 mt-2" />
            </div>

            {/* Specs Table */}
            <div className="px-6 py-4 flex-1">
              <div className="rounded-lg overflow-hidden border border-[#E5E7EB]">
                {battery.specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between py-2.5 px-4 text-[13px] ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFF]'
                    }`}
                  >
                    <span className="text-[#6B7280]">{spec.label}</span>
                    <span className="font-medium text-[#1A1A2E]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-2 mt-auto">
              <Button 
                className="w-full h-12 text-sm font-medium bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-lg" 
                asChild
              >
                <a href="#kontakt">{products.ctaButton}</a>
              </Button>
            </div>
          </article>
        </div>

        {/* Combo Banner - below product cards */}
        <div className="mt-10 rounded-xl border border-[#90CAF9] bg-[#E3F2FD] p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <Badge className="mb-3 bg-[#1E88E5] text-white border-0 text-xs px-3 py-1">
                {combo.badge}
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A2E] mb-1">
                {combo.name}
              </h3>
              <p className="text-[#6B7280] text-sm">
                {combo.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <div className="sm:text-right">
                <div className="text-2xl md:text-3xl font-bold text-[#1E88E5]">
                  {formatPrice(combo.priceExclVat, false)} {combo.currency}
                </div>
                <div className="text-[#6B7280] text-sm">bez DPH</div>
                <div className="text-xs text-[#6B7280]">
                  s DPH: {formatPrice(combo.priceInclVat)} {combo.currency}
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-[#1E88E5] hover:bg-[#1976D2] text-white font-medium rounded-lg h-12 px-6"
                asChild
              >
                <a href="#kontakt" className="flex items-center gap-2">
                  {combo.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
