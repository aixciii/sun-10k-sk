import { Sun, Mail, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  const { company, contact, footer } = siteConfig

  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {/* Left side - Company Info */}
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="h-5 w-5 text-[#1E88E5]" />
              <span className="font-semibold text-[#1A1A2E]">{company.name}</span>
            </div>
            <span className="text-[#6B7280]">{company.addressShort}</span>
            <span className="text-[#6B7280]">
              IČO: {company.ico} | DIČ: {company.dic} | IČ DPH: {company.icDph}
            </span>
          </div>

          {/* Right side - Contact */}
          <div className="flex flex-col gap-2 text-sm md:text-right">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-[#6B7280] hover:text-[#1E88E5] transition-colors md:justify-end"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-[#6B7280] hover:text-[#1E88E5] transition-colors md:justify-end"
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#E5E7EB] text-center">
          <p className="text-xs text-[#6B7280]">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
