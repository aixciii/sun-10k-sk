import { Sun, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  const { company, contact, footer } = siteConfig

  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Company */}
          <div className="flex items-center gap-2 text-sm">
            <Sun className="h-5 w-5 text-[#1E88E5]" />
            <span className="font-semibold text-[#1A1A2E]">{company.website}</span>
            <span className="text-[#E5E7EB]">·</span>
            <span className="text-[#6B7280]">{company.name}</span>
            <span className="text-[#E5E7EB]">·</span>
            <span className="text-[#6B7280]">{company.tagline}</span>
          </div>

          {/* Contact */}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#1E88E5] transition-colors"
          >
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
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
