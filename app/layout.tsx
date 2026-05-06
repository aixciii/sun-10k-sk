import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Deye SUN-10K | Hybridný menič 10kW | sun-10k.sk',
  description: 'Hybridný 3-fázový menič Deye SUN-10K-SG05LP3-EU. Cena 1 380 € bez DPH. Skladom v Bratislave. Doručenie 1–2 dni. Záruka 10 rokov. Oficiálny importér SK Partner s.r.o.',
  keywords: 'Deye, hybridný menič, 10kW, fotovoltaika, solárny menič, off-grid, on-grid, LiFePO4 batéria, Slovensko',
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
  },
  other: {
    'theme-color': '#1E88E5',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
