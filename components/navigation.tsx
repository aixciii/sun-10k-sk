'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#produkt', label: 'Produkt' },
    { href: '#specifikacie', label: 'Špecifikácie' },
    { href: '#kalkulacka', label: 'Kalkulačka' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Sun className="h-7 w-7 text-[#1E88E5]" />
            <span className="text-lg font-bold text-[#1A1A2E]">SUN-10K.sk</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B7280] hover:text-[#1E88E5] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-[#1E88E5] hover:bg-[#1976D2] text-white font-medium rounded-lg h-10 px-5"
            >
              <a href="#kontakt">Získať ponuku</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#1A1A2E]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1A1A2E]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E5E7EB]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-[#6B7280] hover:text-[#1E88E5] transition-colors text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  asChild 
                  className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white font-medium rounded-lg h-12"
                >
                  <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                    Získať ponuku
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
