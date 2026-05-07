'use client'

import { useState, FormEvent } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Building2 } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function InquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    customerType: '',
    message: '',
    consent: false,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setHasAttemptedSubmit(true)
    
    const newErrors: Record<string, boolean> = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = true
    if (!formData.consent) newErrors.consent = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const response = await fetch("https://formspree.io/f/mjglrldq", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          customerType: formData.customerType,
          message: formData.message
        })
      })
      if (response.ok) {
        // Google Ads conversion tracking
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-18143606743/gvhECOnDpKgcENfvxctD',
            value: 1.0,
            currency: 'EUR'
          })
        }
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Form error:", error)
    }
  }

  if (isSubmitted) {
    return (
      <section id="kontakt" className="py-12 md:py-16 bg-[#F8FAFF]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-[#E5E7EB] rounded-xl">
            <CardContent className="p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                Ďakujeme!
              </h3>
              <p className="text-[#6B7280]">
                Ozveme sa do 24 hodín.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  const { company, contact } = siteConfig

  return (
    <section id="kontakt" className="py-12 md:py-16 bg-[#F8FAFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Kontaktujte nás</h3>
              <p className="text-[#6B7280]">Sme tu pre vás každý pracovný deň.</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-[#1A1A2E] hover:text-[#1E88E5] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E3F2FD] flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#1E88E5]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Telefón</div>
                  <div className="font-medium">{contact.phone}</div>
                </div>
              </a>

              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-[#1A1A2E] hover:text-[#1E88E5] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E3F2FD] flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#1E88E5]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Email</div>
                  <div className="font-medium">{contact.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#1E88E5]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Adresa</div>
                  <div className="font-medium text-[#1A1A2E]">{company.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-[#1E88E5]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Firemné údaje</div>
                  <div className="text-sm text-[#1A1A2E]">
                    <div>IČO: {company.ico}</div>
                    <div>DIČ: {company.dic}</div>
                    <div>IČ DPH: {company.icDph}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Right Side */}
          <div className="md:col-span-3">
            <Card className="shadow-lg border-[#E5E7EB] rounded-xl">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl md:text-3xl text-[#1A1A2E]">
                  Získajte cenovú ponuku
                </CardTitle>
                <CardDescription className="text-base text-[#6B7280]">
                  Odpovieme do 24 hodín. Bez záväzkov.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm text-[#1A1A2E]">
                  Meno / Firma <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (hasAttemptedSubmit) setErrors({ ...errors, name: false })
                  }}
                  className={`h-12 text-base border-[#E5E7EB] ${hasAttemptedSubmit && errors.name ? 'border-red-500' : ''}`}
                  placeholder="Vaše meno alebo názov firmy"
                />
                {hasAttemptedSubmit && errors.name && (
                  <p className="text-xs text-red-500">Toto pole je povinné</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm text-[#1A1A2E]">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    if (hasAttemptedSubmit) setErrors({ ...errors, email: false })
                  }}
                  className={`h-12 text-base border-[#E5E7EB] ${hasAttemptedSubmit && errors.email ? 'border-red-500' : ''}`}
                  placeholder="vas@email.sk"
                />
                {hasAttemptedSubmit && errors.email && (
                  <p className="text-xs text-red-500">Zadajte platný email</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm text-[#1A1A2E]">Telefón</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+421 9XX XXX XXX"
                  className="h-12 text-base border-[#E5E7EB]"
                />
              </div>

              {/* Interest */}
              <div className="space-y-1.5">
                <Label htmlFor="interest" className="text-sm text-[#1A1A2E]">Záujem o</Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                >
                  <SelectTrigger id="interest" className="h-12 text-base border-[#E5E7EB]">
                    <SelectValue placeholder="Vyberte produkt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="menic">Menič SUN-10K-SG05LP3-EU</SelectItem>
                    <SelectItem value="menic-bateria">Menič + Batéria SE-F12-C LV (kompletný systém)</SelectItem>
                    <SelectItem value="viac-kusov">Viac kusov / B2B</SelectItem>
                    <SelectItem value="ine">Iné</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Customer Type */}
              <div className="space-y-1.5">
                <Label htmlFor="customerType" className="text-sm text-[#1A1A2E]">Typ zákazníka</Label>
                <Select
                  value={formData.customerType}
                  onValueChange={(value) => setFormData({ ...formData, customerType: value })}
                >
                  <SelectTrigger id="customerType" className="h-12 text-base border-[#E5E7EB]">
                    <SelectValue placeholder="Vyberte typ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fyzicka-osoba">Fyzická osoba</SelectItem>
                    <SelectItem value="firma">Firma / IČO</SelectItem>
                    <SelectItem value="instalacna-firma">Inštalačná firma</SelectItem>
                    <SelectItem value="distributor">Distribútor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm text-[#1A1A2E]">Správa</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Vaša správa alebo otázky..."
                  rows={4}
                  className="text-base border-[#E5E7EB] min-h-[100px]"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => {
                    setFormData({ ...formData, consent: checked === true })
                    if (hasAttemptedSubmit) setErrors({ ...errors, consent: false })
                  }}
                  className={`mt-0.5 ${hasAttemptedSubmit && errors.consent ? 'border-red-500' : 'border-[#E5E7EB]'}`}
                />
                <div className="space-y-1">
                  <Label htmlFor="consent" className="text-sm font-normal text-[#6B7280] leading-relaxed cursor-pointer">
                    Súhlasím so spracovaním osobných údajov za účelom spracovania dopytu{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  {hasAttemptedSubmit && errors.consent && (
                    <p className="text-xs text-red-500">Súhlas je povinný</p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                className="w-full h-12 text-base font-medium bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-lg"
              >
                Odoslať dopyt
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
