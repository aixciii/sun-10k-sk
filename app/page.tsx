import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { WarrantyBanner } from '@/components/warranty-banner'
import { Products } from '@/components/products'
import { SavingsCalculator } from '@/components/savings-calculator'
import { HowToOrder } from '@/components/how-to-order'
import { InquiryForm } from '@/components/inquiry-form'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <Products />
      <WarrantyBanner />
      <SavingsCalculator />
      <HowToOrder />
      <InquiryForm />
      <FAQ />
      <Footer />
    </main>
  )
}
