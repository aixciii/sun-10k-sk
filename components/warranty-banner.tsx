import { Shield } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function WarrantyBanner() {
  const { warranty } = siteConfig

  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          style={{ 
            width: '100%',
            backgroundColor: '#E8F5E9',
            border: '1px solid #A5D6A7',
            borderRadius: '12px',
            padding: '28px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px'
          }}
        >
          <Shield 
            style={{ 
              width: '40px', 
              height: '40px', 
              color: '#1B5E20',
              flexShrink: 0
            }}
          />
          <div>
            <h3 
              style={{ 
                fontSize: '22px', 
                fontWeight: 700, 
                color: '#1B5E20',
                margin: 0,
                lineHeight: 1.3
              }}
            >
              {warranty.title}
            </h3>
            <p 
              style={{ 
                fontSize: '15px', 
                color: '#2E7D32',
                margin: 0,
                marginTop: '4px'
              }}
            >
              {warranty.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
