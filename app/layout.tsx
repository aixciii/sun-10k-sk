import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Deye SUN-10K | Hybridný menič 10kW | sun-10k.sk',
  description: 'Hybridný 3-fázový menič Deye SUN-10K-SG05LP3-EU. Cena 1 380 € bez DPH. Skladom v Bratislave. Doručenie 1–2 dni. Záruka 10 rokov. Oficiálny importér SK Partner s.r.o.',
  keywords: 'Deye, hybridný menič, 10kW, fotovoltaika, solárny menič, off-grid, on-grid, LiFePO4 batéria, Slovensko',
  alternates: {
    canonical: 'https://sun-10k.sk/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Deye SUN-10K | Hybridný menič 10kW | sun-10k.sk',
    description: 'Hybridný 3-fázový menič Deye SUN-10K-SG05LP3-EU. Cena 1 380 € bez DPH. Skladom v Bratislave.',
    type: 'website',
    locale: 'sk_SK',
    url: 'https://www.sun-10k.sk/',
  },
  other: {
    'theme-color': '#1E88E5',
  },
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Deye SUN-10K-SG05LP3-EU",
  "description": "Hybridný 3-fázový menič 10 kW pre solárne systémy",
  "image": "https://cdn.myshoptet.com/usr/www.deye-slovakia.sk/user/shop/big/171-1_sun-8-12k-sg05lp3-eu-sm22.png",
  "brand": { "@type": "Brand", "name": "Deye" },
  "offers": {
    "@type": "Offer",
    "price": "1380",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "SK Partner s.r.o."
    }
  }
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SK Partner s.r.o.",
  "telephone": "+421948450458",
  "email": "sales@sk-partner.sk",
  "url": "https://www.sun-10k.sk/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Staviteľská ulica 3",
    "addressLocality": "Bratislava",
    "postalCode": "831 04",
    "addressCountry": "SK"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk" className="bg-background">
      <head>
        {/* Structured Data - Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {/* Google Ads Conversion Tracking (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18143606743"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18143606743');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
